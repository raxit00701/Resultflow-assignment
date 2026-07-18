# Automation Bug Tracker Report: StoreWeb Application

**Report Date:** 07-18-2026
**Reported By:** QA Automation
**Environment Profile:** Microsoft Edge | Playwright Automation (`edge` project) | Shopping Cart UI

---

## 📊 Defect Summary

| Bug ID | Section | Category | Severity | Priority | Title |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **BG_001** | Cart Summary | Product Defect | Medium | Medium | Discount value displays as "-$0.00" after cart is emptied |
| **BG_002** | Checkout | Product Defect | High | High | Checkout accepts invalid email address and places the order |
| **BG_003** | Cart Total | Product Defect | Medium | Medium | Grand total is displayed with incorrect decimal precision |
| **BG_004** | Cart Tax | Product Defect | Medium | High | Tax amount is calculated incorrectly (4 decimal places) |
| **BG_005** | Cart Summary | Product Defect | Medium | High | Incorrect subtotal displayed in cart summary |
| **BG_006** | Cart Summary | Product Defect | Medium | High | Discount amount is calculated incorrectly in the order summary |
| **BG_007** | Inventory | Product Defect | High | High | Out-of-stock product can be added to the cart |
| **BG_008** | Homepage | Product Defect | Medium | High | Cart badge/count is not updated after adding products |

---

## 📝 Detailed Defect Reports

### BG_001: Discount value displays as "-$0.00" after cart is emptied
**Section:** Empty Cart – Discount Summary | **Status:** New
**Severity:** Normal (Medium) | **Priority:** Medium
**File/Suite:** `product_quantity.spec.ts`

**Description:**
After applying an invalid discount code and removing all items from the cart, the Discount field displays `-$0.00` instead of `$0.00`. This indicates the UI is retaining a negative sign for a zero discount amount even though no discount is applied and the cart is empty.

**Steps to Reproduce:**
1. Launch the application.
2. Add 5 products to the cart.
3. Open the cart.
4. Enter invalid discount code `0000` and click Apply.
5. Verify the "Invalid code." message appears.
6. Remove all products from the cart.
7. Observe the Discount field in the cart summary.

* **Test Data:** Discount Code: `0000`
* **Expected Result:** The Discount field should display `Discount: $0.00` (without the negative sign).
* **Actual Result:** Cart displays "Your cart is empty." but the Discount field shows `Discount: -$0.00`. Automated validation fails due to string mismatch.
* **Evidence:** `[bug_1.png](https://drive.google.com/file/d/1tVGHnf3Z458H4w-MUo_QHjxvTAkTCBBE/view?usp=drive_link)`

---

### BG_002: Checkout accepts invalid email address and places the order
**Section:** Checkout – Email Validation | **Status:** New
**Severity:** High (Critical Functional Defect) | **Priority:** High
**File/Suite:** `product_checkout.spec.ts`

**Description:**
The checkout form does not properly validate the email address. An invalid email format is accepted, allowing the user to successfully place an order. This bypasses input validation entirely.

**Steps to Reproduce:**
1. Launch the application.
2. Add products to the cart.
3. Open the cart and apply discount code `SAVE10` (optional).
4. Proceed to Checkout.
5. Enter valid customer details but provide an invalid email address (e.g., missing `@` or missing domain).
6. Click Place Order.
7. Observe the checkout result.

* **Test Data:** Customer: `Emily Davis` | Emails: `emily@`, missing top-level domain.
* **Expected Result:** The application should validate the email format, prevent the order from being submitted, and display an appropriate validation message.
* **Actual Result:** The application accepts the invalid email address and successfully places the order without displaying a validation error.
* **Evidence:** `[bug_2.png](https://drive.google.com/file/d/1oEZlq0b3cghObI4kvUpwRnejDQ5hhEtD/view?usp=drive_link)`

---

### BG_003: Grand total is displayed with incorrect decimal precision
**Section:** Cart – Order Total Calculation | **Status:** New
**Severity:** Normal (Medium) | **Priority:** Medium

**Description:**
The cart grand total is displayed with more than two decimal places, resulting in an improperly formatted currency value. 

**Steps to Reproduce:**
1. Launch the application.
2. Add the required products to the cart.
3. Perform the actions that calculate the cart total.
4. Navigate to the cart summary.
5. Observe the Grand Total value.

* **Test Data:** Expected Total: `$691.64`
* **Expected Result:** The Grand Total should be displayed as a valid currency amount with exactly two decimal places.
* **Actual Result:** The Grand Total is displayed as `Total: $697.2916` (four decimal places).
* **Evidence:** `[bug_3.png](https://drive.google.com/file/d/1x01xPcgnxEmyoNIy9ZF_rKqSz8r1RDOK/view?usp=drive_link)`

