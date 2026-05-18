Câu 1: Tài liệu tham chiếu : tuan_3_css_advanced/13_creating_responsive_layouts.md/Bước 0: Viewport Meta Tag — "Tấm vé vào cửa"
1. 
- <meta name="viewport" content="width=device-width, initial-scale=1.0">
- Giải thích: 
+ name="viewport": Khai báo cho trình duyệt biết đoạn meta này dùng để cấu hình vùng hiển thị (viewport) của trang web trên các thiết bị di động
+ content="...": Chứa các tham số cấu hình cụ thể phân tách nhau bằng dấu phẩy:
* width=device-width: Buộc chiều rộng của trang web phải khớp với chiều rộng màn hình của thiết bị (tính bằng CSS pixels) thay vì sử dụng chiều rộng mặc định của trình duyệt máy tính
* initial-scale=1.0: Thiết lập mức độ thu phóng ban đầu là 1:1 khi trang vừa tải xong, điều này ngăn trình duyệt tự động phóng to hoặc thu nhỏ giao diện
2. Thiếu dòng này = iPhone sẽ coi trang web là web desktop và thu nhỏ xíu lại, luôn đặt trong <head>
3. 
- Mobile-First 
+ CSS Mặc định: Viết code cho màn hình nhỏ trước 
+ Sử dụng Media Query: Dùng @media (min-width: ...) để mở rộng, thêm thắt hoặc sửa đổi giao diện khi màn hình lớn dần lên.
+ Hướng tiếp cận: Tiến trình tăng tiến (Progressive Enhancement) – Xây dựng phần cốt lõi đơn giản nhất cho di động, sau đó đắp thêm tính năng và bố cục phức tạp khi có nhiều không gian màn hình hơn
+ Ví dụ:
/* 1. CSS mặc định dành cho Mobile (Màn hình < 768px) */
.container {
  display: flex;
  flex-direction: column; /* Xếp chồng 1 cột */
}
.sidebar, .main-content {
  width: 100%;
}

/* 2. CSS bổ sung cho Tablet/Desktop (Màn hình từ 768px trở lên) */
@media (min-width: 768px) {
  .container {
    flex-direction: row; /* Chuyển thành 2 cột nằm ngang */
  }
  .sidebar {
    width: 25%;
  }
  .main-content {
    width: 75%;
  }
}
- Desktop-First 
+ CSS Mặc định: Viết code cho màn hình lớn trước 
+ Sử dụng Media Query: Dùng @media (max-width: ...) để thu gọn, cắt bớt hoặc bẻ gãy giao diện khi màn hình hẹp dần lại.
+ Hướng tiếp cận: Suy giảm duyên dáng (Graceful Degradation) – Tạo ra một giao diện đầy đủ, hoành tráng trên máy tính, sau đó tìm cách co kéo, ẩn bớt hoặc xếp chồng các thành phần lại sao cho vừa với màn hình nhỏ
+ Ví dụ:
/* 1. CSS mặc định dành cho Desktop (Màn hình lớn) */
.container {
  display: flex;
  flex-direction: row; /* 2 cột nằm ngang */
}
.sidebar {
  width: 25%;
}
.main-content {
  width: 75%;
}

/* 2. CSS bẻ gãy giao diện cho Mobile (Màn hình từ 767px trở xuống) */
@media (max-width: 767px) {
  .container {
    flex-direction: column; /* Ép về 1 cột xếp chồng */
  }
  .sidebar, .main-content {
    width: 100%;
  }
}
4. Mobile-First được khuyên dùng vì: 
- Nhanh và nhẹ cho điện thoại: Điện thoại thường mạng yếu hơn máy tính. Viết kiểu này giúp điện thoại chỉ cần đọc những đoạn code đơn giản, gọn nhẹ trước, giúp trang web tải nhanh hơn.
- Hầu hết mọi người dùng điện thoại: Hiện nay người ta lướt web bằng điện thoại là chính. Vì vậy, cái gì nhiều người dùng hơn thì mình ưu tiên làm tốt trước.
- Dễ viết code hơn: Thiết kế cho màn hình nhỏ buộc bạn phải giữ lại những thứ quan trọng nhất. Việc mở rộng một giao diện đơn giản từ điện thoại lên máy tính (thêm cột, kéo rộng ra) bao giờ cũng dễ và ít bị lỗi hơn là việc cố nhồi nhét một giao diện máy tính khổng lồ vào màn hình điện thoại.

