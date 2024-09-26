import { test, expect } from "@playwright/test";
import { login } from "../utils/login";

// test("Test login with correct fileds", async ({ page }) => {
//   // Trình duyệt và page đã tự động được mở bởi framework
//   await page.goto("https://stage.remorquesdunord.net/login");

//   await page.getByPlaceholder("User Name").fill("Huyen1");
//   await page.getByPlaceholder("Password").fill("Huyen0411");

//   const loginButtonLocator = page.locator(
//     "xpath=//button[contains(text(),'Login')]"
//   );
//   await loginButtonLocator.waitFor({ state: "visible" });
//   await loginButtonLocator.click();

//   await expect(page).toHaveURL("https://stage.remorquesdunord.net/");
//   await page.waitForSelector("text=Dashboard");
//   const dashboardTitle = await page.textContent("h1");
//   expect(dashboardTitle).toBe("Dashboard");
// });

test("Test login with correct fields", async ({ page }) => {
  await login(page, "Huyen1", "Huyen0411"); // Gọi hàm đăng nhập
  
  const inventorySpan = page.locator("xpath=//span[text()='Inventory']");
  const purchaseOrder = page.locator("xpath=//a[text()='Purchase Order']");
  
  await inventorySpan.waitFor({ state: "visible" });
  await inventorySpan.click();

  await purchaseOrder.waitFor({ state: "visible" });
  await purchaseOrder.click();
  const textPO= await purchaseOrder.textContent();
  console.log(textPO);
   

});
