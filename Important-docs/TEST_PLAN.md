# Test Plan – Storefront Web Application

## 1. Introduction

This document outlines the testing strategy, scope, approach, and prioritization for validating the Storefront Web Application.

The application allows users to browse products, manage a shopping cart, apply discount codes, and complete the checkout process. Testing is performed against the functional specification, utilizing a highly scalable, data-driven test automation framework built to ensure long-term stability and rapid defect detection.

---

## 2. Objectives

The objective of testing is to verify that:

* Products are displayed correctly, matching exact UI specifications.
* Inventory rules are enforced (e.g., preventing the addition of out-of-stock items).
* Cart functionality (add, remove, quantity adjustments) works seamlessly.
* Pricing calculations (subtotals, discounts, taxes, totals) are dynamically and precisely accurate down to the decimal.
* Checkout validation correctly handles both positive flows and negative edge cases (e.g., invalid email formats).
* Order confirmation displays accurate information.
* Critical user journeys remain functional across local, staging, and production environments.

---

## 3. Scope

### In Scope

The following modules are covered:

* Product Listing & Inventory
* Add to Cart & Cart Indicator
* Cart Management (Quantity Update, Remove Item)
* Discount Code Application & Validation
* Dynamic Price, Tax, and Shipping Calculations
* Checkout & Form Validation (Email, Name, Gift Message)
* Order Confirmation

### Out of Scope

The following are outside the scope of this assignment:

* Backend database testing
* Payment gateway integration (Mocked)
* Performance testing / Load testing
* Security/Penetration testing
* Accessibility testing

---

## 4. Test Environment

| Item | Details |
| --- | --- |
| **OS** | Windows 11 |
| **Browsers** | Chromium, Microsoft Edge, Firefox, WebKit |
| **Automation Tool** | Playwright Test |
| **Language** | TypeScript |
| **Test Data** | JSON (Data-Driven Testing via `checkout.json`, `matric.json`) |
| **Reporting** | Allure Reporter, Playwright HTML |
| **CI/CD** | Jenkins |

---

## 5. Test Strategy

Testing will be executed utilizing a hybrid approach of exploratory manual testing and robust data-driven automation.

### Manual Testing

Manual testing will be leveraged to:

* Perform exploratory testing and discover initial visual defects.
* Validate complex UI rendering (e.g., negative zero formatting).
* Prepare foundational bug reports to guide automation scripts.

### Automation Testing

Playwright automation will cover:

* End-to-end critical user journeys.
* Strict data-driven iterations for checkout form validations.
* Deep mathematical assertions for cart pricing, extracting live UI prices and recalculating expected totals.
* Regression suites executed across multiple browser contexts (Headed/Headless, Serial/Parallel).

---

## 6. Test Levels

### Smoke Testing

**Purpose:** To verify that the application's critical functionality is working before detailed testing begins.
**Coverage:**

* Application launches successfully.
* Home page loads and product cards render.
* Basic "Add to Cart" functions.
* Cart and Checkout pages are accessible.

### Sanity Testing

**Purpose:** To verify that recently modified or high-risk functionality works correctly.
**Coverage:**

* Inventory boundary limits (`empty_stock.spec.ts`).
* Cart badge dynamic updates.
* Checkout form negative inputs.

### Regression Testing

**Purpose:** To ensure existing functionality continues to work flawlessly after updates.
**Coverage:**

* Full cart mathematics matrix (`maths_matrics.spec.ts`).
* Discount logic and error messaging for invalid codes.
* Dynamic removal of all cart items (`product_quantity.spec.ts`).
* Comprehensive checkout persona iterations (`product_checkout.spec.ts`).

---

## 7. Test Design Techniques

The following testing techniques are implemented:

* **Data-Driven Testing (DDT):** Utilizing external JSON files to feed multiple scenarios into single test blocks.
* **Boundary Value Analysis:** Testing stock limits (e.g., 0 inventory).
* **Equivalence Partitioning:** Categorizing valid vs. invalid discount codes and email formats.
* **Positive & Negative Testing:** Ensuring the system accepts valid inputs and explicitly rejects invalid ones.

---

## 8. Entry Criteria

Testing can begin when:

* The target application environment (Local/Staging) is accessible.
* The automation framework dependencies (`npm ci`, Playwright browsers) are installed.
* Test data files (`DATA/*.json`) are properly configured.

---

## 9. Exit Criteria

Testing is complete when:

* 100% of planned automated test suites are executed.
* All critical and high-severity defects are logged in the bug tracking system.
* The Allure test report is generated and reviewed.

---

## 10. Risks

Potential risks include:

* Unstable UI rendering causing flaky element locators.
* Decimal precision errors in JavaScript floating-point math conflicting with UI string representations.
* CI/CD pipeline timeouts during full parallel execution of the regression suite.

---

## 11. Assumptions

The following assumptions are made:

* The product catalog is static.
* Shipping cost is fixed at $5.00.
* Tax rate is fixed at 8%.
* `SAVE10` is the only valid discount code.
* Payment processing is mocked and does not require actual credit card authorization.

---

## 12. Deliverables

The following artifacts will be submitted:

* Test Plan (This document)
* Playwright Automation Framework (Source Code)
* External Test Data (`checkout.json`, `matric.json`)
* Bug Tracker Report
* Framework README (`README.mdx`)
* Generated Allure Results

---

## 13. Automation Scope & Mapping

The following core scenarios are automated using Playwright, mapped directly to their respective test files:

