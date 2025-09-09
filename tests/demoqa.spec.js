import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/upload');
  await page.getByRole('button', { name: 'Upload' }).click();
  await page.getByRole('button', { name: 'Choose File' }).click();
  await page.getByRole('button', { name: 'Choose File' }).setInputFiles('example.spec.js');
  await page.getByRole('button', { name: 'Upload' }).click();
});