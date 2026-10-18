# Snipe-IT Playwright Automation

Playwright tests for the [Snipe IT demo](https://demo.snipeitapp.com), written with the Page Object Model framework.

## What it tests

1. Login
2. Create a new asset
3. Find the asset in the list
4. Check the asset details page
5. Check the History tab & validate asset details
6. Logout

## Structure

- `pages/` has one class per page (locators and actions only)
- `tests/assignment.spec.js` has the test flow and all assertions

## Run

```bash
npm install
npx playwright install
npx playwright test --headed
```
