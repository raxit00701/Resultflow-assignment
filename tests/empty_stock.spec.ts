import { test, expect } from '@playwright/test';

test('@verify empty stock is added to the cart', async ({ page }) => {
    await page.goto('/');

    // 0. Retrieve stock details
    const storeLocator = page.locator('#view-store');
    const storeContent = await storeLocator.innerText();

    // FIX: Look for "In stock: 0" instead of "Out of stock"
    const isOutOfStock = storeContent.includes("In stock: 0");
    console.log(`Event: Product Status is Out of Stock: ${isOutOfStock}`);

    // 1. Click "Add to cart" for the USB-C Cable (which is the 2nd item, index 1)
    const addToCartButtons = page.getByRole('button', { name: 'Add to cart' });
    await addToCartButtons.nth(1).click();

    // 2. Open Cart
    await page.getByText(/Cart \(\d+\)/).click();

    // 3. Retrieve Cart
    const cartLocator = page.locator('#view-cart');
    const cartText = await cartLocator.innerText();
    console.log(`DEBUG: Cart Text Captured:\n${cartText}`);

    // 4. IMPROVED ASSERTION
    if (isOutOfStock) {
        console.log('Assertion: Verifying cart behavior for out of stock item.');

        const isItemPresent = cartText.includes("USB-C Cable");

        if (isItemPresent) {

            const quantityLineMatch = cartText.match(/USB-C Cable\s*-\s*(\d+)/);

            const actualQty = quantityLineMatch ? quantityLineMatch[1] : null;

            console.log(`DEBUG: Extracted Quantity for USB-C Cable: ${actualQty}`);

            // This will now FAIL because actualQty is "1" and expected is "0"
            expect(actualQty, `BUG: Out of stock item was added with quantity ${actualQty}`).toBe("0");
        } else {
            console.log('Success: Out of stock item was not added to the cart.');
        }
    }

});