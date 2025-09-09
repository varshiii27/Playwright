import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  test.setTimeout(120000);
  // Step 1: Navigate to demoblaze homepage
  await page.goto('https://www.demoblaze.com/');
  // Step 2: Click on the 'Log in' link
  await page.getByRole('link', { name: 'Log in' }).click();
  // Step 3: Close 'Log in' page
  await page.getByLabel('Log in').getByText('Close').click();
  await page.getByRole('link', { name: 'Phones' }).click();
  await page.locator('.card > a').first().click();
  // Step 4: Go back to home page
  await page.goBack();
  // Step 5: Reload the page
  await page.reload();
});
