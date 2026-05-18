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