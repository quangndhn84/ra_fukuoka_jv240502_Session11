//1. Khai báo mảng bất kỳ
let numbers = [1, 5, 6, 3, 2, 1, 1, 5, 6, 7];
//2. Nhập số nguyên bất kỳ
let inputValue = parseInt(prompt("Nhập vào số nguyên bất kỳ"));
//3. Khởi tạo chỉ số bắt đầu và kết thúc của mảng con
let indexStart, indexEnd;
//4. Duyệt các phần tử trong mảng
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] == inputValue) {
        indexStart = i;
        indexEnd = i;
        break;
    } else {
        //Khởi tạo biến chứa tổng các phần tử của mảng con
        let sum = numbers[i];
        let isExit = false;//Chưa tìm thấy mảng con
        //Duyệt các phần tử phía sau i, rồi tính tổng và so sánh với inputValue
        for (let j = i + 1; j < numbers.length; j++) {
            sum += numbers[j];
            if (sum == inputValue) {
                indexStart = i;
                indexEnd = j;
                isExit = true;//Tìm thấy mảng con
                break;
            } else if (sum > inputValue) {
                break;
            }
        }
        if (isExit) {
            break;
        }
    }
}
//5. In ra mảng con đầu tiên có tổng bằng giá trị nhập vào
console.log("Mảng con đầu tiên có tổng bằng", inputValue, "là");
for (let i = indexStart; i <= indexEnd; i++) {
    console.log(numbers[i]);
}