import { test, expect } from '@playwright/test';

// Define a test case
test('test', async ({ page }) => {
  // Navigate to the TodoMVC demo app
  await page.goto('https://demo.playwright.dev/todomvc/#/');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).fill('buy groceries');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).press('Enter');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).fill('walk the dog');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).press('Enter');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).fill('finish homework');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).press('Enter');
  const visibleTodos = await page.locator('.todo-list li:visible').count();
  await expect(visibleTodos).toBe(3);
  await page.getByRole('link', { name: 'Completed' }).click();
  await expect(page.locator('.todo-list li')).toHaveCount(0);
});