Câu A2: Tài liệu tham khảo: tuan_3_css_advanced/13_creating_responsive_layouts.md
1. Kích thước Cực nhỏ (Extra Small - xs)
- Kích thước: < 576px (CSS mặc định, không cần viết media query nếu làm theo Mobile-First)
- Thiết bị đại diện: Điện thoại di động đứng (iPhone 13/14/15, Samsung Galaxy...)
- Số cột lưới sản phẩm: 1 cột hoặc 2 cột

2. Kích thước Nhỏ (Small - sm)
- Kích thước: ≥ 576px (Viết @media (min-width: 576px))
- Thiết bị đại diện: Điện thoại di động xoay ngang
- Số cột lưới sản phẩm: 2 cột

3. Kích thước Trung bình (Medium - md)
- Kích thước: ≥ 768px (Viết @media (min-width: 768px))
- Thiết bị đại diện: Máy tính bảng (iPad, Samsung Galaxy Tab...)
- Số cột lưới sản phẩm: 3 cột

4. Kích thước Lớn (Large - lg)
- Kích thước: ≥ 992px (Viết @media (min-width: 992px))
- Thiết bị đại diện: Máy tính xách tay nhỏ (Laptop màn hình 11-13 inch), máy tính bảng cỡ lớn (iPad Pro) đặt ngang.
- Số cột lưới sản phẩm: 4 cột

5. Kích thước Cực lớn (Extra Large - xl)
- Kích thước: ≥ 1200px (Viết @media (min-width: 1200px))
- Thiết bị đại diện: Máy tính để bàn (Desktop), Laptop thông thường (14-15.6 inch)
- Số cột lưới sản phẩm: 4 cột hoặc 5 cột

6. Kích thước Siêu lớn (Extra Extra Large - xxl)
- Kích thước: ≥ 1400px (Viết @media (min-width: 1400px))
- Thiết bị đại diện: Màn hình PC cỡ lớn, màn hình chuyên dụng độ phân giải cao
- Số cột lưới sản phẩm: 5 cột hoặc 6 cột

Câu A3: Tài liệu tham khảo: tuan_3_css_advanced/13_creating_responsive_layouts.md/ Media Queries — "Nếu màn hình nhỏ → đổi layout"
Chiều rộng màn hình	    .container width
375px (iPhone SE)	           100%
600px	                       540px
800px                          720px
1000px	                       960px
1400px	                       1140px

Câu A4: Tài liệu tham khảo: tuan_3_css_advanced/16_sass_scss.md/4 Tính Năng Thay Đổi Cuộc Đời
1. Variables — "Sửa 1 chỗ, 47 chỗ tự đổi"
- Thay vì phải nhớ và viết đi viết lại một mã màu hoặc một kích thước ở khắp nơi, ta có thể đặt tên cho nó thành một cái "biến" để tái sử dụng.Sau này nếu muốn đổi màu toàn bộ trang web, bạn chỉ cần sửa đúng một nơi duy nhất
- Ví dụ: 
$primary-color: #3498db; /* Khai báo biến */
$padding-base: 15px;

button {
  background-color: $primary-color; /* Sử dụng biến */
  padding: $padding-base;
}

