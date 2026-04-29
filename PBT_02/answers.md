Câu A1: (tệp tham chiếu: 07_forms_interactive.md/Các Input Types HTML5)

1.type="email" → Ô nhập text, tự kiểm tra định dạng có ký tự @ → Dùng cho form đăng ký thành viên.

2.type="password" → Ô nhập ẩn ký tự (dạng chấm tròn), bảo mật nội dung → Dùng cho ô nhập mật khẩu thanh toán.

3.type="number" → Ô nhập số, có nút tăng/giảm, chặn nhập chữ → Dùng để chọn số lượng sản phẩm trong giỏ hàng.

4.type="tel" → Ô nhập văn bản, tự động mở bàn phím số trên di động → Dùng để nhập số điện thoại nhận hàng.

5.type="date" → Ô nhập hiển thị bảng lịch (date picker) để chọn ngày → Dùng để chọn ngày giao hàng hoặc ngày sinh khách hàng.

6.type="range" → Thanh trượt chọn giá trị trong khoảng xác định → Dùng làm bộ lọc khoảng giá sản phẩm (Price Filter).

7.type="color" → Ô hiển thị màu, mở bảng chọn màu (color picker) khi click → Dùng để chọn màu sắc khi tùy chỉnh sản phẩm (ví dụ: in áo thun).

8.type="file" → Nút chọn tệp tin từ máy tính hoặc điện thoại → Dùng để tải ảnh minh họa khi khách hàng viết đánh giá sản phẩm.

9.type="search" → Ô nhập văn bản, có nút "x" để xóa nhanh nội dung → Dùng cho thanh tìm kiếm sản phẩm trên đầu trang.

10.type="checkbox" → Ô vuông để tích chọn hoặc bỏ chọn → Dùng để xác nhận "Tôi đồng ý với điều khoản mua hàng".

Câu A2: (tệp tham chiếu: 07_forms_interactive.md/HTML5 Validation Attributes)

- Trường hợp 1: Lỗi valueMissing. Vì có thuộc tính required nhưng người dùng để trống, trình duyệt sẽ báo: "Please fill out this field" (Vui lòng điền vào trường này).

- Trường hợp 2: Lỗi typeMismatch. Vì type="email" yêu cầu định dạng phải có ký tự @ và tên miền, nhưng người dùng chỉ gõ "abc".

- Trường hợp 3: Lỗi rangeOverflow. Vì giá trị 15 đã vượt quá hạn mức tối đa cho phép là max="10".

- Trường hợp 4: Lỗi patternMismatch. Vì pattern="[0-9]{10}" yêu cầu phải nhập đúng 10 chữ số, trong khi "abc123" vừa chứa chữ vừa không đủ độ dài.

- Trường hợp 5: Lỗi tooShort. Vì thuộc tính minlength="8" yêu cầu tối thiểu 8 ký tự, nhưng người dùng mới chỉ nhập 3 ký tự ("123").

Câu A3: (tệp tham chiếu: 07_forms_interactive.md/Accessibility — Form cho mọi người)

1. Tại sao <label for="email"> quan trọng?

- Với Screen Reader: Nó tạo liên kết trực tiếp. Khi người dùng khiếm thị tab vào ô nhập, máy sẽ đọc tên nhãn (ví dụ: "Email"). Nếu không có for, máy chỉ đọc là "Ô trống", họ sẽ không biết nhập gì.
- Với người dùng chuột: Giúp bấm vào chữ thì con trỏ tự nhảy vào ô nhập (tăng diện tích bấm).

2. Khi nào dùng <fieldset> + <legend>?
Dùng khi cần nhóm các ô nhập liệu cùng chủ đề lại với nhau cho gọn và dễ hiểu.

3. aria-label dùng khi nào?
Dùng khi giao diện không có chữ trên màn hình nhưng vẫn muốn Screen Reader đọc được.

Câu A4: (tệp tham chiếu: tuan_1_html5/06_graphics_multimedia.md/Images — Responsive và tối ưu)

1. Thuộc tính loading="lazy" trên thẻ <img>
- Giải thích: Là kỹ thuật "tải chậm". Trình duyệt sẽ chỉ tải ảnh khi người dùng cuộn trang đến gần vị trí của ảnh đó, thay vì tải toàn bộ ảnh ngay khi vừa mở trang.
- Cải thiện:Tốc độ tải trang (Page Load Time): Giảm dung lượng dữ liệu phải tải ban đầu.
- Tiết kiệm băng thông: Đặc biệt hữu ích cho người dùng dùng 4G/5G.
- Khi nào KHÔNG nên dùng: Đối với các ảnh ở đầu trang (Above the fold) – những ảnh mà người dùng thấy ngay lập tức khi vừa mở web (như Banner chính, Logo). Dùng lazy load ở đây sẽ làm ảnh hiện ra chậm, gây khó chịu.

2. Thẻ <video> và các định dạng
- Tại sao dùng nhiều <source>: Vì mỗi trình duyệt (Chrome, Safari, Firefox) hỗ trợ các định dạng video khác nhau. Khi cung cấp nhiều <source>, trình duyệt sẽ tự chọn định dạng đầu tiên mà nó hỗ trợ để phát.
- 3 Format video web phổ biến:
+ MP4 (H.264): Phổ biến nhất, hỗ trợ trên mọi trình duyệt.
+ WebM: Dung lượng nhẹ, chất lượng cao, cực tốt cho web nhưng Safari đời cũ có thể không hỗ trợ.
+ Ogg: Thường dùng cho các trình duyệt mã nguồn mở.

