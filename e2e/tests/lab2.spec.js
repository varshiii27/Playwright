import {test,expect} from '@playwright/test'
test ('verify website title',async ({page}) => {
    await page.goto('https://www.wikipedia.org/');
    const title= await page.title();
    const url=await page.url();
    console.log('url:',url);
    await expect(page).toHaveTitle("Wikipedia");


}
)