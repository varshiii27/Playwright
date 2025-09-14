const { test, expect } = require('@playwright/test');
const { HomePage } = require('../pages/HomePage'); 
const { allure } = require('allure-playwright');

test('Search for a specific book and verify results', async ({ page }) => {
  //additionally giving 60s to load for browsers=firefox,webkit
   test.setTimeout(60000);

  //Allure tag
  allure.tag('smoke');

  //Initialize page object
  const homePage = new HomePage(page);

  //Navigate to homepage
  await homePage.navigate();

  //Assert homepage loaded
  await expect(homePage.bookStoreHeader).toBeVisible();

  //Execute search
  await homePage.searchForBook('Understanding ECMAScript 6');

  //Assert search results
  await expect(homePage.firstBookTitle).toHaveText('Understanding ECMAScript 6');

  //Click on the book
  await homePage.firstBookTitle.click();

  //Assert navigation to book detail
  await expect(page).toHaveURL(/\/books\?book=/);

  //Take screenshot
  await page.screenshot({ path: 'book-detail.png', fullPage: true });

  //Optional: Attach screenshot to Allure report
  const screenshot = await page.screenshot();
  await allure.attachment('Book Detail Screenshot', screenshot, 'image/png');
});