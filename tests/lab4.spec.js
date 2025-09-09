import {test,expect} from '@playwright/test'
test ('Multiple Navigations in One Tes', async ({page}) => {
    await page.goto('https://playwright.dev');
    const title1=await page.title();
    console.log('Page Title1:', title1);
    await page.goto('https://www.wikipedia.org/');
    const title2=await page.title();
    console.log('Page Title2:', title2);
    await page.goto('https://www.google.com');
    const title3=await page.title();
    console.log('Page Title3:', title3);
}
);