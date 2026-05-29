Câu A1: Tài liệu tham khảo: tuan_4_javascript_basics/02_getting_started.md/ "var, let, const — Ba Anh Em Nhưng Tính Cách Khác"
// Đoạn 1
console.log(x);
var x = 5;
Output: undefined

// Đoạn 2
console.log(y);
let y = 10;
Output: Lỗi ReferenceError: Cannot access 'y' before initialization

// Đoạn 3
const z = 15;
z = 20;
console.log(z);
Output: TypeError: Assignment to constant variable

// Đoạn 4
const arr = [1, 2, 3];
arr.push(4);
console.log(arr);
Output: [1, 2, 3, 4]

// Đoạn 5
let a = 1;
{
    let a = 2;
    console.log("Trong block:", a);
}
console.log("Ngoài block:", a);
Output: Trong block: 2
        Ngoài block: 1


1. Đoạn 4: const arr vẫn thêm được phần tử
-  const chỉ khóa địa chỉ của mảng, chứ không khóa nội dung bên trong mảng
2. Đoạn 1 vs Đoạn 2: var ra undefined còn let bị báo lỗi
- Với var: JavaScript tự động "đưa biến lên đầu" và cho nó một giá trị tạm thời là undefined.Vì vậy code vẫn chạy được mà không sập
- Với let: JavaScript cũng biết biến đó tồn tại,nhưng nó ra lệnh cấm dùng cho đến khi chạy tới đúng dòng khai báo.Bạn gọi nó sớm hơn nghĩa là vi phạm quy tắc nên chương trình sẽ báo lỗi ngay lập tức để bảo vệ code của bạn

Câu A2: Tài liệu tham khảo: tuan_4_javascript_basics/02_getting_started.md/  Operators — Toán tử

console.log(typeof null);              // object
console.log(typeof undefined);         // undefined
console.log(typeof NaN);              // number
console.log("5" + 3);                 // 53
console.log("5" - 3);                 // 2
console.log("5" * "3");              // 15
console.log(true + true);            // 2
console.log([] + []);                // Chuỗi rỗng
console.log([] + {});                // [object Object]
console.log({} + []);                // [object Object]

- Giải thích tại sao "5" + 3 và "5" - 3 cho kết quả khác nhau:
+ Toán tử + có hai chức năng: Nó vừa là phép cộng toán học, vừa là phép nối chuỗi. Trong cơ chế của JavaScript,khi có sự xung đột giữa số và chuỗi, phép nối chuỗi luôn được ưu tiên.Chỉ cần một vế là chuỗi,vế còn lại sẽ bị kéo theo thành chuỗi
+ Toán tử - chỉ có một chức năng: Nó chỉ biết làm toán trừ.Vì không có khái niệm "nối hay trừ chuỗi chữ", JavaScript không có lựa chọn nào khác ngoài việc ép tất cả các vế về kiểu số để thực hiện phép tính

Câu A3:

console.log(5 == "5");                // true
console.log(5 === "5");               // false
console.log(null == undefined);       // true
console.log(null === undefined);      // false
console.log(NaN == NaN);             // false
console.log(0 == false);             // true
console.log(0 === false);            // false
console.log("" == false);            // true

- Luôn luôn dùng === vì:
+ An toàn: === bắt buộc trùng cả kiểu dữ liệu và giá trị. Dùng == dễ bị lỗi ngầm do cơ chế tự động ép kiểu cực kỳ tai hại của JavaScript 
+ Tốc độ: === chạy nhanh hơn vì JavaScript không phải tốn thời gian tự quy đổi kiểu dữ liệu giữa 2 vế
+ Rõ ràng: Code dễ đọc, tường minh, không cần phải đoán già đoán non xem biến này sẽ bị ép về kiểu gì
- Chỉ dùng == khi muốn check nhanh một biến có phải là null hoặc undefined hay không

Câu A4:
- Tất cả giá trị Falsy trong JavaScript:
+ 6 giá trị FALSY (coi như false): false, 0, "", null, undefined, NaN
+ TẤT CẢ còn lại = TRUTHY (coi như true): true, 42, "hello", [], {}, -1, "0", "false"

if ("0") console.log("A");           // có in
if ("") console.log("B");            // không in    
if ([]) console.log("C");            // có in
if ({}) console.log("D");            // có in
if (null) console.log("E");          // không in
if (0) console.log("F");             // không in
if (-1) console.log("G");            // có in
if (" ") console.log("H");           // có in

