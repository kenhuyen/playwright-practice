import { test, expect, Page } from '@playwright/test';

class ShopeeLoginPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigate() {
    await this.page.goto('https://shopee.vn/buyer/login');
  }

  async login(username: string, password: string) {
    await this.page.fill('input[name="loginKey"]', username);
    await this.page.fill('input[name="password"]', password);
    await this.page.click('button[type="submit"]');
  }

  async getErrorMessage() {
    const errorElement = this.page.locator('.alert-error');
    if (await errorElement.isVisible()) {
      return errorElement.textContent();
    }
    return null;
  }
}

test.describe('Shopee Login Tests', () => {
  let loginPage: ShopeeLoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new ShopeeLoginPage(page);
    await loginPage.navigate();
  });

  test('Successful login', async ({ page }) => {
    await loginPage.login('your_username', 'your_password');

    // Chờ đợi chuyển hướng sau khi đăng nhập thành công
    await page.waitForNavigation();

    // Kiểm tra xem đã đăng nhập thành công chưa
    // Lưu ý: Selector này có thể cần điều chỉnh tùy thuộc vào cấu trúc thực tế của Shopee
    await expect(page.locator('.navbar__username')).toBeVisible();
  });

  test('Failed login with incorrect credentials', async () => {
    await loginPage.login('wrong_username', 'wrong_password');

    // Kiểm tra thông báo lỗi
    const errorMessage = await loginPage.getErrorMessage();
    expect(errorMessage).toContain('Tên tài khoản của bạn hoặc Mật khẩu không đúng, vui lòng thử lại');
  });

  test('Empty username and password', async () => {
    await loginPage.login('', '');

    // Kiểm tra thông báo lỗi cho trường trống
    const errorMessage = await loginPage.getErrorMessage();
    expect(errorMessage).toContain('Vui lòng điền vào mục này.');
  });
});