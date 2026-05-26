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
