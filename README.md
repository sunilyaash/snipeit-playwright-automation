# Snipe-IT Playwright Automation

Playwright tests for the Snipe IT demo application, written with the Page Object Model framework.

## What it tests

1. Login to application
2. Create a new asset with ready to deploy status
3. Find the asset created in the list
4. Check the asset details page & validate relevant details
5. Check the History tab & validate asset details
6. Logout from application

## Structure

- `pages/` has one class per page (locators and actions only)
- `tests/assignment.spec.js` has the test flow and all assertions

## Run

```bash
git clone https://github.com/sunilyaash/snipeit-playwright-automation.git
cd snipeit-playwright-automation
npm install
npx playwright install
npx playwright test --headed
```
