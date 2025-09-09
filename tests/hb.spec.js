import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.hollandandbarrett.com/');
  await page.getByRole('button', { name: 'Yes I Accept' }).click();
  await page.getByRole('link', { name: 'Home page' }).click();
  await expect(page.getByTestId('attract-hero-category-button')).toContainText('Offers');
  await page.locator('[data-test="desktop-search-input"]').click();
  await page.locator('[data-test="desktop-search-input"]').fill('vitamin');
  await expect(page.locator('[data-test="desktop-search-input"]')).toHaveValue('vitamin');
  await page.locator('//*[@id="_root_"]/div[5]/div[2]/div[2]/div/div/');

});