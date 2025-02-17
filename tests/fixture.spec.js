const { test, expect } = require('@playwright/test');

test.describe('Playwright Test Fixture Example', () => {

  let browser;
  let page;

  // Fixture setup: This runs before each test
  test.beforeEach(async () => {
    browser = await require('playwright').chromium.launch();  // Launch Chromium browser
    page = await browser.newPage();  // Create a new page
  });

  // Fixture cleanup: This runs after each test
  test.afterEach(async () => {
    await browser.close();  // Close the browser after each test
  });
  
  test.describe.configure({mode:'parallel'})

  // First test: Should open the example.com page and check the title
  test('should open the example.com page', async () => {
    await page.goto('https://example.com');  // Go to the page
    expect(await page.title()).toBe('Example Domain');  // Assert the title
  });

  // Second test: Should verify the heading on example.com
  test('should verify the heading on example.com', async () => {
    await page.goto('https://example.com');  // Go to the page
    const heading = await page.textContent('h1');  // Get the text of the heading
    expect(heading).toBe('Example Domain');  // Assert the heading text
  });
})

