//  Tạo 1 số ngẫu nhiên từ 1 đến 100
const targetNumber = Math.floor(Math.random()*100) + 1;

// Khởi tạo các biến quản lý trạng thái trò chơi
let attempts = 0;              // Số lần đoán hiện tại
const maxAttempts = 7;         // Giới hạn lượt đoán
const guessedNumbers = [];     // Mảng lưu lại các số user đã đoán để check trùng
let isWin = false;             // Trạng thái thắng/thua

// Thông báo 
alert(`Chào mừng bạn đến với trò chơi Đoán Số!\nMáy đã chọn ngẫu nhiên 1 số từ 1 đến 100. Bạn có tối đa ${maxAttempts} lượt đoán. Chúc may mắn!`);

while (attempts < maxAttempts) {
    let remaining = maxAttempts - attempts;
    let input = prompt(`[Lượt ${attempts + 1}/${maxAttempts} - Còn ${remaining} lượt]\nMời bạn nhập một số từ 1 đến 100:`);

    //  User nhấn "Cancel" 
    if (input === null) {
        alert("Bạn đã thoát trò chơi. Hẹn gặp lại nhé!");
        break;
    }

    input = input.trim();
    let guess = Number(input);

    if (input === "" || Number.isNaN(guess) || guess < 1 || guess > 100) {
        alert("⚠️ Lỗi: Vui lòng chỉ nhập một số nguyên hợp lệ trong khoảng từ 1 đến 100!");
        continue; // Bỏ qua đoạn code phía dưới, yêu cầu nhập lại ở lượt này (không mất lượt)
    }

    let isDuplicated = false;
    for (let i = 0; i < guessedNumbers.length; i++) {
        if (guessedNumbers[i] === guess) {
            isDuplicated = true;
            break;
        }
    }

    if (isDuplicated) {
        alert(`Bạn đã đoán số ${guess} này rồi! Hãy chọn số khác`);
        continue;
    }

    guessedNumbers.push(guess);
    attempts++;

    if (guess === targetNumber) {
        alert(` Đúng rồi!\nChúc mừng bạn đoán đúng số ${targetNumber} sau ${attempts} lần!`);
        isWin = true;
        break; 
    } else if (guess > targetNumber) {
        alert("Thấp hơn! Số bạn chọn hơi cao rồi");
    } else {
        alert("Cao hơn! Số bạn chọn hơi thấp rồi");
    }
}

if (!isWin && attempts === maxAttempts) {
    alert(`Bạn đã hết lượt đoán mất rồi!\nKết quả đúng của máy là: ${targetNumber}. Chúc bạn may mắn hơn ở lần sau!`);
}