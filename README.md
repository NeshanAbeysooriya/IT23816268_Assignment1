# ITPM Assignment 1
# IT23816268
# Group Y3.S1.WD.IT.03.01

## ✅ Project Summary

This repository contains a Playwright test suite for automated browser testing (UI and functional tests). Tests are located in the `tests/` folder and results are written to `playwright-report/` and `test-results/`.

---

## 🔧 Prerequisites

- **Node.js** (v16 or later) installed on your system
- Internet access to download Playwright browsers (first-time setup)

---

## ⚙️ Setup / Install

1. Install project dependencies:

   ```bash
   npm install
   ```

2. (First-time only) Install Playwright browsers:

   ```bash
   npx playwright install
   ```

---

## ▶️ How to run tests

- Run the full test suite:

  ```bash
  npx playwright test
  ```

- Run a single test file:

  ```bash
  npx playwright test tests/testcases.spec.js
  ```

- Run tests in headed mode (see browser actions):

  ```bash
  npx playwright test --headed
  ```

- Run tests using a specific browser (chromium, firefox, webkit):

  ```bash
  npx playwright test --browser=chromium
  ```

- Run a specific test by name:

  ```bash
  npx playwright test -g "Test name"
  ```

---

## 📄 Viewing the report

- After running tests, open the HTML report with:

  ```bash
  npx playwright show-report
  ```

- Or open the generated file `playwright-report/index.html` in your browser.

---

## 🧾 Test results & logs

- Playwright's HTML report: `playwright-report/`
- Raw test artifacts (traces, screenshots, videos if enabled): `test-results/`

---

## 💡 Optional: Add npm scripts

You can add the following to `package.json` under `scripts` for convenience:

```json
"scripts": {
  "test": "npx playwright test",
  "report": "npx playwright show-report"
}
```

---

## ❗ Troubleshooting

- If tests fail due to missing browsers, run `npx playwright install`.
- For more Playwright options, see the official docs: https://playwright.dev

---

**Happy testing! ✅**
