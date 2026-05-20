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