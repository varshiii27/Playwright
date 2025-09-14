import { test, expect } from '@playwright/test';
// Define a test case to search for an women fashion on Amazon and add it to the list
test('test', async ({ page }) => {
  await test.setTimeout(120000);
  // Step 1: Navigate to Amazon homepage
  await page.goto('https://www.amazon.com/');
  // Step 2: Click on the search textbox
  await page.getByRole('link', { name: 'Women\'s fashion' }).click();
  // Step 3: Filter the cost
  await page.getByRole('link', { name: 'Under $75' }).click();
  await page.getByRole('listitem').filter({ hasText: 'Casio Vintage Collection A168' }).locator('a').first().click();
  // Step 4: Add item to cart
  await page.getByRole('link', { name: 'Add to List' }).click();
  // Step 5 : Enter mobile number
  await page.getByRole('textbox', { name: 'Enter your mobile number or' }).fill('9000660862');
  await page.locator('#claim-input-dropdown').getByText('US +').click();
  await page.getByText('India +').click();
  await page.getByRole('button', { name: 'Continue' }).click();
});