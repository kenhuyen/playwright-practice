/**  playwright"
 I, Thông tin thư mục:
- Cấu hình playwright: playwright.config.ts hoặc playwright.config.js. Nó định nghĩa các thiết lập như thư mục chứa test, timeout, trình duyệt sử dụng, và các tùy chọn khác.
- File test: Đây là nơi bạn viết các test case của mình. Ví dụ, login.test.ts 
- package.json: File này quản lý dependencies và scripts của dự án
- tsconfig.json (cho TypeScript): Cấu hình TypeScript cho dự án
- .gitignore: Để loại trừ các file không cần thiết khỏi version control
- file cấu hình playwright.config.ts: Câu lệnh trace: 'on-first-retry' trong cấu hình Playwright liên quan đến việc ghi lại thông tin chi tiết (trace) về quá trình thực thi test. Hãy giải thích chi tiết hơn:
        Ý nghĩa:
        Khi được đặt là 'on-first-retry', Playwright sẽ bắt đầu ghi trace khi một test case thất bại và được chạy lại lần đầu tiên.
        Trace là gì:
        Trace là một bản ghi chi tiết về quá trình thực thi test, bao gồm các hành động, screenshots, network requests, và console logs.
        Nó rất hữu ích cho việc debug khi test thất bại.
        Các giá trị có thể có:
        'on': Luôn ghi trace cho mọi test run.
        'off': Không bao giờ ghi trace.
        'on-first-retry': Chỉ ghi trace khi test thất bại và được chạy lại lần đầu.
        'on-all-retries': Ghi trace cho tất cả các lần chạy lại của test thất bại.
        'retain-on-failure': Ghi trace cho tất cả các test và chỉ giữ lại trace của các test thất bại.
  1, Đóng/mở trình duyệt: 
  2. Cấu trúc:
    tests/: Chứa các file test case.
    pages/: Đây là nơi bạn đặt các Page Objects.
    helpers/: Chứa các hàm tiện ích được sử dụng trong tests.
    fixtures/: Chứa dữ liệu test, như tài khoản đăng nhập mẫu.
    playwright.config.ts: File cấu hình cho Playwright.
    package.json và tsconfig.json: Files cấu hình cho dự án Node.js và TypeScript.
  3. Locator:
  - có thể sử dụng nhiều loại selectors khác nhau, không chỉ giới hạn ở CSS selectors. Ví dụ:
  page.locator('text=Click me') : để tìm phần tử có text "Click me"
  page.locator('//button[@id="submit"]') : để sử dụng XPath
  page.locator('data-testid=submit-button') : để sử dụng thuộc tính tùy chỉnh
  page.locator() : trả về một đối tượng Locator, cho phép bạn thực hiện nhiều hành động khác nhau như click(), fill(), isVisible(), v.v.
  4. Biến page: 
  Biến page là một phần quan trọng trong kiểm thử tự động bằng Playwright. 
  Nó cho phép bạn tương tác với trang web và thực hiện các hành động cần thiết để kiểm tra tính năng của ứng dụng.
      // `page` là biến đại diện cho trang đang kiểm thử
    await page.goto('https://example.com/login'); // Điều hướng đến trang đăng nhập


  */