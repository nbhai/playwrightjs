const { test, expect } = require('@playwright/test');
const fs = require('fs');
test.beforeEach(async ({ page }) => {
  await page.route('https://conduit-api.bondaracademy.com/api/tags', async route => {
    const tags = JSON.parse(fs.readFileSync('data/tags.json', 'utf8'));
    await route.fulfill({
      body: JSON.stringify(tags)
    })
  })

  await page.goto('https://conduit.bondaracademy.com/');
  // await page.waitForTimeout(5000);
  // await page.locator("//a[@href='/login']").click();
  // await page.locator("//input[@placeholder='Email']").fill('nbhai1999@gmail.com');
  // await page.locator("//input[@placeholder='Password']").fill('hello123@');
  // await page.locator("//button[@type='submit']").click();

});
test('has title', async ({ page }) => {

  await page.route('https://conduit-api.bondaracademy.com/api/articles?limit=10&offset=0', async route => {
    const response = await route.fetch()
    const responseBody = await response.json()
    responseBody.articles[0].title = "this is a test article"
    responseBody.articles[0].description = "this is a test description"

    await route.fulfill({
      body: JSON.stringify(responseBody)
    })
  })

  await page.getByText('Global Feed').click();
  await expect(page.locator("//a[@class='navbar-brand']")).toHaveText('conduit');
  await expect(page.locator("(//div[@class='article-preview'])[1]")).toContainText('this is a test article');
})

test('create article', async ({ page, request }) => {
  const response = await request.post('https://conduit-api.bondaracademy.com/api/users/login', {
    data: {
      "user": { "email": "nbhai1999@gmail.com", "password": "hello123@" }
    }
  })
  const responseBody = await response.json();
  const accessToken = responseBody.user.token;

  const articleRes = await request.post('https://conduit-api.bondaracademy.com/api/articles/', {
    data: { "article": { "title": "test 1", "description": "hello", "body": "hello", "tagList": [] } }, headers: {
      Authorization: `Token ${accessToken}`
    }
  })
  expect(articleRes.status()).toBe(201)
  const articleResponse = await articleRes.json();
  const idArticle = articleResponse.article.slug;

  await request.delete(`https://conduit-api.bondaracademy.com/api/articles/${idArticle}`, {
    headers: {
      Authorization: `Token ${accessToken}`
    }
  })
})