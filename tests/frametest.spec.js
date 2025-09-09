import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/key_presses');
  await page.locator('#target').click();
  await page.locator('#target').press('Enter');
  await page.locator('#target').click();
  await page.locator('#target').fill('V');
  await page.locator('#target').press('Enter');
});