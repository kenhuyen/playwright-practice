import { test, expect } from '@playwright/test';

test.use({ browserName: 'chromium' }); // Chỉ định trình duyệt là Chromium


// test.use() có thể được sử dụng để cấu hình các thuộc tính hoặc cài đặt bổ sung cho từng test case,
//  chẳng hạn như thiết bị, vị trí địa lý, quyền truy cập, ngôn ngữ, v.v.

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
