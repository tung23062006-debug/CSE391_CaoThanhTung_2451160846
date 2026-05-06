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