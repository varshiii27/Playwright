import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  test.setTimeout(120000);
  // Step 1: Go to GitHub homepage
  await page.goto('https://github.com/');
  // Step 2: Click on the 'Sign up' link
  await page.getByRole('link', { name: 'Sign up' }).click();
  // Step 3: Navigate back to GitHub homepage
  await page.goto('https://github.com/');
  // Step 4: Click on the 'Sign in' link
  await page.getByRole('link', { name: 'Sign in' }).click();
  // Step 3: Navigate back to GitHub homepage
  await page.goto('https://github.com/');
  // Step 6: Click on the search button labeled 'Search or jump to…'
  await page.getByRole('button', { name: 'Search or jump to…' }).click();
  // Step 7: Fill the search box with the term 'repository'
  await page.getByRole('combobox', { name: 'Search' }).fill('repository');
  await page.getByRole('combobox', { name: 'Search' }).press('Enter');
});