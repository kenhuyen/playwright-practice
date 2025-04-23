import { chromium, test } from "@playwright/test";

test("Login test demo", async () => {
  const browser = await playwright.chromium.launch();
  const context = await browser.newContext();
});
