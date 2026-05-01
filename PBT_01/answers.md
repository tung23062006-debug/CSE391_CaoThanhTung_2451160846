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

Câu B3:

- Lỗi 1: Dòng 1 — Thiếu từ khóa html trong khai báo DOCTYPE — Cách sửa: Đổi thành <!DOCTYPE html>.

- Lỗi 2: Dòng 2 — Thẻ <html> thiếu thuộc tính ngôn ngữ — Cách sửa: Thêm lang="vi".

- Lỗi 3: Dòng 3 — Thẻ <title> chưa đóng — Cách sửa: Thêm </title> ở cuối.

- Lỗi 4: Dòng 4 — Sai giá trị charset — Cách sửa: Đổi utf8 thành UTF-8.

- Lỗi 5: Dòng 5 — Thẻ <h1> đóng sai cú pháp — Cách sửa: Đổi <h1>Welcome...<h1> thành <h1>Welcome...</h1>.

- Lỗi 6: Dòng 7 — Thẻ <a> đóng sai cú pháp — Cách sửa: Đổi <a>Trang chủ<a> thành <a>Trang chủ</a>.

- Lỗi 7: Dòng 15 — Thuộc tính src không để trong dấu ngoặc kép và thiếu thuộc tính alt — Cách sửa: Đổi thành src="iphone.jpg" alt="...".

- Lỗi 8: Dòng 17 — Lỗi lồng thẻ (Nesting error) — Cách sửa: Đổi <b>... </p></b> thành <b>... </b></p>.

- Lỗi 9: Dòng 34 — Dùng thẻ <main> hai lần (HTML5 quy định <main> là duy nhất) — Cách sửa: Đổi thẻ <main> thứ hai thành <aside> (vì chứa sidebar content).

- Lỗi 10: Dòng 22 — Table thiếu cấu trúc semantic (thead, tbody) và dùng td thay vì th cho tiêu đề — Cách sửa: Thêm <thead>, <tbody> và dùng <th> cho dòng đầu tiên.

- Lỗi 11: Dòng 38 — Thẻ <p> trong footer chưa đóng — Cách sửa: Thêm </p> trước khi đóng </footer>.

- Lỗi 12: Vị trí thẻ <header> — Thẻ <h1> nằm ngoài <header> dù nó là một phần của tiêu đề đầu trang — Cách sửa: Đưa <h1> vào bên trong <header>.

Câu B4:

- 3 thẻ sematic HTML5 mà trang shopee sử dụng là: <header>,<nav>,<section> (những chỗ khoanh đỏ trong screenshot)
- Theo như vùng khoanh tròn trong ảnh screenshot thì đó là 1 table:
+ Nó hiển thị nội dung chi tiết sản phẩm
+ Chỉ dùng <tbody> 
- Form này có action là search và method là "GET", input types được dùng là kiểu "text"

Câu C1:

    <header> <!--Đây là phần đầu trang-->
        <nav> --- <!--Đây là thanh điều hướng -->
            <ul> 
                <li></li> 
            </ul>
        </nav>
    </header>

    <main> <!--Đây là nội dung chính -->
        <nav aria-label="Breadcrumb"> <!-- nav vì đây là điều hướng -->
            <ol> <!-- ol vì breadcrumb có thứ tự -->
                <li></li> 
                <li></li> 
                <li></li> 
            </ol>
        </nav>

        <div class="product-layout">
            <article>   <!-- dùng để bao lấy toàn bộ nội dung sản phẩm -->
                <section class="gallery">
                    <figure> <img src="" alt="">     <!-- Đây là dùng để bao hình minh họa -->
                    </figure>
                    <div class="thumbnails">
                        <img src="" alt="">
                        <img src="" alt="">
                        <img src="" alt="">
                        <img src="" alt="">
                    </div>
                </section>

                <section class="info">                 <!-- Dùng để phân chia các khu vực thông tin khác nhau trong cùng 1 nội dung -->
                    <h1></h1>                        <!-- Dùng để thể hiện tiêu đề sản phẩm -->
                    <p class="price"></p>
                    <div class="rating"></div>
                    <article class="description">
                        <h2></h2>
                        <p></p>
                    </article>
                </section>

                <section class="specs">
                    <h2></h2>
                    <table>  <!-- Dùng cho phần bảng thông số kỹ thuật-->
                        <thead>  <!-- Chứa tiêu đề cột để người dùng dễ phân biệt.-->
                            <tr>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>  <!-- Chứa thông số cụ thể.-->
                            <tr>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </section>

                <section class="reviews">
                    <h2></h2>
                    <form action="">
                        <textarea></textarea>         <!-- Dùng textarea vì đây là chỗ vt bình luận nên thường cần để 1 ô to-->
                        <button type="submit"></button>
                    </form>
                </section>

            </article>

            <aside> <!-- thẻ bổ trợ thông tin-->
                <h3></h3>
                <section class="related-items">
                    <figure></figure>
                </section>
            </aside>

        </div>

    </main>

    <footer> <!-- Đây là phần chân trang -->
        <address></address>   <!-- Đây là phần cung cấp các liên hệ của chủ Website -->  
    </footer>

Câu C2:

Việc chỉ dùng <div> đúng là tiết kiệm được chút thời gian ban đầu, nhưng lại đánh đổi chất lượng cốt lõi của website, đặc biệt ở hai khía cạnh kỹ thuật:

Thứ nhất, về SEO: Các công cụ tìm kiếm (như Google bot) không 'nhìn' thấy giao diện hay đọc hiểu tên class như .tin-tuc-chinh. Chúng quét các thẻ HTML để phân tích cấu trúc. Khi bạn dùng <article>, <main> hay <header>, bot lập tức hiểu đâu là nội dung trọng tâm để ưu tiên lập chỉ mục. Một trang web chỉ toàn <div> giống như một cuốn sách không có mục lục hay tiêu đề chương, khiến bot bối rối và làm giảm thứ hạng tìm kiếm.Thứ hai, về Accessibility (Khả năng truy cập): Web hiện đại phải phục vụ mọi đối tượng, bao gồm cả người khiếm thị sử dụng phần mềm đọc màn hình (Screen Reader).
Ví dụ chứng minh: Nếu bạn dùng thẻ <nav> cho thanh menu, phần mềm sẽ thông báo 'Đây là khu vực điều hướng' và cho phép người dùng ấn phím tắt để nhảy thẳng đến nội dung chính. Nếu bạn dùng <div class="menu">, trình đọc màn hình chỉ coi nó là một đoạn text vô nghĩa, khiến người khiếm thị phải nghe đọc từng đường link một một cách mệt mỏi. Tương tự, một thẻ <button> mặc định hỗ trợ thao tác bằng phím Tab và Enter, trong khi <div class="btn"> thì không thể nếu bạn không code thêm rất nhiều JavaScript.Tuy nhiên, <div> không hề vô dụng: Trường hợp thực tế tốt nhất để dùng <div> là khi bạn cần một thẻ bao bọc (wrapper) thuần túy để gom nhóm các phần tử phục vụ cho việc chia layout (như dùng Flexbox hay CSS Grid), ví dụ <div class="container-fluid">. Ở đây, bản thân chiếc hộp chứa không mang ý nghĩa gì về mặt nội dung, nên dùng <div> là hoàn toàn chính xác.

Phần D: 
link drive của video: https://drive.google.com/drive/folders/1IVHUY1TTGNmtH5kXrU7f2cp8rp1eV8pG?usp=sharing