import {test,expect} from '@playwright/test'
test ('validate title and url',async ({page}) => {
    await page.goto('https://practicetestautomation.com/practice-test-login/')
    const actualtitle=await page.title();
    const actualurl=await page.url();
    const expectedtitle="Practice Test Automation | Learn Selenium WebDriver";
    const expectedurl="https://practicetestautomation.com/practice-test-login/";
    expect(actualtitle).toBe(expectedtitle);
    expect(actualurl).toBe(expectedurl);
});
