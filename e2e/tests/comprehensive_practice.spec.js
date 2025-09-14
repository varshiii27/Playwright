import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc/#/');

  //fill the list accordingly
  await page.getByRole('textbox', { name: 'What needs to be done?' }).fill('\'Learn Playwright basics');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).press('Enter');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).fill('\'Practice browser interactions');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).press('Enter');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).fill('\'Master navigation techniques');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).press('Enter');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).click();
  await page.getByRole('textbox', { name: 'What needs to be done?' }).fill('\'Complete all labs');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).press('Enter');

  // Verify all todos added
await expect(page.locator('.todo-list li')).toHaveCount(4);
// Phase 2: Interact with todos
// Complete first two todos
await page.locator('.todo-list li').nth(0).locator('.toggle').check();
await page.locator('.todo-list li').nth(1).locator('.toggle').check();
// Verify completion
await expect(page.locator('.todo-list li').nth(0)).toHaveClass('completed');
await expect(page.locator('.todo-list li').nth(1)).toHaveClass('completed');
// Phase 3: Navigation between filters
// View active todos
await page.click('a[href="#/active"]');
let visibleTodos = await page.locator('.todo-list li:visible').count();
await expect(visibleTodos).toBe(2);
// View completed todos
await page.click('a[href="#/completed"]');
visibleTodos = await page.locator('.todo-list li:visible').count();
await expect(visibleTodos).toBe(2);
// View all todos
await page.click('a[href="#/"]');
visibleTodos = await page.locator('.todo-list li:visible').count();
await expect(visibleTodos).toBe(4);
// Phase 4: Edit a todo
const todoToEdit = page.locator('.todo-list li').nth(2);
await todoToEdit.dblclick();
await todoToEdit.locator('.edit').fill('Master Playwright navigation techniques');
await todoToEdit.locator('.edit').press('Enter');
// Verify edit
await expect(todoToEdit.locator('label')).toHaveText('Master Playwright navigation techniques');
// Phase 5: Cleanup - clear completed
await page.click('.clear-completed');
await expect(page.locator('.todo-list li')).toHaveCount(2);
// Final verification
await expect(page.locator('.todo-count')).toContainText('2 items left');
});