3. Thuộc tính alt trên thẻ <img>
Tác dụng: Cung cấp văn bản thay thế nếu ảnh bị lỗi không hiển thị được, đồng thời giúp Trình đọc màn hình (Screen Reader) đọc cho người khiếm thị và giúp Google hiểu nội dung ảnh (SEO).

Câu A5: 

1. Phân tích sự khác biệt
- Cách 1 (<img> đứng độc lập): Chỉ là một thành phần hình ảnh đơn thuần trên trang web. Nó thường là một phần của dòng văn bản hoặc nội dung trang trí.
- Cách 2 (<figure> + <figcaption>): Là một đơn vị nội dung hoàn chỉnh, có ý nghĩa độc lập. Thẻ figcaption cung cấp chú thích trực quan cho người dùng, giúp liên kết chặt chẽ giữa hình ảnh và phần giải thích đi kèm.

2. 
- Dùng cách 1 khi hình ảnh chỉ đóng vai trò minh họa bổ trợ hoặc trang trí, không cần chú thích chữ bên dưới để người dùng hiểu bối cảnh.
- Dùng cách 2 khi hình ảnh là một phần nội dung quan trọng cần được mô tả rõ ràng, hoặc khi bạn muốn tách biệt hình ảnh đó ra khỏi luồng văn bản chính (như một thực thể độc lập có thể trích dẫn).


Câu C1:

- Lỗi 1: Dòng 2 — Input "Tên" không có <label for="...">, vi phạm accessibility.
Sửa: <label for="name">Tên:</label> <input type="text" id="name" name="name" required>

- Lỗi 2: Dòng 4 — Input Email không có nhãn (label) và thiếu thuộc tính name. Thuộc tính placeholder không thể thay thế cho label.
Sửa: <label for="email">Email:</label> <input type="email" id="email" name="email" required>

- Lỗi 3: Dòng 6 — Input Mật khẩu thiếu thuộc tính required và minlength để bảo mật tối thiểu.
Sửa: <label for="pw">Mật khẩu:</label> <input type="password" id="pw" name="password" minlength="8" required>

- Lỗi 4: Dòng 7 — Ô "Nhập lại mật khẩu" không có định danh rõ ràng để kiểm tra tính khớp nhau.
Sửa: <label for="re-pw">Nhập lại mật khẩu:</label> <input type="password" id="re-pw" name="re-password" required>

- Lỗi 5: Dòng 9 — Input Phone đang dùng type="text", không tối ưu bàn phím số trên di động.
Sửa: <label for="tel">Phone:</label> <input type="tel" id="tel" name="phone" pattern="[0-9]{10}" required>

- Lỗi 6: Dòng 11 — Thẻ <select> thiếu nhãn mô tả và các <option> thiếu thuộc tính value để gửi lên server.
Sửa: <label for="city">Thành phố:</label> <select id="city" name="city"><option value="hn">Hà Nội</option><option value="hcm">TP.HCM</option></select>

- Lỗi 7: Dòng 16 — Thiếu thẻ <input type="checkbox"> bên trong label. Người dùng không có chỗ để tích chọn.
Sửa: <label><input type="checkbox" name="terms" required> Tôi đồng ý điều khoản</label>

- Lỗi 8: Dòng 19 — Nút Submit nên dùng thẻ <button type="submit"> để dễ tùy chỉnh giao diện và linh hoạt hơn.
Sửa: <button type="submit">Gửi thông tin</button>

Câu C2:
1. Viết pattern regex cho CMND/CCCD và Số tài khoản:
- CMND/CCCD (Đúng 12 chữ số): pattern="[0-9]{12}"
- Số tài khoản (10 đến 15 chữ số): pattern="[0-9]{10,15}"

2. Giải thích: HTML5 validation đủ an toàn cho ứng dụng ngân hàng chưa? Tại sao?
- HTML5 validation không đủ an toàn cho ứng dụng ngân hàng
- Vì: 
+ Dễ bị vượt qua: Bất kỳ ai có kiến thức cơ bản về web đều có thể mở Developer Tools (F12) để xóa bỏ thuộc tính required, pattern hoặc thêm novalidate vào thẻ <form>. Khi đó, trình duyệt sẽ gửi dữ liệu đi mà không kiểm tra gì cả.
+ Chỉ kiểm tra định dạng, không kiểm tra thực thể: HTML5 chỉ biết chuỗi đó có đúng 12 số hay không, chứ không thể biết số CCCD đó có thật hay không, hoặc số tài khoản đó có đang bị khóa hay không.

3. 3 loại validation mà HTML5 KHÔNG THỂ làm được (phải dùng JavaScript) là: 
- So khớp hai trường (Matching Validation)
- Kiểm tra tính duy nhất (Uniqueness Check)
- Logic phụ thuộc (Dependent Validation)

4. 2 rủi ro bảo mật nếu chỉ validate trên Frontend mà không validate Backend là:
- Dữ liệu bị giả mạo: Kẻ tấn công không cần dùng trình duyệt của bạn để gửi form. Họ có thể dùng các công cụ như Postman hoặc cURL để gửi dữ liệu trực tiếp đến Server.
- Tấn công tiêm mã độc: Các thuộc tính như pattern hay required của HTML5 rất dễ bị xóa bỏ thông qua Inspect Element (F12).