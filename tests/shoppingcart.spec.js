import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/seleniumPractise/#/');
  await page.locator('div').filter({ hasText: /^Brocolli - 1 Kg120–\+ADD TO CART$/ }).getByRole('button').click();
  await page.locator('div').filter({ hasText: /^Cauliflower - 1 Kg60–\+ADD TO CART$/ }).getByRole('button').click();
  await page.getByRole('link', { name: 'Cart' }).click();
  await page.getByRole('button', { name: 'PROCEED TO CHECKOUT' }).click();
  await page.getByRole('textbox', { name: 'Enter promo code' }).click();
  await page.getByRole('textbox', { name: 'Enter promo code' }).fill('rahulshettyacademy');
  await page.getByRole('button', { name: 'Apply' }).click();
  await page.getByText('Code applied ..!').click();
  await page.getByRole('button', { name: 'Place Order' }).click();
  await page.getByRole('combobox').selectOption('Vietnam');
  await page.getByRole('checkbox').check();
  await page.getByRole('button', { name: 'Proceed' }).click();
  await page.getByRole('link', { name: 'Home' }).click();
});