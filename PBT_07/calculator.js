function calculate(num1, operator, num2) {
    // Kiểm tra nếu input không phải là số hợp lệ 
    if (typeof num1 !== "number" || typeof num2 !== "number" || Number.isNaN(num1) || Number.isNaN(num2)) {
        return "Lỗi: Input không phải số";
    }

    // Kiểm tra lỗi chia hoặc chia lấy dư cho số 0
    if ((operator === "/" || operator === "%") && num2 === 0) {
        return "Lỗi: Không thể chia cho 0";
    }

    //  Thực hiện tính toán dựa trên operator
    switch (operator) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            return num1 / num2;
        case "%":
            return num1 % num2;
        case "**":
            return num1 ** num2;
        default:
            return `Lỗi: Operator '${operator}' không hợp lệ`;
    }
}

// test
console.log(calculate(10, "+", 5));    // 15
console.log(calculate(10, "/", 0));    // Lỗi: Không thể chia cho 0
console.log(calculate(10, "^", 5));    // Lỗi: Operator '^' không hợp lệ
console.log(calculate("abc", "+", 5)); // Lỗi: Input không phải số
console.log(calculate(2, "**", 10));   // 1024 