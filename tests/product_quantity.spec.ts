import { test, expect } from '@playwright/test';

test('@product quantity and removal', async ({ page }) => {

    // --- Action 1: Navigation ---
    console.log('Action: Navigating to homepage ("/")');
    await page.goto('/');

    // --- Action 2: Add Products to Cart ---
    const addToCartButtons = page.getByRole('button', { name: 'Add to cart' });
    console.log('Action: Adding 5 products to the cart.');

    for (let i = 0; i < 5; i++) {
        const currentButton = addToCartButtons.nth(i);
        await expect(currentButton).toBeVisible();
        await expect(currentButton).toBeEnabled();
        await currentButton.click();
    }

    // --- Action 3: Click the dynamic Cart button ---
    console.log('Action: Opening the cart.');
    const dynamicCartLocator = page.getByText(/Cart \(\d+\)/);
    await expect(dynamicCartLocator).toBeVisible();
    await dynamicCartLocator.click();

    // --- Action 3.5: Apply Invalid Discount Code ---
    console.log('Action: Applying invalid discount code.');
    await page.getByRole('textbox', { name: 'Discount code' }).fill('0000');
    await page.getByText('Apply', { exact: true }).click();

    // Corrected syntax from Python style to Playwright/TypeScript
    const discountAppliedLocator = page.getByText("Invalid code.", { exact: true });
    await expect(discountAppliedLocator).toBeVisible();
    console.log(`Event: ${await discountAppliedLocator.innerText()}`);

    // --- Action 4: Retrieve specific quantity and product name ---
    console.log('Action: Retrieving cart contents to verify specific quantities.');
    const cartLocator = page.locator('#view-cart');
    await expect(cartLocator).toBeVisible();

    const cartContent = await cartLocator.innerText();

    const lines = cartContent.split('\n').map(l => l.trim()).filter(l => l.length > 0);

    console.log('\n--- Specific Products & Quantities in Cart ---');

    for (let i = 0; i < lines.length; i++) {
        if (lines[i] === 'Remove') {
            const productName = lines[i - 5];
            const quantity = lines[i - 3];

            expect(quantity).toMatch(/^[1-9]\d*$/);
            console.log(`=> Product: ${productName} | Available Quantity: ${quantity}`);
        }
    }
    console.log('----------------------------------------------\n');

// Click the '+' button 5 times
    const plusButton = page.getByText('+').first();
    for (let i = 0; i < 5; i++) {
        await plusButton.click();

        await page.waitForTimeout(200);
    }

// Click the '-' button at index 1 exactly once
    const minusButton = page.getByText('-').nth(1);
    await minusButton.click();

    // --- Action 5: Dynamic Removal ---
    const removeButtons = page.getByRole('button', { name: 'Remove' });
    const totalProducts = await removeButtons.count();
    console.log(`Action: Found exactly ${totalProducts} products to remove.`);

    for (let i = totalProducts - 1; i >= 0; i--) {
        const currentRemoveBtn = removeButtons.nth(i);
        await expect(currentRemoveBtn).toBeVisible();
        await currentRemoveBtn.click();
        await page.waitForTimeout(500);
    }

    // --- Final Assertions ---
    console.log('Action: Verifying final cart state.');

    const emptyCartMsg = page.getByText("Your cart is empty.", { exact: true });
    await expect(emptyCartMsg).toBeVisible();

    const discountLocator = page.getByText("Discount: -$0.00", { exact: true });
    await expect(discountLocator).toBeVisible();
    await expect(discountLocator).toHaveText("Discount: $0.00");

    await expect(removeButtons).toHaveCount(0);
    console.log('Assertion Passed: All products successfully removed and cart state is verified.');
});