2. Nesting (viết CSS lồng nhau)
- SCSS cho phép bạn viết các thẻ con nằm bên trong thẻ cha giống hệt như cấu trúc của cây thư mục HTML.Cách viết này giúp code gọn gàng, dễ quản lý và không phải viết lại tên thẻ cha nhiều lần
- Ví dụ:
.card {
  background-color: white;
  padding: 20px;
  border-radius: 8px;

  /* Lồng thẻ h2 bên trong .card */
  h2 {
    font-size: 20px;
    color: #333;
  }

  /* Lồng class .card-desc bên trong .card */
  .card-desc {
    font-size: 14px;
    color: #666;
  }

  /* Lồng thẻ button bên trong .card */
  button {
    background-off: blue;
    color: white;

    /* Dùng dấu & để viết hiệu ứng hover cho chính cái button đó */
    &:hover {
      background-color: darkblue;
    }
  }
}

3. Mixins (@mixin, @include)
- Tính năng Mixins trong SCSS hoạt động giống như một "đoạn code mẫu" hoặc một "cái khuôn" được làm sẵn. Ta có thể gom những thuộc tính CSS hay dùng chung với nhau lại thành một nhóm, đặt tên cho nó, rồi sau này có thể "gọi" nó ra ở bất kỳ chỗ nào cần dùng mà không phải gõ lại từ đầu
- Ví dụ: 
/* 1. Định nghĩa cái khuôn Mixin (Dùng từ khóa @mixin) */
/* Cặp ngoặc đơn (...) chứa các tham số có thể thay đổi linh hoạt */
@mixin tao-hinh-tron($kich-thuoc, $mau-nen) {
  width: $kich-thuoc;
  height: $kich-thuoc;
  background-color: $mau-nen;
  border-radius: 50%; /* Bo tròn tuyệt đối */
}

/* 2. Gọi khuôn ra để dùng ở các class khác nhau (Dùng từ khóa @include) */
.anh-avatar {
  @include tao-hinh-tron(80px, #ccc); /* Tạo hình tròn rộng 80px, nền xám */
}

.nut-thong-bao {
  @include tao-hinh-tron(20px, red);  /* Tạo hình tròn rộng 20px, nền đỏ */
}

4. @extend / Inheritance
- Tính năng @extend / Inheritance (Kế thừa) giúp bạn chia sẻ một tập hợp các thuộc tính CSS từ selector này sang selector khác, cực kỳ thích hợp cho các thành phần giao diện có cấu trúc giống hệt nhau nhưng chỉ khác nhau một chút về màu sắc hoặc chi tiết nhỏ
- Ví dụ: 
/* 1. Tạo một class cơ bản chứa các thuộc tính chung (Khung sườn) */
.thong-bao-goc {
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
}

/* 2. Dùng @extend để kế thừa lại class gốc */
.thong-bao-thanh-cong {
  @extend .thong-bao-goc; /* Lấy hết padding, border, border-radius... */
  background-color: #d4edda; /* Thêm màu nền xanh của riêng mình */
  color: #155724;
}

.thong-bao-loi {
  @extend .thong-bao-goc; /* Lấy hết padding, border, border-radius... */
  background-color: #f8d7da; /* Thêm màu nền đỏ của riêng mình */
  color: #721c24;
}

- Trình duyệt không đọc được file .scss vì: Trình duyệt chỉ hiểu duy nhất CSS tiêu chuẩn. File .scss chứa nhiều cú pháp nâng cao (biến, lồng nhau, hàm...) giống như ngôn ngữ lập trình, trình duyệt không có bộ dịch để hiểu nên sẽ báo lỗi và không hiển thị giao diện
- Các bước chuyển SCSS → CSS: 
+ Cách dễ nhất: Cài extension Live Sass Compiler trên VS Code, bấm Watch Sass. Mỗi khi lưu file .scss, nó tự đẻ ra file .css
+ Dùng lệnh: Cài Sass qua NodeJS rồi chạy lệnh: sass input.scss output.css
+ Dùng công cụ: Cấu hình trong các dự án dùng Vite, Webpack để tự động dịch ngầm
Kết quả: Nhúng file .css vừa sinh ra vào thẻ <link> của file HTML là xong
