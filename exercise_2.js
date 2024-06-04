let numbers = [1, 3, 5, 7, 3, 3, -5.7, 8.2, "Nguyễn Văn A"];

//1. Nhập giá trị cần tìm trong mảng
//2. Duyệt mảng
//3. Kiểm tra phần tử trong mảng có bằng giá trị tìm kiếm không
//3.1. Bằng in chỉ số phần tử
//3.2. Mảng không có phần tử bằng thì in thông báo
let searchValue = prompt("Nhập giá trị cần tìm");
console.log("Chỉ số các phần tử tìm thấy trong mảng:");
let isExist = false;//Mảng không có giá trị cần tìm
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] == searchValue) {
        console.log(i);
        isExist = true;
    }
}
if (!isExist) {
    console.log("Phần tử không tồn tại");
}
