//1. Nhập số nguyên 1 (firstNumber)
//2. Nhập số nguyên 2 (secondNumber)
//3. Tạo mảng không có phần tử lưu các phần tử chia hết cho a || b
//4. Duyệt các giá trị từ 1 - firstNumber, tìm các phần tử chia hết secondNumber và lưu vào mảng
//5. Duyệt các giá trị từ 1 - secondNumber, tìm các phần tử chia hết cho firstNumber và lưu vào mảng
//6. In các phần tử của mảng
let firstNumber = parseInt(prompt("Nhập vào số nguyên thứ nhất"));
let secondNumber = parseInt(prompt("Nhập vào số nguyên thứ hai"));
let numbers = [];
for (let i = 1; i <= firstNumber; i++) {
    if (i % secondNumber == 0) {
        numbers.push(i);
    }
}
for (let i = 1; i < secondNumber; i++) {
    if (i % firstNumber == 0) {
        numbers.push(i);
    }
}
console.log("Các phần tử chia hết cho ", firstNumber, "và", secondNumber, "là:");
for (const element of numbers) {
    console.log(element);
}