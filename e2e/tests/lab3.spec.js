import {test,expect} from '@playwright/test'
test ('navigate and verify url', async ({page}) => {
    await page.goto('https://www.google.com');
    await expect(page).toHaveURL('https://www.google.com/');
    console.log('Sucess!! Url is correct');
}
);