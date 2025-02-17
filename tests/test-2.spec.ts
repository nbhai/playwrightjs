// import { test, expect } from '@playwright/test';

// test('test', async ({ page }) => {
//   await page.goto('https://www.amazon.com/');
//   await expect(page.getByRole('link', { name: 'Amazon', exact: true })).toBeVisible();
//   await page.getByRole('searchbox', { name: 'Search Amazon' }).click();
//   await page.getByRole('searchbox', { name: 'Search Amazon' }).fill('iphone 15');
//   await page.getByRole('searchbox', { name: 'Search Amazon' }).press('Enter');
//   await expect(page.getByRole('link', { name: 'Apple iPhone 15, 128GB, Blue' })).toBeVisible();
//   await page.getByRole('link', { name: 'Apple iPhone 15, 128GB, Blue' }).click();
//   await expect(page.locator('#ppd')).toBeVisible();
//   await page.getByRole('button', { name: '256GB' }).click();
//   await expect(page.locator('#availability').getByText('This item cannot be shipped')).toBeVisible();
// });