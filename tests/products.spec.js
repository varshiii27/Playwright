import { test } from '@playwright/test';
import { HomePage } from './HomePage.js';
import { ProductsPage } from './ProductsPage.js';
import { ProductDetailsPage } from './ProductDetailsPage.js';

test('POM workflow for Automation Exercise site', async ({ page }) => {
  const home = new HomePage(page);
  const products = new ProductsPage(page);
  const details = new ProductDetailsPage(page);

  await home.goto();
  await home.navigateToProducts();

  await products.searchProduct("Blue Top");
  await products.addFirstProductToCart();
  await products.viewFirstProduct();
  await details.verifyProductDetails();

  await page.click('a[href="/"]');  // return home
  await page.waitForURL('https://automationexercise.com/');
});
