let firstNumbers = [1, 2, 3, 4, 5];
let secondNumbers = [-3, -1, 0, 1, 5];
let thirdNumbers = [1, 5, 6, 7];
//In ra các phần tử có ở cả 3 mảng
//1. Duyệt các phần tử ở mảng 1
console.log("Các phần tử có ở trong cả 3 mảng là:");
for (const element1 of firstNumbers) {
    //2. Kiểm tra element1 có trong mảng 2 hay không
    let isExistOf2 = false;
    for (const element2 of secondNumbers) {
        if (element1 == element2) {
            isExistOf2 = true;
            break;
        }
    }
    if (isExistOf2) {
        //3. Kiểm tra element1 có trong mảng 3 hay không
        let isExistOf3 = false;
        for (const element3 of thirdNumbers) {
            if (element1 == element3) {
                isExistOf3 = true;
                break;
            }
        }
        if (isExistOf3) {
            console.log(element1);
        }
    }
}