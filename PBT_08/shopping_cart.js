function createCart() {
    let items = [];
    let discountCode = "";

    const discounts = {
        "SALE10": (total) => total * 0.1,
        "SALE20": (total) => total * 0.2,
        "FREESHIP": () => 30000
    };

    return {
        // Thêm sản phẩm (nếu đã có → tăng quantity)
        addItem(product, quantity = 1) {
            const existingItem = items.find(item => item.id === product.id);
            if (existingItem) {
                existingItem.quantity += quantity;
            } else {
                items.push({ ...product, quantity });
            }
        },

        // Xóa sản phẩm theo id
        removeItem(productId) {
            items = items.filter(item => item.id !== productId);
        },

        //  Cập nhật số lượng
        updateQuantity(productId, newQuantity) {
            if (newQuantity <= 0) {
                this.removeItem(productId);
                return;
            }
            const item = items.find(item => item.id === productId);
            if (item) {
                item.quantity = newQuantity;
            }
        },

        //  Tính tổng tiền (sau khi đã trừ discount)
        getTotal() {
            const preDiscountTotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            const discountFn = discounts[discountCode];
            const discountAmount = discountFn ? discountFn(preDiscountTotal) : 0;
            return Math.max(0, preDiscountTotal - discountAmount);
        },

        //  Áp dụng mã giảm giá
        applyDiscount(code) {
            if (discounts.hasOwnProperty(code)) {
                discountCode = code;
                console.log(` Áp dụng mã [${code}] thành công!`);
            } else {
                console.log(` Mã giảm giá [${code}] không tồn tại.`);
            }
        },

        // Lấy tổng số sản phẩm 
        getItemCount() {
            return items.reduce((sum, item) => sum + item.quantity, 0);
        },

        //  Xóa toàn bộ giỏ
        clearCart() {
            items = [];
            discountCode = "";
        },

        //In giỏ hàng dạng bảng 
        printCart() {
            if (items.length === 0) {
                console.log("🛒 Giỏ hàng đang trống.");
                return;
            }

            const formatVND = (num) => num.toLocaleString('vi-VN');

            console.log("┌────────────────────────────────────────────────────────┐");
            console.log("│ # │ Sản phẩm           │ SL │ Đơn giá      │ Tổng         │");
            console.log("├────────────────────────────────────────────────────────┤");

            items.forEach((item, index) => {
                const stt = String(index + 1).padEnd(2, ' ');
                const name = item.name.padEnd(18, ' ');
                const qty = String(item.quantity).padStart(2, ' ');
                const price = formatVND(item.price).padStart(12, ' ');
                const total = formatVND(item.price * item.quantity).padStart(12, ' ');

                console.log(`│ ${stt}│ ${name} │ ${qty} │ ${price} │ ${total} │`);
            });

            console.log("├────────────────────────────────────────────────────────┤");

            if (discountCode) {
                const rawTotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
                const discountText = `Mã [${discountCode}] giảm: -${formatVND(discounts[discountCode](rawTotal))}đ`;
                console.log(`│ ${discountText.padEnd(54, ' ')} │`);
                console.log("├────────────────────────────────────────────────────────┤");
            }

            const finalTotalStr = formatVND(this.getTotal()) + "đ";
            console.log(`│ Tổng thanh toán:${finalTotalStr.padStart(37, ' ')} │`);
            console.log("└────────────────────────────────────────────────────────┘");
        }
    };
}


const cart = createCart();

cart.addItem({ id: 1, name: "iPhone 16", price: 25990000 }, 1);
cart.addItem({ id: 3, name: "AirPods Pro", price: 6990000 }, 2);
cart.addItem({ id: 1, name: "iPhone 16", price: 25990000 }, 1); 

cart.printCart();


cart.applyDiscount("SALE10");
cart.printCart();

console.log("Số SP hiện tại:", cart.getItemCount()); 

cart.removeItem(3);
console.log("Số SP sau khi xóa AirPods Pro:", cart.getItemCount()); 