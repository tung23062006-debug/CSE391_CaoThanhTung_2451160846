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

Câu A3: 
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 1. Lấy các số chẵn
const soChan = nums.filter(n => n % 2 === 0);

// 2. Nhân mỗi số với 3
const nhanBa = nums.map(n => n * 3);

// 3. Tính tổng tất cả
const tong = nums.reduce((acc, cur) => acc + cur, 0);

// 4. Tìm số đầu tiên > 7
const dauTienLonHon7 = nums.find(n => n > 7);

// 5. Kiểm tra CÓ số > 10 không
const coSoLonHon10 = nums.some(n => n > 10);

// 6. Kiểm tra TẤT CẢ đều > 0
const tatCaLonHon0 = nums.every(n => n > 0);

// 7. Tạo mảng "Số X là [chẵn/lẻ]"
const mảngChuoi = nums.map(n => `Số ${n} là ${n % 2 === 0 ? 'chẵn' : 'lẻ'}`);

// 8. Đảo ngược mảng (không mutate gốc )
const daoNguoc = [...nums].reverse();


Câu A4:

const product = {
    name: "iPhone 16",
    price: 25990000,
    specs: { ram: 8, storage: 256, color: "Titan" }
};

// === DESTRUCTURING ===
const { name, price, specs: { ram, color } } = product;

console.log(name, price, ram, color);  
// ➜ Output: "iPhone 16" 25990000 8 "Titan"
// (Trích xuất thành công các thuộc tính, kể cả thuộc tính lồng nhau như ram, color)

console.log(specs);                     
// ➜ Output: ReferenceError: specs is not defined
// (GIẢI THÍCH: Khi dùng cú pháp `specs: { ram, color }`, bạn chỉ đang tạo ra 2 biến mới là `ram` và `color`. Bản thân chữ `specs` chỉ đóng vai trò là "đường dẫn" định hướng chứ KHÔNG được tạo ra như một biến độc lập)


// === SPREAD ===
const updated = { ...product, price: 23990000, sale: true };

console.log(updated.price);            // ➜ Output: 23990000 (Giá mới ghi đè giá cũ)
console.log(updated.sale);             // ➜ Output: true (Thuộc tính mới được thêm vào)
console.log(product.price);            // ➜ Output: 25990000 
// (Giải thích: Gốc KHÔNG đổi.Toán tử spread tạo ra một object hoàn toàn mới độc lập ở tầng bề mặt)


// === SPREAD GOTCHA ===
const copy = { ...product };
copy.specs.ram = 16;

console.log(product.specs.ram);        
// ➜ Output: 16 
// (TẠI SAO? Vì toán tử spread `...` chỉ thực hiện sao chép nông - Shallow Copy.
// Nó sao chép các giá trị nguyên bản ở tầng ngoài cùng, nhưng với object lồng bên trong là `specs`, 
// nó chỉ sao chép "địa chỉ vùng nhớ" (reference) chứ không tạo ra object specs mới 
// Do đó, cả `product.specs` và `copy.specs` đều đang trỏ chung vào một chỗ,sửa một bên là bên kia đổi theo)