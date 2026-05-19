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
800px                        720px
1000px	                     960px
1400px	                     1140px

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

Bài B3:
Lệnh compile: 
# Lệnh biên dịch một lần duy nhất:
sass scss/style.scss style.css

# Lệnh bật chế độ tự động đồng bộ (Mỗi lần nhấn Ctrl + S file sẽ tự cập nhật):
sass --watch scss/style.scss style.css

Câu C1: 
2. 
A. Navigation thay đổi thế nào?
- Desktop (1440px): Thanh điều hướng hiển thị dưới dạng Sidebar đứng (Left Navigation) cố định ở bên trái, chứa đầy đủ các mục: Trang chủ, Shorts, Kênh đăng ký, Thư viện, Lịch sử... Ngoài ra thanh tìm kiếm nằm chễm chệ ở chính giữa phía trên cùng
- Tablet (768px): Thanh Sidebar đứng khổng lồ biến mất để nhường không gian cho video. Thay vào đó, nó thu gọn lại thành một Thanh biểu tượng dọc (Mini Guide) rất nhỏ ở sát mép trái, chỉ giữ lại 4 icon chính (Trang chủ, Shorts, Kênh đăng ký, Bạn). Khi bạn bấm vào nút Hamburger Menu (3 dấu gạch ☰) ở góc trên, thanh menu lớn mới trượt ra (gọi là Drawer menu)
- Mobile (375px): Trên màn hình điện thoại, toàn bộ menu bên trái bị xóa bỏ hoàn toàn. Thay vào đó, YouTube chuyển sang sử dụng Thanh điều hướng đáy trang (Bottom Navigation Bar) gồm 5 nút biểu tượng (Trang chủ, Shorts, dấu +, Kênh đăng ký, Bạn) tương tự như ứng dụng trên điện thoại.Thanh tìm kiếm ở trên cùng cũng thu gọn lại thành một biểu tượng kính lúp nhỏ, bấm vào mới hiện ô nhập dữ liệu

B. Lưới Content thay đổi mấy cột?
- Lưới hiển thị danh sách video trang chủ thay đổi linh hoạt theo cơ chế auto-fill của CSS Grid:
+ Desktop (1440px): Lưới hiển thị 4 cột video trên một hàng ngang (nếu màn hình to hơn nữa như 1920px có thể lên tới 5 hoặc 6 cột)
+ Tablet (768px): Lưới tự động co rút lại thành 2 cột video trên một hàng ngang. Kích thước hình ảnh thu nhỏ (thumbnail) của video được phóng to ra để vừa vặn với không gian
+ Mobile (375px): Toàn bộ giao diện biến thành 1 cột duy nhất. Mỗi video chiếm trọn vẹn chiều ngang của màn hình di động, ảnh thumbnail trải rộng giúp người dùng dễ lướt xem bằng một tay

C. Elements nào bị ẩn trên mobile?
- Để giao diện gọn gàng và tải nhanh hơn trên điện thoại, YouTube ẩn đi các phần sau:
+ Thanh danh mục từ khóa (Tag Chips): Các nút bo tròn chọn chủ đề (Tất cả, Trò chơi, Âm nhạc, Trực tiếp...) ở ngay dưới thanh tìm kiếm trên Desktop sẽ bị ẩn bớt, thu gọn lại hoặc cho phép cuộn ngang (Scrollbar ẩn) chứ không dàn trải ra
+ Thông tin phụ của Video: Trên Mobile, phần mô tả ngắn, số lượt xem và thời gian đăng video bị ẩn bớt hoặc viết rất nhỏ gọn ngay cạnh tên kênh, tránh làm loãng màn hình
+ Nút chức năng nhanh: Các nút như Tải xuống, Chia sẻ, Tạo đoạn video hay nút Chỉnh sửa (nếu là kênh của bạn) khi xem video trên Mobile sẽ bị giấu vào trong dấu 3 chấm hoặc thu nhỏ lại dưới dạng icon

D. Font size có thay đổi không?
- Có thay đổi nhẹ để phù hợp tầm mắt:
+ Trên Desktop, tiêu đề video hiển thị cỡ chữ khoảng 16px (độ đậm nét cao)
+ Khi sang Mobile, tiêu đề video được hạ xuống khoảng 14px để tránh việc chữ quá dài bị tràn xuống dòng thứ 3, giúp giữ khoảng cách giữa các video cân đối. Các thông tin như tên kênh, số lượt xem giảm xuống còn 12px

