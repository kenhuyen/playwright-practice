import { chromium, type Page } from "@playwright/test";

export class TurnOffZaloStatus {
  async turnOffZaloStatus() {
    const browser = await chromium.launch({ headless: false }); // Set to true for production
    const context = await browser.newContext();
    const page = await context.newPage();

    try {
      // Go to Zalo Web
      await page.goto("https://chat.zalo.me/");

      // Wait for login - you may need to scan QR code manually
      await page.waitForSelector(".avatar-name", { timeout: 60000 }); // Adjust timeout as needed

      // Click on settings menu
      await page.click(".setting-btn");

      // Wait for settings menu to appear and click on Status settings
      await page.waitForSelector(".setting-menu");
      await page.click("text=Status");

      // Find and click the toggle for active status
      await page.waitForSelector(".status-setting-toggle");

      // Check if status is already off
      const isStatusOn = await page.evaluate(() => {
        const toggle = document.querySelector(".status-setting-toggle");
        return toggle?.classList.contains("active");
      });

      if (isStatusOn) {
        await page.click(".status-setting-toggle");
        console.log("Successfully turned off active status");
      } else {
        console.log("Active status is already off");
      }

      // Optional: Wait a moment to see the result
      await page.waitForTimeout(2000);
    } catch (error) {
      console.error("An error occurred:", error);
    } finally {
      await browser.close();
    }
  }
}
