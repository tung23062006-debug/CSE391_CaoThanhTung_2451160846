Câu A1: 
- 3 cách có khác nhau.Chỉ có Function Declaration là dùng được trước khi khai báo.Hai cách còn lại sẽ bị Lỗi
- Ví dụ code để so sánh
1. Cách chạy ĐƯỢC (Function Declaration)

tinhThue(15000000); // CHẠY ĐƯỢC (Do hàm được tự động nhấc lên đầu file)
function tinhThue(luong) { ... }

2. Cách bị LỖI (Function Expression hoặc Arrow Function)

tinhThue(15000000); // ❌ LỖI NGAY (Cannot access 'tinhThue' before initialization)
const tinhThue = (luong) => { ... }; 

=> Khai báo bằng function truyền thống thì gọi ở đâu cũng được.Khai báo bằng const / let thì bắt buộc phải viết hàm ở trên, gọi hàm ở dưới

Câu A2: 
// Đoạn 1:
function counter() {
    let count = 0;
    return {
        increment: () => ++count,
        decrement: () => --count,
        getCount: () => count
    };
}
const c = counter();
console.log(c.increment());  // 1  (0 tăng 1)
console.log(c.increment());  // 2  (1 tăng 1)
console.log(c.increment());  // 3  (2 tăng 1)
console.log(c.decrement());  // 2  (3 giảm 1)
console.log(c.getCount());   // 2  (Giá trị hiện tại là 2)

// Đoạn 2:
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log("var:", i), 100);
}
for (let j = 0; j < 3; j++) {
    setTimeout(() => console.log("let:", j), 200);
}
// Output sau 200ms: 
var: 3
var: 3
var: 3
let: 0
let: 1
let: 2

*Giải thích: 
- Với vòng lặp var (In ra ba số 3):
+ Phạm vi (Scope): Từ khóa var không có phạm vi khối (block scope), nó có phạm vi hàm hoặc toàn cục (global scope). Do đó, trong suốt vòng lặp, chỉ có duy nhất một biến i được tạo ra và dùng chung cho cả 3 lần lặp
+ Bất đồng bộ (setTimeout): Hàm setTimeout đẩy các lệnh console.log vào hàng đợi (Callback Queue) và hẹn giờ chạy sau 100ms
Trong lúc 100ms chưa trôi qua, vòng lặp for đồng bộ đã chạy xong hoàn toàn. Biến i chung lúc này đã tăng lên thành 3 (điều kiện dừng i < 3 sai)
Khi hết 100ms, 3 hàm console.log đồng loạt được gọi, tụi nó cùng nhìn vào biến i chung (đang bằng 3) nên in ra: var: 3, var: 3, var: 3

- Với vòng lặp let (In ra 0, 1, 2):
+ Phạm vi (Scope): Từ khóa let có phạm vi khối lệnh { }. Nghĩa là ở mỗi lượt lặp, JavaScript lại tạo ra một biến j hoàn toàn mới nằm ở một vùng nhớ riêng biệt
+ Cơ chế Closure: Khi setTimeout được đăng ký (chạy sau 200ms), hàm mũi tên bên trong nó sẽ "đóng băng" và giữ chặt lấy giá trị của biến j tại đúng lượt lặp đó (Lần 1 giữ j = 0, lần 2 giữ j = 1, lần 3 giữ j = 2)
Dù vòng lặp có chạy xong và biến j ở vòng lặp kết thúc, các bản sao biến j cũ vẫn được lưu giữ an toàn cho hàm setTimeout
Sau 200ms, khi gọi lệnh in, mỗi hàm sẽ tự tìm về biến j riêng của lượt lặp đó và in ra kết quả tuần tự: let: 0, let: 1, let: 2