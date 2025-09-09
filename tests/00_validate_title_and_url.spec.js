import {test,expect} from '@playwright/test'
test ('validate title and url',async ({page}) => {
    await page.goto('https://www.hollandandbarrett.com/');
    const actualtitle=await page.title();
    const actualurl=await page.url();
    const expectedtitle="Holland & Barrett - UK's Leading Health & Wellbeing Store";
    const expectedurl="https://www.hollandandbarrett.com/";
    expect(actualtitle).toBe(expectedtitle);
    expect(actualurl).toBe(expectedurl);
});

