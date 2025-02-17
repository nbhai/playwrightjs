const { Given, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const playwright = require('playwright');
const HomePage = require('../pages/homepage');

let browser;
let page;
let homepage

Given('I open the Playwright homepage', async () => {
  browser = await playwright.chromium.launch({ headless: false });
  const context = await browser.newContext();
  page = await context.newPage();
  homepage = new HomePage(page);
  await homepage.goToHomePage();
});

Then('I should see the title {string}', async (title) => {
  const pageTitle = await page.title();
  await expect(pageTitle).toContain(title);
  await browser.close();
});
