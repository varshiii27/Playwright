import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/key_presses');
  await page.locator('#target').click();
  await page.locator('#target').fill('A');
  await page.locator('#target').press('ArrowDown');
  await page.locator('#target').press('ArrowDown');
  await page.locator('#target').click();
  await page.locator('#target').fill('Hello World!');
  await page.locator('#target').press('PageDown');
});