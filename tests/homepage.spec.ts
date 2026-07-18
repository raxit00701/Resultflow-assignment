import { test, expect } from '@playwright/test';

test('@homepage content and action', async ({ page }) => {

    // --- Action 1: Navigation ---
    console.log('Action: Navigating to homepage ("/")');
    await page.goto('/');
    console.log('Event: Navigation complete.');

    // Assertion: Verify the page has loaded successfully by checking the URL
    await expect(page).toHaveURL(/.*\//);
    console.log('Assertion Passed: URL is correct.');


    // --- Action 2: Retrieve #view-store content ---
    const storeLocator = page.locator('#view-store');

    console.log('Action: Asserting #view-store is visible before reading.');
    await expect(storeLocator).toBeVisible();
    console.log('Assertion Passed: #view-store is visible.');

    console.log('Action: Retrieving text content from #view-store');
    const storeContent = await storeLocator.innerText();
    console.log(`Event: Store Content retrieved: \n${storeContent}`);

    // --- Strict Assertions based on product
    console.log('Action: Asserting exact product information from the image is present.');

    const expectedProductDetails = [
        // Product 1
        'Wireless Headphones',
        '$79.99',
        'In stock: 5',
        // Product 2
        'USB-C Cable',
        '$12.50',
        'In stock: 0',
        // Product 3
        'Laptop Stand',
        '$34.00',
        'In stock: 3',
        // Product 4
        'Mechanical Keyboard',
        '$119.99',
        'In stock: 10',
        // Product 5
        '1080p Webcam',
        '$59.99',
        'In stock: 2'
    ];

    // Assert that every specific detail from the card exists in the store content
    for (const detail of expectedProductDetails) {
        expect(storeContent).toContain(detail);
    }
    console.log('Assertion Passed: All product names, prices, and stock levels match the product card exactly.');


    // --- Action 3: Click "Add to cart" buttons from index 0 to 4 ---
    const addToCartButtons = page.getByRole('button', { name: 'Add to cart' });

    // Loop through indices 0 to 4 (which covers .first() up to .nth(4))
    for (let i = 0; i < 5; i++) {
        const currentButton = addToCartButtons.nth(i);

        console.log(`Action: Asserting "Add to cart" button at index ${i} is visible and enabled.`);
        await expect(currentButton).toBeVisible();
        await expect(currentButton).toBeEnabled();
        console.log(`Assertion Passed: "Add to cart" button at index ${i} is ready.`);

        console.log(`Action: Clicking the "Add to cart" button at index ${i}`);
        await currentButton.click();
        console.log(`Event: Click action successfully dispatched for item ${i}.`);

        // Optional: Depending on how the site is built, you might want a brief wait or
        // network assertion here if the UI needs a split second to attach the item to the cart
        // before clicking the next one.
    }


    // --- Action 4: Verify Cart Update ---
    const updatedCartLocator = page.getByText('Cart (5)', { exact: true });

    console.log('Action: Waiting for cart text to update to "Cart (5)"');
    // Note: This web-first assertion automatically waits and retries until true
    await expect(updatedCartLocator).toBeVisible();
    console.log('Assertion Passed: Cart successfully updated to "Cart (5)".');

});