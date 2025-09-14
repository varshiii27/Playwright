import {test,expect} from '@playwright/test'
test ('Navigate to sub page', async ({page}) => {
    await page.goto('https://playwright.dev/python/docs/intro');
    await expect(page).toHaveTitle('Playwright for Python');
    await expect(page).toHaveURL('/python/docs/intro')

}
);