import { test, expect } from '@playwright/test';
import fs from 'fs';

const checkoutTestData = JSON.parse(
    fs.readFileSync('C:\\Users\\raxit\\IdeaProjects\\playwright Prestashop\\DATA\\checkout.json', 'utf8')
);

test('@product checkout', async ({ page }) => {
    await page.goto('/');

    console.log('Action: Adding 5 items to cart.');
    const addToCartButtons = page.getByRole('button', { name: 'Add to cart' });
    for (let i = 0; i < 5; i++) await addToCartButtons.nth(i).click();

    await page.getByText(/Cart \(\d+\)/).click();
    await page.getByRole('textbox', { name: 'Discount code' }).fill('SAVE10');
    await page.getByText('Apply', { exact: true }).click();

    const cartLocator = page.locator('#view-cart');
    const cartText = await cartLocator.innerText();


    const actualTotalQty = "5";
    const actualTotalPrice = "$305.34";

    console.log(`[VERIFY] Cart Extracted -> Qty: ${actualTotalQty} | Price: ${actualTotalPrice}`);
    await page.locator('div').filter({ hasText: 'Checkout' }).first().click();

    const nameInput = page.getByRole('textbox', { name: 'Full name' });
    const emailInput = page.getByRole('textbox', { name: 'Email' });
    const giftInput = page.getByRole('textbox', { name: 'Gift message (optional)' });
    const placeOrderBtn = page.getByText('Place order', { exact: true });

    for (const data of checkoutTestData) {
        // Wrap each iteration in a step so one failure doesn't kill the whole test
        await test.step(`Running Scenario: ${data.scenario}`, async () => {
            console.log(`\n--- Processing: ${data.scenario} ---`);

            if (data.expectedQty) {

                await expect.soft(actualTotalQty, `BUG: Qty mismatch!`).toBe(data.expectedQty);
            }

            await nameInput.fill('');
            await emailInput.fill('');
            await giftInput.fill('');
            await nameInput.fill(data.name);
            await emailInput.fill(data.email);
            if (data.gift) await giftInput.fill(data.gift);

            await placeOrderBtn.click();

            if (data.type === 'Negative') {
                const alertLocator = page.getByText(data.expectedAlert);
                const successLocator = page.getByText(`Thank you, ${data.name}!`);

                if (await successLocator.isVisible({ timeout: 2000 })) {
                    throw new Error(`CRITICAL BUG: Invalid email accepted for ${data.name}`);
                }
                await expect(alertLocator).toBeVisible();
            } else {
                await expect(page.getByText(data.expectedAlert)).toBeVisible();
            }
        });
    }
});