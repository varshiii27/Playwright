import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://github.com/');
  await expect(page.locator('[id="FormControl--:Rjahb:"]').getByRole('button', { name: 'Sign up for GitHub' })).toBeVisible();
  await expect(page.getByLabel('Global')).toContainText('Platform');
  await expect(page.locator('[id="FormControl--:Rjahb:"]')).toContainText('Sign up for GitHub');
  await page.locator('#hero_user_email').click();
  await page.locator('#hero_user_email').fill('varshithaperam27@gmail.com');
  await expect(page.locator('#hero_user_email')).toHaveValue('varshithaperam27@gmail.com');
  const cssSelector = await page.$("octicon octicon-mark-github");
  console.log("found logo by css selector");
  await page.locator("/html/body/div[1]/div[6]/main/react-app/div/div/div/section[1]/div[1]/div[5]/div/form/section/div/button/span/span");

 
});