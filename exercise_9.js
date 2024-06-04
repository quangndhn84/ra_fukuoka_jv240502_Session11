let numbers = [6, 1, 4, -3, 9, -10, 5];
//1. Kiểm tra mảng có phần tử nào có giá trị là 1 hay không
let isElement1 = false;
for (let index = 0; index < numbers.length; index++) {
    if (numbers[index] == 1) {
        isElement1 = true;
        break;
    }
}
if (!isElement1) {
    //Trong mảng không có phần tử 1
    console.log("Số nguyên dương nhỏ nhất không có trong mảng là: 1");
} else {
    //2. Sắp xếp mảng tăng dần bằng hàm sort của mảng
    numbers.sort((a, b) => a - b);
    //3. Xét các phần tử dương liền kề nhau
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > 0 && numbers[i] + 1 != numbers[i + 1]) {
            console.log("Số nguyên dương nhỏ nhất không có trong mảng là:", numbers[i] + 1);
            break;
        }
    }
}