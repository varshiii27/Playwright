import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.hollandandbarrett.com/shop/highlights/offers/');
  await page.getByRole('button', { name: 'Yes I Accept' }).click();
  await page.locator('[data-test="page-title"]').click();
  await page.locator('[data-test="filter-Category"]').getByRole('img').click();
  await page.locator('[data-test="filter-Category"]').getByRole('img').click();
  await page.locator('[data-test="page-title"]').click({
    button: 'right'
  });
  await page.locator('[data-test="page-title"]').click();
  await page.getByLabel('Breadcrumbs').getByText('Offers').click({
    button: 'right'
  });
  await page.locator('[data-test="page-title"]').click({
    button: 'right'
  });
  await page.locator('.Backdrop-module_backdrop__RD6Kd').first().click();
});