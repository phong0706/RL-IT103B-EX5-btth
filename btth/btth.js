const rawCode = " med-rhm-0815-bhyt ";

const cleanCode = rawCode.trim().toUpperCase();

const isValid = cleanCode.startsWith("MED-");
const deptCode = cleanCode.slice(4, 7);
const serialNumber = cleanCode.slice(8, 12);
const hasBHYT = cleanCode.includes("BHYT");

let departmentName = "Đa Khoa";
if (deptCode === "RHM") {
  departmentName = "Răng Hàm Mặt";
} else if (deptCode === "TAI") {
  departmentName = "Tai Mũi Họng";
} else if (deptCode === "MAT") {
  departmentName = "Mắt";
}

const baseFee = 150000;
let finalFee = baseFee;
if (hasBHYT) {
  finalFee = baseFee * 0.2;
}

const borderLine = "=".repeat(35);

console.log(borderLine);
console.log("       THẺ TIẾP ĐÓN PHÒNG KHÁM       ");
console.log(borderLine);
console.log(`- Trạng thái mã : ${isValid ? "Hợp lệ" : "Không hợp lệ"}`);
console.log(`- Chuyên khoa   : ${departmentName}`);
console.log(`- Số thứ tự     : ${serialNumber}`);
console.log(`- Quyền lợi BH  : ${hasBHYT ? "Áp dụng BHYT (Giảm 80%)" : "Không có"}`);
console.log(`- Viện phí thu  : ${finalFee.toLocaleString("vi-VN")} VNĐ`);
console.log(borderLine);