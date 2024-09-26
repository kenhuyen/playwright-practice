import { Page, expect } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  // Selectors
  private usernameInput = 'input.new-todo'; // Giả sử đây là input username
  private passwordInput = 'input.edit'; // Giả sử đây là input password
  private loginButton = 'button.destroy'; // Giả sử đây là nút đăng nhập
  private errorMessage = '.todo-count'; // Giả sử đây là nơi hiển thị thông báo lỗi

  // Actions
  async navigate() {
    await this.page.goto('https://demo.playwright.dev/todomvc');
  }

  async login(username: string, password: string) {
    await this.page.fill(this.usernameInput, username);
    await this.page.fill(this.passwordInput, password);
    await this.page.click(this.loginButton);
  }

  // Assertions
  async expectLoginSuccess() {
    // Giả sử sau khi đăng nhập thành công, ta sẽ thấy một phần tử có class 'todo-list'
    await expect(this.page.locator('.todo-list')).toBeVisible();
  }

  async expectLoginError(errorText: string) {
    const error = this.page.locator(this.errorMessage);
    await expect(error).toBeVisible();
    await expect(error).toHaveText(errorText);
  }
}