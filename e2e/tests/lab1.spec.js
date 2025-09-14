import {test,expect} from '@playwright/test'
test ('validate title', async ({page}) => {
    await page.goto('https://playwright.dev');
    const title=await page.title();
    console.log('Page Title:', title);
    await expect(page).toHaveTitle('Fast and reliable end-to-end testing for modern web apps | Playwright');

}
);