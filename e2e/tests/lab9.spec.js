import {test,expect} from '@playwright/test'
test ('Navigate to a News Website', async ({page}) => {
    await page.goto('https://www.bbc.com/news');
    await expect(page).toHaveURL('https://www.bbc.com/news');
    const title=await page.title();
    console.log('Page Title:', title);

}
);