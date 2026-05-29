Câu A1:
1. DOM tree:
                  Document
                     |
               <div id="app">
                 /        \
         <header>          <main>
          /    \           /    \
       <h1>   <nav>  <form>      <ul id="todoList">
        |     / | \   #todoForm    /          \
     Text  <a> <a> <a>   /   \   <li>         <li>
           (All) (Active) (Completed) .todo-item .todo-item.completed
                         /     \     |            |
                  <input>   <button> Text        Text
                 #todoInput  (Add) (Learn HTML) (Learn CSS)

2. Các câu lệnh querySelector tương ứng:
// 1. Chọn thẻ <h1>
const heading = document.querySelector("h1");

// 2. Chọn input trong form 
const todoInput = document.querySelector("#todoForm input");
// Hoặc ngắn gọn qua ID: document.querySelector("#todoInput");

// 3. Chọn tất cả .todo-item
const allTodoItems = document.querySelectorAll(".todo-item");

// 4. Chọn link đang active
const activeLink = document.querySelector("nav a.active");

// 5. Chọn <li> đầu tiên trong #todoList
const firstTodo = document.querySelector("#todoList li");

// 6. Chọn tất cả <a> bên trong <nav>
const navLinks = document.querySelectorAll("nav a");

Câu A2: 
1. So sánh 
- innerText: Chỉ xử lý chữ thuần túy (Text). Khi bạn ghi vào, nó sẽ biến mọi ký tự thành chữ thô. Trình duyệt không biên dịch nó
- innerHTML: Xử lý mã HTML. Khi bạn ghi vào, trình duyệt sẽ phân tích chuỗi đó và dựng (render) thành các thẻ HTML thực sự
- Dùng innerText: Khi hiển thị dữ liệu dạng chữ thông thường (như tên người dùng, tin nhắn, giá tiền...), rất an toàn
- Dùng innerHTML: Khi bạn chủ động muốn tự chèn một đoạn code cấu trúc HTML từ phía lập trình viên (ví dụ: box.innerHTML = "<ul><li>Mục mới</li></ul>")
2. Tại sao innerHTML gây lỗ hổng XSS?
- innerHTML tin tưởng tuyệt đối vào chuỗi dữ liệu được truyền vào.Nếu dữ liệu đó đến từ người dùng (User Input) và có chứa mã độc (như các thẻ <script> hoặc thuộc tính bắt sự kiện <img onerror="...">), trình duyệt vẫn sẽ biên dịch và tự động thực thi đoạn mã JavaScript độc hại đó. Đây chính là lỗ hổng XSS (Cross-Site Scripting)
3. Code minh họa lỗi và Cách sửa
// Giả sử user nhập vào input: <img src=x onerror="alert('Hacked!')">
const userInput = document.querySelector("#search").value;

// Nguy hiểm (Bị lỗi XSS): Trình duyệt render thẻ ảnh lỗi và kích hoạt alert()
document.querySelector("#result").innerHTML = userInput;  

// ==========================================
// Cách sửa đúng (Chọn 1 trong 2 cách dưới đây)
// ==========================================

// CÁCH 1: Đổi sang dùng innerText (Khuyên dùng - Mã độc biến thành chữ thô vô hại)
document.querySelector("#result").innerText = userInput;

// CÁCH 2: Nếu bắt buộc phải nhận HTML, hãy lọc sạch bằng thư viện DOMPurify trước khi chèn
// document.querySelector("#result").innerHTML = DOMPurify.sanitize(userInput);