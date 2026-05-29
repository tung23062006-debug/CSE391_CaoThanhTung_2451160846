function inHoaDon(danhSachMon, ngayTrongTuan, coTip = true) {
    let tongCong = 0;
    danhSachMon.forEach(mon => {
        tongCong += mon.gia * mon.soLuong;
    });

    let phanTramGiam = 0;
    if (tongCong > 1000000) {
        phanTramGiam = 15;
    } else if (tongCong > 500000) {
        phanTramGiam = 10;
    }

    if (ngayTrongTuan.toLowerCase() === "wednesday") {
        phanTramGiam += 5;
    }

    let tienGiamGia = (tongCong * phanTramGiam) / 100;
    let thanhTienSauGiam = tongCong - tienGiamGia;

    let vat = Math.round(thanhTienSauGiam * 0.08); 
    let tip = coTip ? Math.round(thanhTienSauGiam * 0.05) : 0; 

    let tongThanhToan = thanhTienSauGiam + vat + tip;

    const formatK = (so) => (so / 1000) + "k";
    const formatVND = (so) => so.toLocaleString('vi-VN') + "đ";

    console.log("╔══════════════════════════════════════╗");
    console.log("║           HÓA ĐƠN NHÀ HÀNG           ║");
    console.log("╠══════════════════════════════════════╣");

    danhSachMon.forEach((mon, index) => {
        let stt = index + 1;
        let tenMonFormat = `${stt}. ${mon.ten}`.padEnd(15, ' ');
        let slFormat = `x${mon.soLuong}`.padEnd(5, ' ');
        let giaFormat = `@${formatK(mon.gia)}`.padEnd(6, ' ');
        let tongMonFormat = `= ${formatK(mon.gia * mon.soLuong)}`.padEnd(7, ' ');

        console.log(`║ ${tenMonFormat} ${slFormat} ${giaFormat} ${tongMonFormat} ║`);
    });

    console.log("╠══════════════════════════════════════╣");
    console.log(`║ Tổng cộng:              ${formatVND(tongCong).padStart(12, ' ')} ║`);
    console.log(`║ Giảm giá (${phanTramGiam}%):           ${formatVND(tienGiamGia).padStart(12, ' ')} ║`);
    console.log(`║ VAT (8%):               ${formatVND(vat).padStart(12, ' ')} ║`);
    console.log(`║ Tip (${coTip ? "5%" : "0%"}):               ${formatVND(tip).padStart(12, ' ')} ║`);
    console.log("╠══════════════════════════════════════╣");
    console.log(`║ THANH TOÁN:             ${formatVND(tongThanhToan).padStart(12, ' ')} ║`);
    console.log("╚══════════════════════════════════════╝");
}

const gioHang = [
    { ten: "Phở bò", gia: 65000, soLuong: 2 },
    { ten: "Trà đá", gia: 5000, soLuong: 3 },
    { ten: "Bún chả", gia: 55000, soLuong: 1 }
];

inHoaDon(gioHang, "Wednesday", true);