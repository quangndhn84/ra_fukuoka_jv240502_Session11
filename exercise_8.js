let numbers = [1, 3, 5, 7, 4, 3, 5, 7, 5, 2];
//1. Khai báo mảng chứa các phần tử xuất hiện từ 2 lần trở lên
let numberDuplicate = [];
//2. Duyệt các phần tử trong mảng
for (let i = 0; i < numbers.length; i++) {
    //3. Duyệt các phần tử phía sau phần tử i
    for (let j = i + 1; j < numbers.length; j++) {
        //4. Kiểm tra phần tử sau có bằng phần tử i không
        if (numbers[i] == numbers[j]) {
            //Phần tử thứ i xuất hiện 2 lần --> kiểm tra trong numberDuplicate có hay chưa
            let isExistDuplicate = false;//chưa có trong duplicate
            for (let k = 0; k < numberDuplicate.length; k++) {
                if (numbers[i] == numberDuplicate[k]) {
                    isExistDuplicate = true;//đã có trong duplicate
                    break;
                }
            }
            if (!isExistDuplicate) {
                numberDuplicate.push(numbers[i]);
            }
            break;
        }
    }
}
//5. In ra các phần tử xuất hiện 2 lần trở lên
console.log("Các phần tử xuất hiện 2 lần trở lên trong mảng:", numberDuplicate);