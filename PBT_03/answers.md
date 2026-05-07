Câu A1: (Tài liệu tham chiếu: tuan_2_css_core/08_introduction_css.md/3 cách thêm CSS)
1. Inline CSS  
- Ví dụ: <h1 style="color: red; font-size: 24px;">Tiêu đề</h1>
- Ưu điểm: Nhanh , tiện lợi và ưu tiên cao nhất trong cả 3 loại 
- Nhược điểm: Làm rối code , khó bảo trì
- Nên dùng khi: Chỉnh sửa nhanh, tức thời

2. Internal CSS
- Ví dụ: 
<head>
    <style>
        h1 { color: red; font-size: 24px; }
    </style>
</head>

- Ưu điểm: Quản lý toàn bộ style của một file HTML tại một nơi duy nhất,không cần quản lý thêm file .css bên ngoài
- Nhược điểm: Chỉ có tác dụng trong file hiện tại,nếu website có nhiều trang ta sẽ phải copy đoạn code này sang từng file, dẫn đến việc khó cập nhật giao diện tổng thể
- Nên dùng khi: Css cho các trang web đơn

3. External CSS
- Ví dụ: 
<!-- Thêm thẻ link trong file html để liên kết với file Css -->
<head>
    <link rel="stylesheet" href="styles.css">
</head>
<!-- Trong file Css -->
selector {
    property: value;
    property: value;
}

/* Ví dụ */
h1 {
    color: #2563eb;           /* Màu chữ */
    font-size: 32px;          /* Cỡ chữ */
    font-family: 'Inter', sans-serif;  /* Font chữ */
    text-align: center;       /* Căn giữa */
    margin-bottom: 16px;      /* Khoảng cách dưới */
}

.btn-primary {
    background-color: #2563eb;
    color: white;
    padding: 12px 24px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.btn-primary:hover {
    background-color: #1d4ed8;    /* Đổi màu khi hover */
}

- Ưu điểm: Tách biệt hoàn toàn nội dung (HTML) và giao diện (CSS). Một file CSS có thể dùng cho hàng nghìn trang HTML khác nhau, giúp việc thay đổi giao diện toàn trang web chỉ mất vài giây. Giúp file HTML gọn gàng hơn
- Nhược điểm: Trình duyệt phải thực hiện thêm một yêu cầu tải file CSS về, có thể làm chậm tốc độ tải trang lần đầu
- Nên dùng khi: làm dự án thực tế, website đa trang hoặc bất kỳ sản phẩm nào cần tính lâu dài và dễ bảo trì

Câu A2:(Tài liệu tham chiếu:  tuan_2_css_core/09_css_selectors.md)

1. h1                       → Chọn ShopTLU: Chọn tất cả thẻ <h1> có trong trang
2. .price                   → Chọn 25.990.000đ, 45.990.000đ: Chọn tất cả các phần tử có class là price
3. #app header              → Chọn Toàn bộ nội dung trong header: trong header	Chọn thẻ <header> nằm bên trong phần tử có id là app
4. nav a:first-child        → Chọn Home: Chọn thẻ <a> đầu tiên nằm trong thẻ <nav>
5. .product.featured h2     → Chọn MacBook Pro: Chọn thẻ <h2> nằm trong phần tử có đồng thời cả hai class product và featured
6. article > p              → Chọn 25.990.000đ, Mô tả sản phẩm... (x2)Chọn các thẻ <p> là con trực tiếp của thẻ <article>
7. a[href="/"]              → Chọn Home: Chọn thẻ <a> có thuộc tính href chính xác là "/"
8. .top-bar.dark h1         → Chọn ShopTLU: Chọn thẻ <h1> nằm trong phần tử có cả class top-bar và dark 

Câu A3: (Tài liệu tham chiếu: tuan_2_css_core/11_box_model.md/Cách tính kích thước — NGUYÊN NHÂN CỦA MỌI BUG LAYOUT/BORDER-BOX — Giải Pháp "Một Dòng Cứu Ngàn Dòng"/DESIGNING BOXES — Các kỹ thuật thực tế)
/* Trường hợp 1: content-box (mặc định) */ (Chiều rộng THỰC TẾ = width + padding×2 + border×2)
.box-1 {
    width: 400px;
    padding: 20px;
    border: 5px solid black;
    margin: 10px;
}
→ Chiều rộng hiển thị = 400 + (20 x 2) + (5 x 2) = 450px
→ Không gian chiếm trên trang = 450 + (10 x 2) = 470px

/* Trường hợp 2: border-box */(chiều rộng THỰC TẾ = width)
.box-2 {
    box-sizing: border-box;
    width: 400px;
    padding: 20px;
    border: 5px solid black;
    margin: 10px;
}
→ Chiều rộng hiển thị = 400px
→ Kích thước content thực tế = 400 - (20 x 2) - (5 x 2) = 350px
→ Không gian chiếm trên trang = 400 + (10 x 2) = 420px

/* Trường hợp 3: Margin collapse */
.box-a { margin-bottom: 25px; }
.box-b { margin-top: 40px; }
→ Khoảng cách giữa box-a và box-b =  40px
→ Giải thích tại sao KHÔNG PHẢI 65px: 
- Trong CSS, khi các lề dọc tiếp xúc với nhau, trình duyệt sẽ áp dụng cơ chế Margin Collapse
- Thay vì cộng 25px + 40px trình duyệt sẽ lấy giá trị lớn nhất trong số các lề đang tiếp xúc, vì 40px > 25px nên khoảng cách cuối cùng là 40px

Câu A4: (Tài liệu tham chiếu: tuan_2_css_core/09_css_selectors.md/Specificity — "Ai thắng khi xung đột?")
- Trong CSS, độ ưu tiên được tính theo bộ ba giá trị:
+ a (ID): Số lượng ID selector
+ b (Classes/Attributes/Pseudo-classes): Số lượng class, thuộc tính hoặc giả lớp
+ c (Elements/Pseudo-elements): Số lượng thẻ HTML

1. 
    p { color: black; }                    /* Rule A (0, 0, 1)*/
    .price { color: blue; }               /* Rule B (0, 1, 0)*/
    #main-price { color: red; }           /* Rule C (1, 0, 0)*/
    p.price { color: green; }             /* Rule D (0, 1, 1)*/
2. Element sẽ có màu Đỏ.Vì Trình duyệt so sánh các trọng số từ trái qua phải (a -> b -> c):
+ Rule C có điểm ở cột a (ID) cao nhất (1, 0, 0)
+ Dù các Rule khác có kết hợp nhiều class hay tag đến đâu thì cũng không thể vượt qua một bộ chọn ID (trừ khi có !important hoặc Inline Style)
3. Element sẽ có màu Cam.Vì Inline style có mức độ ưu tiên cao nhất so với các cách CSS khác
4. Element sẽ có màu Đen. Vì khi một thuộc tính được đánh dấu là !important, nó sẽ ghi đè lên tất cả các khai báo khác, bất kể độ ưu tiên của bộ chọn đó cao đến đâu