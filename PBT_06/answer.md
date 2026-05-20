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