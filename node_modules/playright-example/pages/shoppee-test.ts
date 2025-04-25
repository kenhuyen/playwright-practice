import { Page, Locator } from 'playwright'; // Import các kiểu dữ liệu cần thiết từ Playwright

export class LoginPage {
    private page: Page; // Định nghĩa kiểu cho page
    private username_field: Locator; // Định nghĩa kiểu cho username_field
    private password_field: Locator; // Định nghĩa kiểu cho password_field
    private login_button: Locator; // Định nghĩa kiểu cho login_button

    constructor(page: Page) {
        this.page = page;
        this.username_field = page.getByPlaceholder('Username');
        this.password_field = page.getByPlaceholder('Password');
        this.login_button = page.getByRole('button', { name: 'Login' });
    }

    async gotoLoginPage(): Promise<void> { 
        await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    }

    async login(username: string, password: string): Promise<void> {
        await this.username_field.fill(username);
        await this.password_field.fill(password);
        await this.login_button.click();
    }
}