Câu C2: 
1. Wireframe (Sơ đồ bố cục) cho 3 kích thước màn hình
- Giao diện Mobile (< 768px)
+ Thành phần bị ẩn: Không ẩn các thành phần cốt lõi của luồng đặt bàn, nhưng ảnh bản đồ Google Maps có thể tạm ẩn (hoặc thay bằng một nút bấm "Xem bản đồ" để tránh làm nặng trang trên 3G/4G)
+ Vị trí Form: Form đặt bàn nằm dọc, chiếm 100% chiều ngang và xếp ngay bên dưới Grid 6 ảnh món ăn để người dùng xem món xong kéo xuống là đặt bàn được ngay
┌──────────────────────────────────────┐
│        HEADER (Logo | Hotline)       │
├──────────────────────────────────────┤
│              HERO IMAGE              │
├──────────────────────────────────────┤
│          GRID MÓN ĂN (1 cột)         │
│          [Ảnh 1] -> [Ảnh 6]          │
├──────────────────────────────────────┤
│             FORM ĐẶT BÀN             │
│        (Xếp dọc full chiều ngang)    │
├──────────────────────────────────────┤
│         [Nút bấm xem Bản đồ]         │
├──────────────────────────────────────┤
│                FOOTER                │
└──────────────────────────────────────┘

- Giao diện Tablet (768px - 1023px)
+ Grid ảnh món ăn: Tự động chia thành 2 cột (mỗi hàng 2 ảnh, xếp thành 3 hàng) hoặc 3 cột tùy thuộc vào độ lớn của ảnh.Ở đây chọn 2 cột để ảnh món ăn hiển thị rõ nét, không bị quá bé
+ Vị trí Bản đồ: Bản đồ Google Maps được hiện lại và xếp nằm ngang, trải dài full 100% chiều ngang ở ngay trên vùng Footer
┌──────────────────────────────────────┐
│        HEADER (Logo | Hotline)       │
├──────────────────────────────────────┤
│              HERO IMAGE              │
├──────────────────────────────────────┤
│        GRID MÓN ĂN (2 cột)           │
│   ┌──────────────┐ ┌──────────────┐  │
│   │    Ảnh 1     │ │    Ảnh 2     │  │
│   └──────────────┘ └──────────────┘  │
│   [...tiếp tục cho đến ảnh 6...]     │
├──────────────────────────────────────┤
│             FORM ĐẶT BÀN             │
├──────────────────────────────────────┤
│         BẢN ĐỒ GOOGLE MAPS           │
├──────────────────────────────────────┤
│                FOOTER                │
└──────────────────────────────────────┘

- Giao diện Desktop (≥ 1024px)
+ Layout tổng thể: Chia thành 2 cột chính dạng cấu trúc Main Content + Sidebar
+ Hệ thống Sidebar: Có Sidebar. Cột bên trái (rộng hơn) chứa Grid ảnh món ăn và Bản đồ. Cột bên phải (Sidebar cố định) chứa Form đặt bàn để form này luôn đập vào mắt người dùng khi họ cuộn trang xem món ăn
+ Grid ảnh món ăn: Nằm trong vùng nội dung chính bên trái và nâng lên thành 3 cột
┌──────────────────────────────────────────────────────────────────┐
│                     HEADER (Logo | Hotline)                      │
├────────────────────────────────────────────────================──┤
│                            HERO IMAGE                            │
├──────────────────────────────────┬───────────────────────────────┤
│  NỘI DUNG CHÍNH (Cột trái)       │  SIDEBAR ĐẶT BÀN (Cột phải)   │
│                                  │                               │
│  GRID MÓN ĂN (3 cột)             │  ┌─────────────────────────┐  │
│  ┌───────┐ ┌───────┐ ┌───────┐   │  │       FORM ĐẶT BÀN      │  │
│  │ Ảnh 1 │ │ Ảnh 2 │ │ Ảnh 3 │   │  │                         │  │
│  └───────┘ └───────┘ └───────┘   │  │ (Nằm cố định bên phải   │  │
│  [...ảnh 4, 5, 6...]             │  │  giúp tăng tỷ lệ đặt)   │  │
│                                  │  └─────────────────────────┘  │
│  BẢN ĐỒ GOOGLE MAPS              │                               │
├──────────────────────────────────┴───────────────────────────────┤
│                              FOOTER                              │
└──────────────────────────────────────────────────────────────────┘
2. CSS Skeleton tối giản 
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.main-layout {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
}

.hero {
  height: 60vh; /* Ảnh cover chiếm 60% chiều cao màn hình */
  background: #ccc;
}

.dish-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 15px;
}

.dish-item {
  background: #ddd;
  height: 200px; 
}

.booking-form {
  background: #eee;
  padding: 20px;
}

.google-map {
  display: none; 
}

.footer {
  background: #333;
  color: white;
  padding: 20px;
  text-align: center;
}

@media (min-width: 768px) {
  .dish-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .google-map {
    display: block;
    background: #bbb;
    height: 300px;
  }
}

@media (min-width: 1024px) {
  .content-wrapper {
    display: grid;
    grid-template-columns: 2fr 1fr; 
    gap: 30px;
    max-width: 1200px;
    margin: 0 auto;
  }

  .dish-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}