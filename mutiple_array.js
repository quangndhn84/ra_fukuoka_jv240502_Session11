//1. Khai báo mảng 2 chiều theo Array
let arr2D_1 = new Array([1, 2, 3, 4], ["Nguyễn Văn A", 3, "Nguyễn Văn B"]);//row: 2, row1: 4 cols, row2: 3
console.log("Arr2D_1:", arr2D_1);
//2. Khai báo mảng []
let arr2D_2 = [[5, 6, 7, 8], ["Nguyễn Văn C", "Nguyễn Văn D"], [5.8, 7.2, -2.1]];
//row: 3, row1: 4 cols, row2: 2 cols, row3: 3cols
console.log("Arr2D-2:", arr2D_2);
//3. Khai báo và nhập dữ liệu cho mảng 2 chiều kiểu số nguyên
//3.1. Khai báo mảng
let numbers = [];//1 chiều
//3.2. Sử dụng 2 vòng lặp lồng nhau để duyệt từng phần tử và nhập dữ liệu cho đó
let row = parseInt(prompt("Nhập vào số dòng của mảng 2 chiều"));
for (let i = 0; i < row; i++) {
    //Nhập dữ liệu cho từng dòng trong mảng 2 chiều
    let col = parseInt(prompt("Nhập vào số phần tử trong dòng " + i));
    //Nhập dữ liệu cho 1 dòng - mảng 1 chiều
    let arrRow = [];
    for (let j = 0; j < col; j++) {
        //Nhập dữ liệu cho từng phần tử
        arrRow.push(parseInt(prompt("Nhập vào phần tử thứ " + j)));
    }
    //add mảng arrRow vào mảng 2 chiều numbers
    numbers.push(arrRow);
}
console.log("Mảng 2 chiều vừa nhập:", numbers);
//4. Tính tổng các phần tử trong mảng numbers
//4.1. Khai báo và khởi tạo biến tổng với giá trị 0
let sumNumbers = 0;
//4.2. Duyệt từng phần tử trong mảng numbers và cộng giá trị phần tử vào biến tổng
//numbers.length: số dòng của mảng 2 chiều
for (let i = 0; i < numbers.length; i++) {
    //Duyệt theo từng dòng, numbers[i].length: trả ra số phần tử trên dòng i
    for (let j = 0; j < numbers[i].length; j++) {
        sumNumbers += numbers[i][j];
    }
}
//4.3. In ra tổng các phần tử
console.log("Tổng các phần tử mảng numbers:", sumNumbers);