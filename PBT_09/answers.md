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

Câu A3: 
1. Kết quả dự đoán (Ngắn gọn)
- Trường hợp 1 (Mặc định - Đóng comment): 
Khi click vào #btn, sự kiện sẽ nổi bọt từ phần tử con trong cùng lên các phần tử cha bên ngoài

BUTTON
INNER
OUTER

- Trường hợp 2 (Nếu bỏ comment e.stopPropagation();): 
Hàm này sẽ chặn đứng hành vi nổi bọt, không cho sự kiện lan truyền lên các phần tử cha nữa

BUTTON

Câu C1:
- Liệt kê 7 lỗi: 
1. Lỗi gộp dòng (Cú pháp): Các dòng code khai báo ban đầu bị dính liền trên một dòng,gây lỗi biên dịch
2. Sai tên sự kiện (#decrementBtn): Dùng "onclick" trong addEventListener.Phải sửa thành "click"
3. Gán giá trị cho biến hằng (#resetBtn): countDisplay được khai báo bằng const nhưng lại bị gán trực tiếp (countDisplay = count). Phải sửa thành countDisplay.textContent = count
4. Xóa innerHTML sai kiểu (#resetBtn): Gán historyList.innerHTML = null. Nên dùng chuỗi rỗng ""
5. Gọi hàm thiếu dấu ngoặc (#clearHistory): Dùng item.remove; mà không có cặp ngoặc tròn. Phải sửa thành item.remove();
6. Sai kiểu dữ liệu khi Load từ localStorage: localStorage.getItem("count") trả về một chuỗi (String). Khi load lên phải chuyển về số  bằng Number() hoặc parseInt(), nếu không khi bấm tăng số nó sẽ bị nối chuỗi
7. Lỗi Logic / Bảo mật XSS khi tải History: Khi lưu historyList.innerHTML vào localStorage,lúc load lại bạn chưa gán ngược nó vào historyList.innerHTML,đồng thời các sự kiện click để xóa từng thẻ li cũ sẽ bị mất hoàn toàn 

Sửa lỗi:
const countDisplay = document.querySelector(".count");
const historyList = document.getElementById("history");
let count = 0;

document.querySelector("#incrementBtn").addEventListener("click", function() {
    count++;
    countDisplay.textContent = count;
    
    // Lưu lịch sử
    const li = document.createElement("li");
    li.textContent = "Count changed to " + count;
    historyList.append(li);
});

document.querySelector("#decrementBtn").addEventListener("click", function() {
    count--;
    countDisplay.textContent = count;
});

document.querySelector("#resetBtn").addEventListener("click", () => {
    count = 0;
    countDisplay.textContent = count; // Sửa lỗi gán trực tiếp vào biến const
    historyList.innerHTML = "";       // Sửa null thành chuỗi rỗng
});

historyList.addEventListener("click", function(e) {
    if (e.target && e.target.nodeName === "LI") {
        e.target.remove();
    }
});

document.querySelector("#clearHistory").addEventListener("click", () => {
    const items = historyList.querySelectorAll("li");
    items.forEach(item => {
        item.remove(); // Sửa thiếu dấu ngoặc ()
    });
});

window.addEventListener("beforeunload", () => {
    localStorage.setItem("count", count);
    localStorage.setItem("history", historyList.innerHTML);
});

window.addEventListener("load", () => {
    const savedCount = localStorage.getItem("count");
    if (savedCount !== null) {
        count = Number(savedCount); // Sửa lỗi ép kiểu dữ liệu từ String sang Number
        countDisplay.textContent = count;
    }
    
    const savedHistory = localStorage.getItem("history");
    if (savedHistory !== null) {
        historyList.innerHTML = savedHistory; // Khôi phục lại danh sách hiển thị
    }
});

Câu C2: 
1.  
- Gán 1000 sự kiện riêng lẻ = XẤU: Trình duyệt phải tạo 1000 hàm chạy ngầm trong RAM $\rightarrow$ Nặng máy, ngốn bộ nhớ, giật lag
- Event Delegation (Ủy quyền sự kiện): Chỉ gán 1 sự kiện duy nhất lên thẻ CHA. Khi click vào con, sự kiện tự "nổi bọt" (Event Bubbling) lên cha.Cha dùng e.target để biết đứa con nào vừa bị click
- DocumentFragment: Như một cái "khay chứa tạm" trong bộ nhớ (nằm ngoài giao diện DOM)Nhét 1000 món vào khay rồi đổ cả khay vào DOM -> Trình duyệt chỉ cần tính toán lại giao diện (Reflow) 1 lần thay vì 1000 lần
2. Code Refactor: 
for (let i = 0; i < 1000; i++) {
    const div = document.createElement("div");
    div.textContent = `Item ${i}`;
    div.className = "item"; // Đánh dấu class để nhận diện
    
    fragment.appendChild(div); // Nhét vào khay tạm
}

// 2. Đổ cả khay vào DOM -> Chỉ Reflow đúng 1 lần duy nhất!
document.body.appendChild(fragment);

// 3. Event Delegation: Gán 1 sự kiện duy nhất lên thẻ CHA (body)
document.body.addEventListener("click", (e) => {
    // Kiểm tra xem phần tử bị click có phải là item không
    if (e.target && e.target.classList.contains("item")) {
        console.log("Đã click:", e.target.textContent);
    }
});