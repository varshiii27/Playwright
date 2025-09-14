import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/redirector');
  await page.getByRole('link', { name: 'here' }).click();
  await page.getByRole('link', { name: 'here' }).click();
  await page.goto('https://the-internet.herokuapp.com/redirector');
  await page.reload();
  await expect(page).toHaveURL('https://the-internet.herokuapp.com/redirector');
});