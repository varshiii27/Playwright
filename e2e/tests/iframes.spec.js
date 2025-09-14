import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://ui.vision/demo/webtest/frames/');
  await expect(page.locator('frame').first().contentFrame().locator('form[name="name1"]')).toContainText('Frame1');
  await expect(page.locator('frame').nth(2).contentFrame().getByRole('textbox')).toBeEmpty();
  await expect(page.locator('frame').nth(2).contentFrame().getByRole('textbox')).toBeEmpty();
  await expect(page.locator('frame').nth(1).contentFrame().getByRole('textbox')).toBeEmpty();
  await page.locator('frame').nth(1).contentFrame().getByRole('textbox').click();
  await page.locator('frame').nth(1).contentFrame().getByRole('textbox').fill('Hello world');
  await expect(page.locator('frame').nth(3).contentFrame().getByRole('textbox')).toBeVisible();
  await expect(page.locator('frame').nth(1).contentFrame().getByText('Frame2')).toBeVisible();
});