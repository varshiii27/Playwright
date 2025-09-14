import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demoqa.com/alerts');
  await page.getByRole('link').click();
  await page.goto('https://demoqa.com/alerts');
  await expect(page.locator('#alertButton')).toContainText('Click me');
  await expect(page.locator('#alertButton')).toBeVisible();
});