import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc/#/');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).click();
  await page.getByRole('textbox', { name: 'What needs to be done?' }).fill('Varshitha');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).press('Enter');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).fill('Completed');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).press('Enter');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).fill('Task');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).press('Enter');
  await page.getByText('Varshitha').click();
  await page.getByRole('listitem').filter({ hasText: 'Task' }).getByLabel('Toggle Todo').check();
  await page.getByRole('button', { name: 'Clear completed' }).click();
  await page.locator('div').filter({ hasText: /^Completed$/ }).getByLabel('Toggle Todo').check();
  await page.getByRole('button', { name: 'Clear completed' }).click();
  await page.getByRole('checkbox', { name: 'Toggle Todo' }).check();
  await page.getByRole('button', { name: 'Clear completed' }).click();
});