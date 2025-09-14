import {test,expect} from '@playwright/test'
test('check all assertions', async({page}) => {
    //Go to automation homepage
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.waitForSelector('#name');
    await page.waitForTimeout(1000);
    //tobevisible()
    await expect(page.locator('#name')).toBeVisible();
    //tobehidden()
    await expect(page.locator('div[itemtype="http://schema.org/Blog"]')).toBeHidden();
    //tobeinviewport()
    await expect(page.locator('#phone')).toBeInViewport();
    //tocontaintext()
    await expect(page.locator('.description')).toContainText('For Selenium, Cypress & Playwright');
    //tohavetext()
    await expect(page.locator('.titlewrapper')).toHaveText('Automation Testing Practice');
    await page.locator('#email').fill("varshitha@gmail.com ");
    //tohavevalue()
    await expect(page.locator('#email')).toHaveValue("varshitha@gmail.com ");
    //tohaveurl()
    await expect(page).toHaveURL('https://testautomationpractice.blogspot.com/');
    //tohavetitle()
    await expect(page).toHaveTitle('Automation Testing Practice');
    //tohaveattribute()
    await expect(page.locator('#textarea')).toHaveAttribute('class','form-control');
    //tohaveclass()
    await expect(page.locator('#datepicker')).toHaveClass('hasDatepicker');
    //tobeEnabled()
    await expect(page.locator('#Wikipedia1_wikipedia-search-input')).toBeEnabled();

})