import {test,expect} from '@playwright/test'
test (' Practice with a Different Domain', async ({page}) => {
    await page.goto('https://github.com/');
    const title=await page.title();
    console.log('Page Title:', title);
    const url=page.url();
    console.log('page url:',url)
    await expect(page).toHaveTitle('GitHub: Let’s build from here · GitHub');

}
);