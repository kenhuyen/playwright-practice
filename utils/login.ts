import { Page, expect } from "@playwright/test";

export async function login(page: Page, username: string, password: string) {
  await page.goto("https://stage.remorquesdunord.net/login");

  await page.getByPlaceholder("User Name").fill(username);
  await page.getByPlaceholder("Password").fill(password);

  const loginButtonLocator = page.locator(
    "xpath=//button[contains(text(),'Login')]"
  );
  await loginButtonLocator.waitFor({ state: "visible" });
  await loginButtonLocator.click();

  await page.waitForSelector("text=Successfully");
  await expect(page).toHaveURL("https://stage.remorquesdunord.net/");

  await page.waitForSelector("text=Dashboard");
  const dashboardTitle = await page.textContent("h1");
  expect(dashboardTitle).toBe("Dashboard");
}
