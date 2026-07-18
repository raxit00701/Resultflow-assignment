import { test, expect } from '@playwright/test';
import fs from 'fs';
const matric = JSON.parse(
    fs.readFileSync('./DATA/matric.json', 'utf8')
);
test.describe('@ maths matrics of products and product overview on the cart', () => {

    // Declare variables in the describe scope so all tests can access them
    let page;
    let subtotalStr;
    let discountStr;
    let discountedSubtotalStr;
    let taxStr;
    let totalStr;

    // Run the UI setup and mathematics ONCE before executing the individual test assertions
    test.beforeAll(async ({ browser }) => {
        page = await browser.newPage();

        // --- Action 0: Navigation ---
        console.log('Action: Navigating to homepage ("/")');
        await page.goto('/');

        // --- Action 1: Retrieve store content and capture prices dynamically ---
        const storeLocator = page.locator('#view-store');
        await expect(storeLocator).toBeVisible();

        const storeContent = await storeLocator.innerText();
        const priceRegex = /\$\d+\.\d{2}/g;
        const capturedPrices = storeContent.match(priceRegex) || [];
        console.log(`Event: Captured ${capturedPrices.length} prices dynamically.`);


        // --- Action 2: Click "Add to cart" buttons from index 0 to 4 ---
        const addToCartButtons = page.getByRole('button', { name: 'Add to cart' });
        for (let i = 0; i < 5; i++) {
            const currentButton = addToCartButtons.nth(i);
            await expect(currentButton).toBeVisible();
            await expect(currentButton).toBeEnabled();
            await currentButton.click();
        }

        // --- Action 3: Click the dynamic Cart button ---
        const dynamicCartLocator = page.getByText(/Cart \(\d+\)/);
        await expect(dynamicCartLocator).toBeVisible();
        await dynamicCartLocator.click();

        // 2. Click '+' 5 times
        const plusButton = page.getByText('+').first();
        for (let i = 0; i < 5; i++) {
            await plusButton.click();
            await page.waitForTimeout(200);
        }

        // --- Action 4: Verify product prices have 2 decimal places ---
        const cartLocator = page.locator('#view-cart');
        await expect(cartLocator).toBeVisible();
        const cartContent = await cartLocator.innerText();

        const productLines = cartContent.split('\n').filter(line =>
            !line.match(/(Subtotal|Discount|Tax|Shipping|Total)/i)
        );

        const productPrices = [];
        productLines.forEach(line => {
            const match = line.match(/\$\d+\.\d+/g);
            if (match) {
                productPrices.push(...match);
            }
        });

        productPrices.forEach(price => {
            expect(price).toMatch(/^\$\d+\.\d{2}$/);
        });

        // --- Action 5: Apply Discount Code ---
        await page.getByRole('textbox', { name: 'Discount code' }).fill('SAVE10');
        await page.getByText('Apply', { exact: true }).click();
        const discountAppliedLocator = page.getByText('Discount applied.', { exact: true });

        await expect(discountAppliedLocator).toBeVisible();

        console.log(await discountAppliedLocator.innerText());

        // --- PRE-CALCULATE ALL METRICS ---

        // Subtotal
        const subtotalNum = capturedPrices.reduce((sum, priceStr) => sum + parseFloat(priceStr.replace('$', '')), 0);
        subtotalStr = subtotalNum.toFixed(2);

        // Discount - Restored exactly to the original logic
        const discountPercentage = 10;
        const discountNum = subtotalNum * (discountPercentage / 100);
        discountStr = discountNum.toFixed(2);

        // Discounted Subtotal
        const discountedSubtotalNum = subtotalNum - discountNum;
        discountedSubtotalStr = discountedSubtotalNum.toFixed(2);

        // Tax
        const taxNum = discountedSubtotalNum * 0.08;
        taxStr = taxNum.toFixed(2);

        // Shipping
        const shippingLocator = page.getByText(/Shipping: \$\d+\.\d{2}/);
        const shippingText = await shippingLocator.innerText();
        const shippingNum = parseFloat(shippingText.replace('Shipping: $', ''));

        // Total
        const totalNum = discountedSubtotalNum + taxNum + shippingNum;
        totalStr = totalNum.toFixed(2);

        // --- DYNAMICALLY UPDATE JSON FILE ---
        const updatedMatric = [
            {
                id: 1,
                name: 'Subtotal',
                enabled: true,
                assertion: 'subtotal',
                figure: `$${subtotalStr}`
            },
            {
                id: 2,
                name: 'Discount',
                enabled: true,
                assertion: 'discount',
                figure: `-$${discountStr}`
            },
            {
                id: 3,
                name: 'Discounted Subtotal',
                enabled: true,
                assertion: 'discountedSubtotal',
                figure: `$${discountedSubtotalStr}`
            },
            {
                id: 4,
                name: 'Tax',
                enabled: true,
                assertion: 'tax',
                figure: `$${taxStr}`
            },
            {
                id: 5,
                name: 'Total',
                enabled: true,
                assertion: 'total',
                figure: `$${totalStr}`
            }
        ];

        fs.writeFileSync(
            './DATA/matric.json',
            JSON.stringify(updatedMatric, null, 2)
        );
        console.log('matric.json updated successfully.');
    });

    test.afterAll(async () => {
        await page.close();
    });

    // --- JSON DATA DRIVEN TESTS (Creates 5 distinct Playwright tests) ---

    for (const tc of matric) {

        if (!tc.enabled) continue;

        // Generates an independent test for each JSON object
        test(tc.name, async () => {

            console.log(`\n--- Running Test Case ${tc.id || ''} : ${tc.name} ---`);

            switch (tc.assertion) {

                case 'subtotal': {
                    const subtotalLocator =  page.locator('#summary >> text=/^Subtotal:/');
                    await expect(subtotalLocator).toBeVisible();
                    const subtotalUiText = await subtotalLocator.innerText();

                    console.log(`=> JSON Expected : ${tc.figure}`);
                    console.log(`=> Calculated    : Subtotal: $${subtotalStr}`);
                    console.log(`=> Actual UI     : ${subtotalUiText}`);

                    await expect(
                        page.locator('#summary >> text=/^Subtotal:/')
                    ).toHaveText(`Subtotal: $${subtotalStr}`);

                    console.log('Assertion Passed: Subtotal is correct.');
                    break;
                }

                case 'discount': {
                    const discountLocator = page.getByText('Discount: -$');
                    await expect(discountLocator).toBeVisible();
                    const discountUiText = await discountLocator.innerText();

                    console.log(`=> JSON Expected : ${tc.figure}`);
                    console.log(`=> Calculated    : Discount: -$${discountStr}`);
                    console.log(`=> Actual UI     : ${discountUiText}`);

                    await expect(discountLocator).toHaveText(`Discount: -$${discountStr}`);

                    console.log('Assertion Passed: Discount calculation is correct.');
                    break;
                }

                case 'discountedSubtotal': {
                    console.log(`=> JSON Expected : ${tc.figure}`);
                    console.log(`=> Calculated    : $${discountedSubtotalStr}`);
                    console.log(`=> Actual UI     : N/A (Background Calculation)`);
                    break;
                }

                case 'tax': {
                    const taxLocator = page.getByText('Tax (8%): $');
                    await expect(taxLocator).toBeVisible();
                    const taxUiText = await taxLocator.innerText();

                    console.log(`=> JSON Expected : ${tc.figure}`);
                    console.log(`=> Calculated    : Tax (8%): $${taxStr}`);
                    console.log(`=> Actual UI     : ${taxUiText}`);

                    await expect(taxLocator).toHaveText(`Tax (8%): $${taxStr}`);

                    console.log('Assertion Passed: Tax calculation is correct to 2 decimal places.');
                    break;
                }

                case 'total': {
                    // Use a partial text locator to grab whatever the UI says before asserting
                    const totalLocatorUI = page.locator("div.grand")
                    await expect(totalLocatorUI).toBeVisible();
                    const totalUiText = await totalLocatorUI.innerText();

                    console.log(`=> JSON Expected : ${tc.figure}`);
                    console.log(`=> Calculated    : Total: $${totalStr}`);
                    console.log(`=> Actual UI     : ${totalUiText}`);

                    // Then apply the strict match assertion
                    await expect(totalLocatorUI).toHaveText(`Total: $${totalStr}`);

                    console.log('Assertion Passed: Final Total calculation is perfectly matched.');
                    break;


                }
            }
        });
    }
});