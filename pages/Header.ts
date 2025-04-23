import { Page } from "@playwright/test";
export class Header {
  constructor(private page: Page) {}
  async navigate() {
    await this.page.goto(
      "https://anhtester.com/blog/selenium-java/selenium-java-bai-17-cau-truc-code-theo-page-object-model-pom"
    );
  }
  async getTitle() {
    return await this.page.title();
  }

  // Phương thức để kiểm tra sự hiện diện của một phần tử cụ thể (ví dụ: banner, thông báo, v.v.)
  async logoImg() {
    return await this.page.isVisible("selector-for-banner");
  }

  // Phương thức để nhấp vào một liên kết hoặc nút trên trang Home
  async clickOnButton(buttonText: string) {
    await this.page.click(`text=${buttonText}`);
  }

  // Phương thức để lấy thông tin từ một phần tử cụ thể
  async getInfoText(selector: string) {
    return await this.page.textContent(selector);
  }

  // Phương thức để kiểm tra một phần tử nào đó có hiện diện trong một danh sách (ví dụ: sản phẩm)
  async isProductVisible(productName: string) {
    return await this.page.isVisible(`text=${productName}`);
  }
}
