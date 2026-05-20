Câu A1: Tài liệu tham chiếu: tuan_4_css_frameworks/bootstrap/02_grid_system/02_grid_system.md
Kích thước	       < 768px	            768px - 991px	    ≥ 992px
Số cột	              12                      6                3
Box layout        1 box/1 hàng           2 box/1 hàng      4 box/1 hàng

Sơ đồ layout:

Giao diện Mobile (< 768px) 
┌─────────────────────────┐
│          Box 1          │
├─────────────────────────┤
│          Box 2          │
├─────────────────────────┤
│          Box 3          │
├─────────────────────────┤
│          Box 4          │
└─────────────────────────┘

Giao diện Tablet (768px - 991px)
┌────────────────────┬────────────────────┐
│       Box 1        │       Box 2        │
├────────────────────┼────────────────────┤
│       Box 3        │       Box 4        │
└────────────────────┴────────────────────┘

Giao diện Desktop (≥ 992px)
┌───────────┬───────────┬───────────┬───────────┐
│   Box 1   │   Box 2   │   Box 3   │   Box 4   │
└───────────┴───────────┴───────────┴───────────┘

1. col-md-6 là gì?
- Một hàng ngang luôn được chia làm 12 phần
+ md: Màn hình máy tính bảng (từ 768px trở lên)
+ 6: Chiếm 6 phần 
=> Trên máy tính bảng, hộp rộng nửa màn hình (hàng ngang chứa được 2 hộp)

2. Tại sao không cần viết col-sm-12?
- Do quy luật Kế thừa từ nhỏ đến lớn (Mobile-First):
+ Khi viết col-12 (Mobile) --> màn hình lớn hơn là sm sẽ tự động kế thừa độ rộng 12 phần này
+ Nó chỉ dừng lại khi bị thằng lớn hơn là col-md-6 đè lên

Câu A2: 
1. Class d-none d-md-block
- Ẩn khi: Màn hình nhỏ dưới 768px (Mobile)
- Hiện khi: Màn hình từ 768px trở lên (Tablet, Desktop)
2. 5 Spacing Utilities
- mt-3: Cách lề trên ra ngoài (mức 3 - 16px)
- px-4: Đệm bên trong trái + phải (mức 4 - 24px)
- mb-auto: Tự động đẩy hết lề dưới (dùng để căn chỉnh khối)
- py-2: Đệm bên trong trên + dưới (mức 2 - 8px)
- ms-2: Cách lề trái ra ngoài (Start -  8px)
3. Phân biệt 3 loại Container
.container: Rộng cố định theo từng nấc (ví dụ: 720px, 1140px), có khoảng trống 2 bên cánh màn hình
.container-fluid: Luôn tràn viền 100% ở mọi màn hình
.container-md: Tràn viền 100% trên Mobile, bắt đầu khóa cố định từ màn hình Tablet (768px) trở lên

Câu C1: 
1. Quy trình đổi màu $primary
- Công cụ cần: NodeJS (để cài đặt gói sass) hoặc Extension Live Sass Compiler trên VS Code
- File cần chỉnh sửa: Tạo một file SASS của riêng bạn (ví dụ: custom.scss)
- Cách viết code: Khai báo biến đè lên trước rồi mới @import Bootstrap vào sau:
$primary: #E63946;
@import "node_modules/bootstrap/scss/bootstrap";

2. Tại sao KHÔNG nên ghi đè trực tiếp .btn-primary { background: red; }?
- Mất tính đồng bộ: Nếu chỉ đè mỗi background, các trạng thái như :hover, :active, :focus hoặc các thành phần ăn theo màu primary khác (như viền, màu chữ, màu alert, badge) vẫn sẽ mang màu xanh mặc định, gây lỗi logic giao diện
- Mất công sức: Dùng SASS variables chỉ cần đổi đúng 1 dòng, toàn bộ hệ thống sinh ra từ màu đó tự động cập nhật theo một cách hoàn hảo

Câu C2:
1. Số dòng CSS cần viết
- CSS thuần: Cần viết rất nhiều (khoảng 50 - 100 dòng mã) để tự định nghĩa các thuộc tính,bẻ layout bằng Grid/Flexbox và cấu hình chi tiết - cho từng Media Queries responsive
Bootstrap: Gần như bằng 0 dòng CSS.Lập trình viên chỉ cần gọi trực tiếp các class tiện ích đã được xây dựng sẵn điền vào file HTML

2. Thời gian phát triển
- CSS thuần: Tốn nhiều thời gian.Phải tự tính toán tỷ lệ phần trăm độ rộng, viết code từ đầu và mất công kiểm tra lỗi hiển thị (test layout) trên nhiều thiết bị khác nhau
- Bootstrap: Cực kỳ nhanh chóng.Chỉ mất vài phút ghép các class có sẵn là giao diện tự động chuẩn responsive,giúp rút ngắn tối đa thời gian dàn trang

3. Khả năng tùy biến
- CSS thuần: Rất linh hoạt. Lập trình viên làm chủ hoàn toàn mã nguồn,dễ dàng chỉnh sửa bất kỳ chi tiết nhỏ nào theo ý muốn mà không sợ bị xung đột code
- Bootstrap: Bị gò bó theo khuôn mẫu có sẵn của thư viện.Nếu muốn can thiệp thay đổi sâu giao diện gốc thì cấu trúc code sẽ rất phức tạp hoặc phải cấu hình lại qua SASS variables

4. Khi nào NÊN dùng Bootstrap?
- Khi cần làm các dự án yêu cầu tiến độ gấp, chạy nước rút (Bài tập lớn, Hackathon, dự án MVP chạy thử nghiệm)
- Khi làm giao diện cho các trang quản trị nội bộ (Hệ thống Admin, Dashboard, CMS) - nơi cần sự gọn gàng, chuẩn chỉ hơn là sự sáng tạo độc lạ
- Khi dự án không có Designer thiết kế riêng và cần một hệ thống giao diện chuẩn responsive ngay lập tức

5. Khi nào KHÔNG NÊN dùng Bootstrap?
- Khi làm các trang web đòi hỏi tính nghệ thuật, sáng tạo đột phá, độc quyền thương hiệu (Landing page sự kiện,Portfolio cá nhân phá cách)
- Khi dự án yêu cầu tối ưu dung lượng website ở mức siêu nhẹ (Bootstrap chứa rất nhiều đoạn code thừa mà một dự án nhỏ không bao giờ dùng tới,làm nặng trang web)
