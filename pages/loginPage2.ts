import { Page, expect } from "@playwright/test";

// loginPage.js - Page Object đại diện cho trang đăng nhập
class LoginPage {
  constructor(private page: Page) {}
  // Selectors
  private usernameInput = "input.new-todo"; 
  private passwordInput = "input.edit"; 
  private loginButton = "button.destroy"; 

  async navigate() {
    await this.page.goto("https://example.com/login"); 
  }

  async login( username: string, password:string) {
    await this.page.fill(this.usernameInput, username); 
    await this.page.fill(this.passwordInput, password); 
    await this.page.click(this.loginButton); 
  }
}

module.exports = LoginPage;
// loginPage.js - Page Object đại diện cho trang đăng nhập
class LoginPage2 {
    usernameInput: string;
    passwordInput: string;
    loginButton: string;
    
     constructor(private page: Page) {
        this.page = page;
        this.usernameInput = '#username';  // Selector cho ô nhập username
        this.passwordInput = '#password';  // Selector cho ô nhập password
        this.loginButton = '#login';       // Selector cho nút đăng nhập
    }

    async navigate() {
        await this.page.goto('https://example.com/login');  // Điều hướng đến trang đăng nhập
    }

    async login(username :string, password:string) {
        await this.page.fill(this.usernameInput, username); // Điền tên người dùng
        await this.page.fill(this.passwordInput, password); // Điền mật khẩu
        await this.page.click(this.loginButton);            // Nhấn nút đăng nhập
    }
   
}

module.exports = LoginPage;
