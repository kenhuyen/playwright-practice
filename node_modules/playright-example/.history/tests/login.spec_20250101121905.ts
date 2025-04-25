import { test } from "@playwright/test";
import { LoginPage } from "../pages/shoppee-test";

test("Login test demo", async ({ page }) => {
  const Login = new LoginPage(page);

  await Login.gotoLoginPage();
  await Login.login("Admin", "admin123");
});