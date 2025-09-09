import { expect } from '@playwright/test';

export class HomePage {
  constructor(page) {
    this.page = page;
    this.productsLink = page.locator('a[href="/products"]');
  }

  async goto() {
    await this.page.goto('https://automationexercise.com');
  }

  async navigateToProducts() {
    await this.productsLink.click();
    await expect(this.page).toHaveURL('https://automationexercise.com/products');
    await expect(this.page.locator('body')).toContainText('All Products');
  }
}
