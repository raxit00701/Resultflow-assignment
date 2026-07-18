
# E-Commerce Playwright Automation Framework

A robust, scalable test automation framework built to validate core e-commerce functionalities. Developed with **Playwright** and **TypeScript**, this framework emphasizes data-driven testing (DDT), dynamic configuration, and comprehensive cart mathematics validation.

## 🛠️ Tech Stack

*   **Automation Tool:** Playwright
*   **Language:** TypeScript
*   **Test Runner:** Playwright Test
*   **Reporting:** Allure Reporter, Playwright HTML Reporter
*   **Data Management:** Native JSON parsing (`fs` module)

---

## 🚀 Key Features

*   **Data-Driven Testing (DDT):** Ingests test data from JSON files (`checkout.json`, `matric.json`) to iterate through positive/negative checkout scenarios and dynamic mathematical assertions.
*   **Dynamic Cart Mathematics:** Extracts live UI prices, recalculates expected subtotals, discounts, taxes, and totals, and strictly asserts them against the front-end rendering.
*   **Environment & Execution Control:** Fully configurable via environment variables to toggle headless mode, serial/parallel execution, incognito contexts, and target environments (Local, Staging, Prod).
*   **Comprehensive Reporting:** Integrated with `allure-playwright` to categorize test defects, product defects, and skipped tests with trace and video retention on failure.

---

## 💻 Installation & Setup

### Prerequisites
*   [Node.js](https://nodejs.org/) (v16 or higher recommended)
*   npm (comes with Node.js) or yarn
*   Java (Required for Allure Reporter generation)

### Setup Instructions

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd <repository-directory>
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Install Playwright browsers:**
    ```bash
    npx playwright install --with-deps
    ```

4.  **Install Allure command-line tool (Global):**
    ```bash
    npm install -g allure-commandline
    ```

---

## 📁 Project Structure

```text
├── tests/
│   ├── empty_stock.spec.ts         # Validates out-of-stock boundary limits
│   ├── homepage.spec.ts            # UI integrity and product card assertions
│   ├── maths_matrics.spec.ts       # Cart calculation formulas and UI matching
│   ├── product_checkout.spec.ts    # Positive/negative checkout workflows
│   └── product_quantity.spec.ts    # Cart manipulation (add, remove, alter quantities)
├── DATA/
│   ├── checkout.json               # User personas and form validation scenarios
│   └── matric.json                 # Dynamically generated math assertions
├── playwright.config.ts            # Core framework configuration & browser matrix
├── package.json                    # Project dependencies and scripts
└── README.mdx                      # Project documentation

```

---

## 🧪 Test Suites

### 1. Stock & Inventory Validation

**File:** `empty_stock.spec.ts`

* Verifies that products marked as "In stock: 0" cannot be successfully added to the cart.
* *Current Status:* Catching a bug where out-of-stock items are added with a quantity of 1.

### 2. Homepage & UI Integrity

**File:** `homepage.spec.ts`

* Validates homepage rendering, product card data (names, exact prices, stock levels), and the functionality of "Add to cart" buttons.
* Ensures the cart badge updates dynamically based on user actions.

### 3. Cart Mathematics & Matrix

**File:** `maths_matrics.spec.ts`

* Runs a pre-calculation script to capture base prices and compute expected Subtotal, Discount (e.g., 10%), Tax (8%), and Final Total.
* Dynamically updates `matric.json` and runs separate test cases for each mathematical assertion.
* *Current Status:* Flagging critical calculation UI mismatches on the front end.

### 4. Checkout Workflows

**File:** `product_checkout.spec.ts`

* Iterates through user personas defined in `checkout.json`.
* Tests both positive (successful order) and negative (invalid email formats, missing domains) form submissions.
* *Current Status:* Catching form validation bugs (e.g., accepting invalid emails missing top-level domains).

### 5. Cart Manipulation

**File:** `product_quantity.spec.ts`

* Validates adding multiple items, applying invalid discount codes, incrementing/decrementing quantities, and dynamic product removal until the cart is empty.

---

## ⚙️ Configuration & Execution

The framework is highly dynamic and relies on environment variables for execution.

### Environment Variables

| Variable | Options | Default |
| --- | --- | --- |
| `TEST_MODE` | `serial`, `parallel` | `parallel` |
| `HEADLESS` | `true`, `false` | `true` |
| `INCOGNITO` | `true`, `false` | `false` |
| `ENV` | `local`, `staging`, `prod` | `local` |
| `GROUP` | `reg`, `api`, `smoke`, `all` | `all` |

### Running Tests (PowerShell Example)

To run the suite in headed mode, serialized execution, targeting the local environment on the Microsoft Edge browser:

```powershell
$env:HEADLESS="false"; `
$env:TEST_MODE="serial"; `
$env:ENV="local"; `
$env:INCOGNITO="false"; `
npx playwright test --project=edge

```

### Generating Allure Reports

After execution, generate and open the detailed Allure report:

```powershell
# Copy history for trend analysis
if (Test-Path ".\allure-report\history") { Copy-Item ".\allure-report\history" ".\allure-results\" -Recurse -Force }

# Generate and open
allure generate .\allure-results --clean -o .\allure-report
allure open .\allure-report

```

---

## 🔄 Continuous Integration (Jenkins)

This framework is designed for seamless integration with Jenkins pipelines to support daily smoke or regression runs.

**Sample `Jenkinsfile` snippet:**

```groovy
pipeline {
    agent any
    environment {
        HEADLESS = 'true'
        TEST_MODE = 'parallel'
        ENV = 'staging'
    }
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm ci'
                sh 'npx playwright install --with-deps'
            }
        }
        stage('Run E-Commerce Automation') {
            steps {
                sh 'npx playwright test --project=chrome'
            }
        }
    }
    post {
        always {
            allure includeProperties: false, jdk: '', results: [[path: 'allure-results']]
            archiveArtifacts artifacts: 'playwright-report/**/*', allowEmptyArchive: true
        }
    }
}

```

---

## 🐛 Current Defect Tracking

The suite is currently acting as an active bug-catcher. Recent runs have identified **8 product and test defects**, including:

1. **Inventory Bypass:** Out-of-stock items can be added to the cart.
2. **Cart Calculation Errors:** Discrepancies between expected total calculations and the UI rendered totals.
3. **Validation Failures:** The checkout form is accepting invalid email formats (e.g., `emilydavis@.....com`).
4. **UI Rendering:** Negative zero formatting issues on discount application (`-$0.00`).

```

Would you like me to include guidelines on how team members should structure new test data in the JSON files, or details on how to use AI-generated snippets to scale this framework further?

```
