//1. Tạo mảng
//2. Nhập 1 số để thống kê số lần xuất hiện
//3. Khởi tạo biến đếm cnt = 0
//4. Duyệt mảng và thống kê số lần xuất hiện
let numbers = [1, 3, 5, 7, 9, 3, 5, 6, 7, 7, 7, 7];
let searchValue = parseInt(prompt("Nhập vào một số nguyên để thống kê"));
let cntNumber = 0;
for (const element of numbers) {
    if (element == searchValue) {
        cntNumber++;
    }
}
console.log("Số", searchValue, "xuất hiện", cntNumber, "lần trong mảng");