//1. Nhập số phần tử của mảng số nguyên và khai báo mảng
//2. Nhập giá trị các phần tử của mảng từ bàn phím
//3. Sắp xếp mảng số nguyên tăng dần (phần tử âm ở đầu mảng/ phần tử dương ở cuối mảng)
//4. In mảng
let size = parseInt(prompt("Nhập vào số phần tử của mảng"));
let numbers = [];
for (let index = 0; index < size; index++) {
    numbers.push(parseInt(prompt("Nhập vào phần tử thứ " + (index + 1))));
}
//Sắp xếp tăng dần
//C1: Selection sort để sắp xếp
for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
        if (numbers[i] > numbers[j]) {
            //Đổi chỗ 2 phần tử
            let temp = numbers[i];
            numbers[i] = numbers[j];
            numbers[j] = temp;
        }
    }
}
console.log("Mảng sau khi sắp xếp:", numbers);