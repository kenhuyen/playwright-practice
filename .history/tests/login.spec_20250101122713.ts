import { chromium, test } from "@playwright/test";

test("Login test demo", async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  
});
