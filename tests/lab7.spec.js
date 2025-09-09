import {test,expect} from '@playwright/test'
test ('Navigate and Check Page Content', async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/');
    await expect(page).toHaveTitle('The Internet')
    const heading = page.locator('h1');
    await expect(heading).toContainText('Welcome to the-internet')
}
);