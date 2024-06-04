//1. Khai báo mảng bất kỳ
//2. Khai báo và khởi tạo cờ để kiểm tra mảng có số nguyên không (isInteger)
//3. Duyệt các phần tử của mảng (giá trị các phần tử)
//4. Kiểm tra phần tử có phải là số nguyên không
//4.1. Phần tử là số nguyên --> in ra, đặt lại giá trị cờ
//4.2. Phần tử không phải số nguyên
//5. Nếu cờ vẫn giữ giá trị cũ --> thông báo
//1.
let numbers = [3, "Nguyễn Văn A", 3.7, "Nguyễn Văn B", 10];
//2.
let isExistInteger = false;//Mảng không có phần tử là số nguyên
//3.
console.log("Các phần tử là số nguyên trong mảng là:");
for (const element of numbers) {
    //"2"--> 2 === "2"--> false
    if (parseInt(element) === element) {
        //element là số nguyên
        isExistInteger = true;//Mảng có phần tử là số nguyên
        console.log(element);
    }
}
//!false = true
if (!isExistInteger) {
    //Mảng không có số nguyên
    console.log("Trong mảng không tồn tại số nguyên");
}