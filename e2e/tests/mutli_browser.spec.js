import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://httpbin.org/html');
  await page.getByRole('heading', { name: 'Herman Melville - Moby-Dick' }).click();
  await page.getByText('Availing himself of the mild').click();

  
});