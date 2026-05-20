TRACK A — BOOTSTRAP 5
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

TRACK B — TAILWINDCSS
Câu A1: 
1. Thẻ ngoài cùng (<div> - Container chính)
- flex → display: flex; (Kích hoạt mô hình hộp linh hoạt Flexbox)
- items-center → align-items: center; (Căn các phần tử con theo chiều dọc vào giữa)
- justify-between → justify-content: space-between; (Phân phối các phần tử con cách đều nhau, phần tử đầu sát lề trái, phần tử cuối sát lề phải)
- p-4 → padding: 1rem; /* 16px */ (Tạo khoảng cách đệm đều 4 phía bên trong)
- bg-white → background-color: rgb(255, 255, 255); (Màu nền trắng)
- shadow-md → box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); (Tạo hiệu ứng đổ bóng kích cỡ trung bình)
- rounded-lg → border-radius: 0.5rem; /* 8px */ (Bo tròn các góc thẻ với bán kính trung bình-lớn)
- hover:shadow-xl → Khi di chuột qua (:hover), áp dụng box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04); (Bóng đổ lớn hơn, tạo hiệu ứng nổi lên)
- transition-shadow → transition-property: box-shadow; (Chỉ định hiệu ứng chuyển cảnh mượt mà cho thuộc tính bóng đổ)
- duration-300 → transition-duration: 300ms; (Thời gian diễn ra hiệu ứng chuyển cảnh là 300 miligiây)

2. Thẻ ảnh (<img> - Avatar)
- w-16 → width: 4rem; /* 64px */ (Chiều rộng của ảnh)
- h-16 → height: 4rem; /* 64px */ (Chiều cao của ảnh)
- rounded-full → border-radius: 9999px; (Bo tròn tối đa, biến ảnh hình vuông thành hình tròn)
- object-cover → object-fit: cover; (Giữ nguyên tỷ lệ ảnh và cắt bớt phần thừa để vừa khít khung, không bị méo ảnh)

3. Thẻ bọc thông tin (<div> - Chứa tên và chức vụ)
- ml-4 → margin-left: 1rem; /* 16px */ (Tạo khoảng cách bên trái, đẩy khối thông tin cách ra khỏi ảnh đại diện)
- flex-1 → flex: 1 1 0%; (Cho phép khối này tự động giãn ra để chiếm toàn bộ không gian trống còn lại trong Flexbox)

4. Thẻ tên (<h3> - Nguyễn Văn A)
- text-lg → font-size: 1.125rem; /* 18px */ và line-height: 1.75rem; (Tăng kích thước chữ lên mức trung bình lớn)
- font-semibold → font-weight: 600; (Làm chữ đậm vừa phải)
- text-gray-800 → color: rgb(31, 41, 55); (Đổi màu chữ sang màu xám đậm gần như đen)
- truncate → overflow: hidden; text-overflow: ellipsis; white-space: nowrap; (Nếu chữ quá dài sẽ không xuống dòng mà tự động cắt và thêm dấu ba chấm "...")

5. Thẻ chức vụ (<p> - Frontend Developer)
- text-sm → font-size: 0.875rem; /* 14px */ và line-height: 1.25rem; (Giảm kích thước chữ nhỏ xuống một chút)
- text-gray-500 → color: rgb(107, 114, 128); (Đổi màu chữ sang màu xám nhạt để tạo sự phân cấp thông tin phụ)

6. Thẻ nút (<button> - Follow)
- px-4 → padding-left: 1rem; padding-right: 1rem; /* 16px */ (Tạo khoảng đệm trái và phải bên trong nút)
- py-2 → padding-top: 0.5rem; padding-bottom: 0.5rem; /* 8px */ (Tạo khoảng đệm trên và dưới bên trong nút)
- bg-blue-500 → background-color: rgb(59, 130, 246); (Màu nền của nút là màu xanh dương)
- text-white → color: rgb(255, 255, 255); (Màu chữ của nút là màu trắng)
- rounded-md → border-radius: 0.375rem; /* 6px */ (Bo tròn vừa phải các góc của nút)
- hover:bg-blue-600 → Khi di chuột qua (:hover), áp dụng background-color: rgb(37, 99, 235); (Màu nền nút chuyển sang màu xanh dương đậm hơn)
- focus:ring-2 → Khi nút được focus (nhấp vào hoặc dùng phím Tab), áp dụng box-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color); (Tạo một vòng viền ring dày 2px bao quanh nút)
- focus:ring-blue-300 → Khi nút được focus, đặt màu cho vòng viền ring là màu xanh dương nhạt (rgba(147, 197, 253, 1)) để tăng tính dễ tiếp cận (accessibility)



