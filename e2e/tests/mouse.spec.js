import { test, expect } from '@playwright/test';

test('drag and drop using locator', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/drag_and_drop');

  const columnA = page.locator('#column-a');
  const columnB = page.locator('#column-b');

  await columnA.dragTo(columnB);
  await page.mouse.move(100, 100);
  await page.mouse.down();
  await page.mouse.move(200, 100)

});