---

### BG_004: Tax amount is calculated/displayed incorrectly
**Section:** Cart – Tax Calculation | **Status:** New
**Severity:** Normal (Medium) | **Priority:** High

**Description:**
The tax value displayed in the cart summary is incorrect. Instead of calculating 8% tax correctly and formatting it with two decimal places, it displays an incorrect amount with four decimal places.

**Steps to Reproduce:**
1. Launch the application.
2. Add the required products to the cart.
3. Proceed to the cart summary where tax is calculated.
4. Observe the Tax (8%) value.

* **Test Data:** Expected Tax: `$22.07`
* **Expected Result:** The application should correctly calculate the 8% tax and display it as `Tax (8%): $22.07`.
* **Actual Result:** The application displays `Tax (8%): $56.5136`.
* **Evidence:** `[bug_4.png](https://drive.google.com/file/d/1XwK5xWZfy9ze8dLW0-8W6lP095fxDAZQ/view?usp=drive_link)`

---

### BG_005: Incorrect subtotal displayed in cart summary
**Section:** Cart – Order Summary | **Status:** New
**Severity:** Normal (Medium) | **Priority:** High

**Description:**
The calculated subtotal does not match the expected value based on the selected products, indicating a critical issue in the pricing logic.

**Steps to Reproduce:**
1. Launch the application.
2. Add the required products to the cart.
3. Open the cart and navigate to the order summary.
4. Observe the Subtotal value.

* **Test Data:** Expected Subtotal: `$306.47`
* **Expected Result:** The application should correctly calculate and display the subtotal as `Subtotal: $306.47`.
* **Actual Result:** The application displays `Subtotal: $706.42`.
* **Evidence:** `[bug 5.png]([https://drive.google.com/file/d/1XwK5xWZfy9ze8dLW0-8W6lP095fxDAZQ/view?usp=drive_link](https://drive.google.com/file/d/1OSxkE9MbIkgFrda2gcUp8s9qRtlRy_IM/view?usp=drive_link))`

---

### BG_006: Discount amount is calculated incorrectly in the order summary
**Section:** Cart – Discount Calculation | **Status:** New
**Severity:** Normal (Medium) | **Priority:** High

**Description:**
The calculated discount does not match the expected value based on the subtotal.

**Steps to Reproduce:**
1. Launch the application.
2. Add the required products to the cart.
3. Apply a valid discount code.
4. Open the order summary.
5. Observe the Discount value.

* **Test Data:** Expected Discount: `-$30.65`
* **Expected Result:** The application should correctly calculate and display the discount as `Discount: -$30.65`.
* **Actual Result:** The application displays `Discount: -$70.64`.
* **Evidence:** `[bug 6.png](https://drive.google.com/file/d/1X9WpV3T5yqdsPj5Y0Eb4DlGCTLHJxIl8/view?usp=drive_link)`

---

### BG_007: Out-of-stock product can be added to the cart
**Section:** Cart – Inventory Validation | **Status:** New
**Severity:** High | **Priority:** High
**File/Suite:** `verify`

**Description:**
An item marked as out of stock can still be added to the shopping cart. The cart shows a quantity of 1 instead of preventing the addition.

**Steps to Reproduce:**
1. Launch the application.
2. Identify a product marked as Out of Stock.
3. Click "Add to Cart" for the out-of-stock product.
4. Open the shopping cart.
5. Verify the product quantity in the cart.

* **Expected Result:** The application should prevent out-of-stock products from being added. The quantity should remain 0, or the button should be disabled.
* **Actual Result:** The out-of-stock product is successfully added to the cart with a quantity of 1.
* **Evidence:** `[bug 7.png](https://drive.google.com/file/d/18BTnbEIVFS_sgJjxW-EibEGPFvrHg7hA/view?usp=drive_link)`

---

### BG_008: Cart badge/count is not updated after adding products
**Section:** Homepage – Cart Counter | **Status:** New
**Severity:** Normal (Medium) | **Priority:** High

**Description:**
After adding five products to the cart from the homepage, the cart counter does not update to display `Cart (5)`. The expected DOM element cannot be found by the automation script.

**Steps to Reproduce:**
1. Launch the application.
2. Verify the homepage is loaded.
3. Click "Add to Cart" for five different products.
4. Observe the cart badge/count displayed on the homepage.

* **Expected Result:** The cart badge should update immediately and display `Cart (5)`.
* **Actual Result:** The `Cart (5)` badge is not displayed/cannot be found in the DOM.
* **Evidence:** `[bug 8.png](https://drive.google.com/file/d/1skaT_FaUaxzmmRojIjKWbq6gqpryyBrC/view?usp=drive_link)`