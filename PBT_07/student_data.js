const students = [
    { name: "An", math: 8, physics: 7, cs: 9, gender: "M" },
    { name: "Bình", math: 6, physics: 9, cs: 7, gender: "F" },
    { name: "Chi", math: 9, physics: 6, cs: 8, gender: "F" },
    { name: "Dũng", math: 5, physics: 5, cs: 6, gender: "M" },
    { name: "Em", math: 10, physics: 8, cs: 9, gender: "F" },
    { name: "Phong", math: 3, physics: 4, cs: 5, gender: "M" },
    { name: "Giang", math: 7, physics: 7, cs: 7, gender: "F" },
    { name: "Huy", math: 4, physics: 6, cs: 3, gender: "M" },
];

let countGioi = 0, countKha = 0, countTb = 0, countYeu = 0;

let maxAvg = -1, minAvg = 11;
let bestStudent = "", worstStudent = "";

let totalMath = 0, totalPhysics = 0, totalCs = 0;

let totalAvgMale = 0, countMale = 0;
let totalAvgFemale = 0, countFemale = 0;

console.log("| STT | Tên    | TB   | Xếp loại    |");
console.log("|-----|--------|------|-------------|");

for (let i = 0; i < students.length; i++) {
    let sv = students[i];

    let avg = sv.math * 0.4 + sv.physics * 0.3 + sv.cs * 0.3;
    let avgRounded = Math.round(avg * 10) / 10; 

    let xepLoai = "";
    if (avgRounded >= 8.0) {
        xepLoai = "Giỏi";
        countGioi++;
    } else if (avgRounded >= 6.5) {
        xepLoai = "Khá";
        countKha++;
    } else if (avgRounded >= 5.0) {
        xepLoai = "Trung bình";
        countTb++;
    } else {
        xepLoai = "Yếu";
        countYeu++;
    }

    let stt = (i + 1).toString().padEnd(3);
    let ten = sv.name.padEnd(6);
    let diemStr = avgRounded.toFixed(1).padEnd(4);
    console.log(`| ${stt} | ${ten} | ${diemStr} | ${xepLoai.padEnd(11)} |`);

    if (avgRounded > maxAvg) {
        maxAvg = avgRounded;
        bestStudent = sv.name;
    }
    if (avgRounded < minAvg) {
        minAvg = avgRounded;
        worstStudent = sv.name;
    }

    totalMath += sv.math;
    totalPhysics += sv.physics;
    totalCs += sv.cs;

    if (sv.gender === "M") {
        totalAvgMale += avgRounded;
        countMale++;
    } else if (sv.gender === "F") {
        totalAvgFemale += avgRounded;
        countFemale++;
    }
}

console.log("-------------------------------------\n");

// --- IN KẾT QUẢ THỐNG KÊ ---

console.log("SỐ LƯỢNG SINH VIÊN THEO XẾP LOẠI:");
console.log(`- Giỏi: ${countGioi} SV`);
console.log(`- Khá: ${countKha} SV`);
console.log(`- Trung bình: ${countTb} SV`);
console.log(`- Yếu: ${countYeu} SV\n`);

console.log("DANH HIỆU:");
console.log(`- TB cao nhất: ${bestStudent} (${maxAvg.toFixed(1)} điểm)`);
console.log(`- TB thấp nhất: ${worstStudent} (${minAvg.toFixed(1)} điểm)\n`);

let numStudents = students.length;
console.log("ĐIỂM TRUNG BÌNH CÁC MÔN TOÀN LỚP:");
console.log(`- Toán: ${(totalMath / numStudents).toFixed(1)}`);
console.log(`- Vật lý: ${(totalPhysics / numStudents).toFixed(1)}`);
console.log(`- Tin học (CS): ${(totalCs / numStudents).toFixed(1)}\n`);

console.log("ĐIỂM TRUNG BÌNH THEO GIỚI TÍNH:");
console.log(`- Nam (M): ${countMale > 0 ? (totalAvgMale / countMale).toFixed(1) : 0}`);
console.log(`- Nữ (F): ${countFemale > 0 ? (totalAvgFemale / countFemale).toFixed(1) : 0}`);