Câu A5:
- Cách 1: var greeting = `Xin chào ${name}! Bạn ${age} tuổi.`;
- Cách 2: var url = `https://api.example.com/users/${userId}/orders?page=${page}`;
- Cách 3: 
var html = `
<div class="card">
    <h2>${title}</h2>
    <p>${description}</p>
    <span>Giá: ${price}đ</span>
</div>
`;

Câu C1:
- Lỗi 1: Gộp dòng code và thiếu dấu xuống dòng 
+ Vị trí: return giaSauGiam}// Testconst gia = tinhGiaGiamGia("100000", 20)console.log("Giá sau giảm: " + gia + "đ")const gia2 = tinhGiaGiamGia(50000, 110)console.log("Giá: " + gia2)for (var i = 0; i < 5; i++) {
+ Giải thích: Các câu lệnh khai báo const, console.log và vòng lặp for bị dính liền trên cùng một dòng với đóng ngoặc nhọn } và chú thích // Test. Điều này khiến trình biên dịch hiểu sai cú pháp và gây lỗi
+ Cách sửa: Tách các câu lệnh ra các dòng riêng biệt cho rõ ràng

- Lỗi 2: Sử dụng phép gán = thay vì phép so sánh == hoặc === 
+ Vị trí: if (giaSauGiam = 0) {
+ Giải thích: Trong câu lệnh if, ta đang dùng một dấu bằng (=), đây là phép gán chứ không phải phép so sánh. Đoạn code này sẽ gán giá trị 0 cho biến giaSauGiam, và điều kiện if (0) luôn trả về false (vì 0 là một giá trị falsy). Do đó, câu lệnh console.log("Sản phẩm miễn phí!") sẽ không bao giờ được chạy

+ Cách sửa: Đổi thành giaSauGiam === 0

- Lỗi 3: Truyền sai kiểu dữ liệu - Chuỗi số thay vì Số 
+ Vị trí: const gia = tinhGiaGiamGia("100000", 20)
+ Giải thích: Ta đang truyền vào một chuỗi "100000" (String) thay vì một số (Number). Dù JavaScript có cơ chế tự động ép kiểu khi thực hiện phép nhân (giaBan * phanTramGiam), việc truyền sai kiểu dữ liệu rất dễ gây lỗi logic ở các phép tính khác 
+ Cách sửa: Truyền vào số 100000

- Lỗi 4: Sử dụng var thay vì let hoặc const bên trong hàm 
+ Vị trí: var giamGia = giaBan * phanTramGiam / 100
+ Giải thích: Từ khóa var có phạm vi hàm và dễ bị đưa lên đầu hàm, có thể gây ra những tác dụng phụ không mong muốn trong các dự án lớn
+ Cách sửa: Thay var bằng let hoặc const 

- Lỗi 5: Thiếu dấu chấm phẩy ; ở một số dòng (Style/Semicolon Standard)
+ Vị trí: return "Phần trăm giảm không hợp lệ", var giamGia = ..., return giaSauGiam}
+ Giải thích: Mặc dù JavaScript có cơ chế tự động chèn dấu chấm phẩy, việc thiếu dấu chấm phẩy ở cuối câu lệnh đôi khi gây ra những lỗi không báo trước khi gộp file 
+ Cách sửa: Thêm ";" vào cuối các câu lệnh

- Lỗi "ẩn" với var trong vòng lặp for
+ Vị trí: for (var i = 0; i < 5; i++) { setTimeout(...) }
+ Hiện tượng xảy ra: Khi chạy đoạn code gốc, kết quả in ra màn hình sẽ là 5 dòng Item 5 thay vì từ Item 0 đến Item 4
+ Giải thích: 
* var có function-scope, nó không bị giới hạn trong khối lệnh {} của vòng lặp for. Do đó, chỉ có duy nhất một biến i được tạo ra và dùng chung cho toàn bộ các lần lặp
* Hàm setTimeout là một hàm bất đồng bộ. Nó sẽ đăng ký hàm hiển thị log và đợi sau 1000ms (1 giây) mới chạy. Trong lúc nó đợi, vòng lặp for đã chạy xong từ lâu và giá trị cuối cùng của biến i lúc này đã tăng lên thành 5
* Sau 1 giây, các hàm hiển thị log đồng loạt thực thi, chúng nhìn vào biến i chung đó và đều in ra Item 5
+ Cách sửa bằng let: Khi thay var bằng let, let có block-scope (phạm vi khối lệnh). Mỗi một lượt lặp trong vòng for, JavaScript sẽ tạo ra một biến i hoàn toàn mới và "đóng băng" (closure) giá trị của i tại lượt lặp đó cho hàm setTimeout sử dụng. Kết quả sẽ in ra đúng từ Item 0 đến Item 4