| Feature | File Mapping | Status |
| --- | --- | --- |
| **Inventory Validation** | `empty_stock.spec.ts` | ✅ |
| **Home Page & UI Integrity** | `homepage.spec.ts` | ✅ |
| **Cart Mathematics & Pricing** | `maths_matrics.spec.ts` | ✅ |
| **Checkout Data-Driven Flows** | `product_checkout.spec.ts` | ✅ |
| **Cart Manipulation & Removal** | `product_quantity.spec.ts` | ✅ |

---

## 14. Project Structure

```text
StoreFront Application/
│
├── Important-docs/
│   ├── AI_ASSISTED_WORKFLOW.md
│   ├── BUG_REPORT.md
│   ├── TEST_CASES.md
│   └── TEST_PLAN.md
│
├── DATA/
│   ├── checkout.json
│   └── matric.json
│
├── tests/
│   ├── empty_stock.spec.ts
│   ├── homepage.spec.ts
│   ├── maths_matrics.spec.ts
│   ├── product_checkout.spec.ts
│   └── product_quantity.spec.ts
│
├── playwright.config.ts
└── package.json
You can add a new section to your **TEST_PLAN.md / TEST_PLAN.mdx** explaining the test suite grouping and how it maps to your Playwright configuration. This fits naturally after **Section 13 – Automation Scope & Mapping**.

---

## 15. Test Suite Organization

To improve execution efficiency and support CI/CD pipelines, automated tests are organized into logical suites using **Playwright tags/groups**. This allows testers to execute only the required subset of tests instead of running the entire regression suite.

### Smoke Test Suite

**Purpose:** Validate that the application is stable enough for further testing by executing only the most business-critical user journeys.

**Coverage**

* Application launches successfully.
* Home page loads without errors.
* Product listing is displayed.
* User can add a product to the cart.
* Cart page is accessible.
* Checkout page opens successfully.

**Execution**

```powershell
$env:GROUP="smoke"
npx playwright test
```

or

```bash
GROUP=smoke npx playwright test
```

---

### Sanity Test Suite

**Purpose:** Validate newly modified or high-risk functionality after a bug fix or feature enhancement.

**Coverage**

* Inventory validation.
* Cart badge updates correctly.
* Product quantity changes.
* Checkout form validation.
* Discount code validation.

**Execution**

```powershell
$env:GROUP="sanity"
npx playwright test
```

---

### Regression Test Suite

**Purpose:** Execute the complete automated regression suite to ensure existing functionality continues to work after code changes.

**Coverage**

* Product listing.
* Inventory validation.
* Cart operations.
* Pricing calculations.
* Discount calculations.
* Checkout workflows.
* Order confirmation.
* Mathematical validations.
* Data-driven checkout scenarios.

**Execution**

```powershell
$env:GROUP="reg"
npx playwright test
```

---

## 16. Playwright Test Grouping

The Playwright framework supports executing tests by logical groups through the `GROUP` environment variable configured in `playwright.config.ts`.

Current supported groups include:

| Group    | Purpose                                    |
| -------- | ------------------------------------------ |
| `smoke`  | Critical functionality validation          |
| `sanity` | Validate recent fixes or high-risk modules |
| `reg`    | Full regression suite                      |
| `api`    | API-related tests (future expansion)       |
| `data`   | Data-driven validation tests               |
| `all`    | Execute every automated test (default)     |

If no `GROUP` environment variable is specified, Playwright automatically executes the complete automation suite.

Example executions:

```powershell
# Run Smoke Suite
$env:GROUP="smoke"
npx playwright test

# Run Sanity Suite
$env:GROUP="sanity"
npx playwright test

# Run Regression Suite
$env:GROUP="reg"
npx playwright test

# Run Complete Suite
Remove-Item Env:GROUP
npx playwright test
```

---

### Test Tagging Strategy

Each Playwright test is categorized using logical tags to support selective execution.

Example:

```typescript
test.describe('@smoke Product Listing', () => {

    test('@smoke Home page loads successfully', async ({ page }) => {
        // test
    });

});
```

```typescript
test.describe('@sanity Cart Validation', () => {

    test('@sanity Quantity updates correctly', async ({ page }) => {
        // test
    });

});
```

```typescript
test.describe('@reg Checkout Flow', () => {

    test('@reg Complete checkout journey', async ({ page }) => {
        // test
    });

});
```

This grouping strategy enables:

* Faster smoke validation before deployments.
* Focused sanity verification after defect fixes.
* Complete regression execution during release validation.
* Easy integration with Jenkins and CI/CD pipelines.
* Selective execution through Playwright environment variables without modifying test code.

---

### Small correction for your Playwright config

Your config currently defines:

```ts
type GroupKey = 'reg' | 'api' | 'smoke' | 'data' | 'Sanity' | 'all';
```

and later:

```ts
const activeGroup = ((process.env.GROUP ?? 'all') as GroupKey).toLowerCase() as GroupKey;
```

Since you're converting the value to lowercase, the type should also use lowercase:

```ts
type GroupKey = 'reg' | 'api' | 'smoke' | 'sanity' | 'data' | 'all';

const TEST_GROUPS = {
  reg: './tests/**/*.spec.ts',
  smoke: './tests/**/*.spec.ts',
  sanity: './tests/**/*.spec.ts',
  api: './tests/**/*.spec.ts',
  data: './tests/**/*.spec.ts',
};
```

This keeps the environment variable (`GROUP=sanity`) consistent with the documentation and avoids the mismatch between `Sanity` and `sanity`.


```
