import { expect } from '@playwright/test';

export class ProductsPage {
  constructor(page) {
    this.page = page;
    this.searchInput = page.locator('#search_product');
    this.searchBtn = page.locator('#submit_search');
    this.productResultsTitle = page.locator('h2.title');
    this.firstProduct = page.locator('.features_items .product-image-wrapper').first();
    this.addToCartBtn = this.firstProduct.locator('a.add-to-cart');
    this.successModal = page.locator('#cartModal');
    this.continueShoppingBtn = page.locator('button.close-modal');
    this.viewProductBtn = this.firstProduct.locator('a:has-text("View Product")');
  }

  async searchProduct(productName) {
    await this.searchInput.fill(productName);
    await this.searchBtn.click();
    await expect(this.productResultsTitle).toHaveText('Searched Products');
    const names = await this.page.locator('.productinfo p').allTextContents();
    for (let name of names) {
      expect(name.toLowerCase()).toContain(productName.toLowerCase());
    }
  }

 

  async addFirstProductToCart() {
  await this.firstProduct.hover();

  // choose the visible one inside overlay
  const addBtn = this.firstProduct.locator('.product-overlay a.add-to-cart');

  await addBtn.waitFor({ state: 'visible' });
  await addBtn.click();

  await expect(this.successModal).toBeVisible();
  await this.continueShoppingBtn.click();
  await expect(this.successModal).toBeHidden();
}


  async viewFirstProduct() {
    await this.viewProductBtn.click();
    await expect(this.page).toHaveURL(/.*\/product_details\//);
    await expect(this.page.locator('.product-information')).toBeVisible();
  }
}
