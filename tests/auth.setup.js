const { test: setup } = require('@playwright/test');
const authFile = '.auth/user.json'
setup('authentication', async({page})=> {
    await page.goto('https://conduit.bondaracademy.com/');
    await page.waitForTimeout(5000);
    await page.locator("//a[@href='/login']").click();
    await page.locator("//input[@placeholder='Email']").fill('nbhai1999@gmail.com');
    await page.locator("//input[@placeholder='Password']").fill('hello123@');
    await page.locator("//button[@type='submit']").click();
    await page.waitForResponse('https://conduit-api.bondaracademy.com/api/tags')
    await page.context().storageState({ path: authFile });
})