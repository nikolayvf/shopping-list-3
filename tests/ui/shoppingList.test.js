const { test, expect } = require("@playwright/test");

test("Check shopping list page", async ({ page }) => {
  await page.goto("https://shopping-list-3.onrender.com/Shopping-List");
  const list = await page.$("ul");
  expect(list).toBeTruthy();
});
