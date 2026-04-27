Câu A1 : (tệp tham chiếu: 01_introduction_html_universe.md/1. WEB HOẠT ĐỘNG NHƯ THẾ NÀO?)
Câu 1:Khi bạn gõ https://shopee.vn vào trình duyệt và nhấn Enter, hãy liệt kê đúng thứ tự ít nhất 5 bước xảy ra (từ DNS lookup đến render).    
    
    1.DNS Lookup (Phân giải tên miền): Trình duyệt kiểm tra bộ nhớ đệm (cache) hoặc gửi yêu cầu đến DNS Server để "dịch" tên miền shopee.vn thành một địa chỉ IP (ví dụ: 143.204.x.x). Máy tính chỉ hiểu IP, không hiểu chữ cái.

    2.Thiết lập kết nối (TCP Handshake & TLS/SSL): Trình duyệt thực hiện quy trình "bắt tay" với server qua giao thức TCP. Vì Shopee dùng https, một bước bắt tay TLS/SSL sẽ diễn ra để mã hóa dữ liệu, đảm bảo an toàn.

    3.Gửi HTTP Request: Trình duyệt gửi một yêu cầu GET đến server của Shopee để xin nội dung trang web.

    4.Server phản hồi (HTTP Response): Server xử lý và gửi ngược lại dữ liệu, thường bắt đầu bằng file HTML.

    5.Render (Hiển thị nội dung): Trình duyệt nhận file HTML, xây dựng cây cấu trúc DOM, tải thêm CSS/JS/Hình ảnh và vẽ (paint) giao diện lên màn hình của bạn.

Câu 2: Trong DevTools của Chrome, tab Network cho thấy thông tin gì? Hãy mở một trang web bất kỳ, chụp screenshot tab Network và đánh dấu (vẽ mũi tên/khoanh tròn) vào:
- Status Code của request đầu tiên
- Tổng thời gian load trang
- Một request trả về file CSS

Câu A2: (tệp tham chiếu: tuan_1_html5/04_visible_part_html.md/Semantic HTML5 — "Thẻ có ý nghĩa")

- Trang web bị Google đánh giá SEO thấp vì nó mắc lỗi "Div Soup" – tức là lạm dụng thẻ <div> cho mọi cấu trúc mà không sử dụng các thẻ Semantic HTML5 (thẻ có ý nghĩa).
- 4 lỗi Semantic và lý do:  
    1.Lỗi lạm dụng <div> cho các thành phần chính: Sử dụng <div class="header">, class="main", class="footer". Google sẽ coi đây chỉ là các khối dữ liệu chung chung, không hiểu đâu là phần đầu trang, nội dung chính hay chân trang.

    2.Lỗi điều hướng (Navigation): Menu trang chủ và sản phẩm được bọc trong <div>. Robot của Google không xác định được đây là cụm liên kết điều hướng quan trọng của website.

    3.Lỗi định danh nội dung độc lập (Article): Thông tin sản phẩm iPhone 16 Pro nằm trong <div>. Trong TMĐT, một sản phẩm nên được hiểu là một thực thể độc lập có thể tái sử dụng hoặc trích xuất dữ liệu.

    4.Lỗi tiêu đề và hình ảnh: Tên sản phẩm dùng class="title" thay vì thẻ tiêu đề (<h1>-<h6>), và hình ảnh thiếu thuộc tính alt. Google không "đọc" được tên sản phẩm là từ khóa quan trọng và không biết ảnh chụp cái gì.
- Code sau khi sửa lại:
    <header>
        <div class="logo">ShopTLU</div>
        <nav>
            <ul>
                <li><a href="/">Trang chủ</a></li>
                <li><a href="/products">Sản phẩm</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <article class="product">
            <h2>iPhone 16 Pro</h2>
            <p class="price">25.990.000đ</p>
            <figure>
                <img src="iphone.jpg" alt="iPhone 16 Pro màu Titan Sa mạc" loading="lazy">
                <figcaption>Cận cảnh iPhone 16 Pro mới nhất</figcaption>
            </figure>
        </article>
    </main>

    <footer>
        <p>© 2026 ShopTLU</p>
    </footer>

Câu A3: 

- Kết quả của đoạn code:

Hộp 1
Text A Text B
Hộp 2
Text C Text D (Bôi đen)
Hộp 3

- Giải thích kết quả trên:
+ Nhóm Block Elements (<div>): Chiếm trọn một dòng (100% chiều rộng). Bất kể nội dung ngắn hay dài, nó sẽ đẩy các phần tử phía sau xuống dòng mới.
+ Nhóm Inline Elements (<span>, <strong>, <a>): Chỉ chiếm không gian vừa đủ với nội dung của nó. Chúng "xếp hàng" cạnh nhau trên cùng một dòng cho đến khi hết chiều rộng của vùng chứa.

Câu A4: (tệp tham chiếu: tuan_1_html5/05_tables_hyperlinks.md/TABLES & HYPERLINKS)
- Sự khác nhau giữa <thead>, <tbody>, <tfoot>
+ <thead> (Table Header): Chứa các hàng tiêu đề của bảng (thường dùng thẻ <th>).
+ <tbody> (Table Body): Chứa nội dung dữ liệu chính của bảng (thẻ <td>). Một bảng có thể có nhiều <tbody> để phân nhóm dữ liệu.
+ <tfoot> (Table Footer): Chứa phần tổng kết, chú thích hoặc tổng cộng ở cuối bảng.
- Lý do KHÔNG NÊN dùng table để tạo layout trang web (3 lý do):
+ Không có tính Semantic: Nếu dùng nó để chia cột giao diện, các thiết bị hỗ trợ sẽ đọc trang web của bạn như một mảng dữ liệu rời rạc, gây cực hình cho người dùng khiếm thị và làm giảm điểm SEO thê thảm.
+ Tốc độ Render chậm: Nếu dùng table làm layout, người dùng sẽ thấy một trang web trắng tinh trong vài giây trước khi mọi thứ "ập" ra cùng lúc.
+ Khó làm Responsive (Tương thích di động)