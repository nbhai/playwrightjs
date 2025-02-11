import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await page.getByRole('combobox', { name: 'Tìm kiếm' }).click();
  await page.getByRole('combobox', { name: 'Tìm kiếm' }).fill('youtube');
  await page.goto('https://rahulshettyacademy.com/');
  await expect(page.locator('.pull-left').first()).toBeVisible();
});