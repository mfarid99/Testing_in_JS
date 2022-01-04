
let ex1 = "Hello People Of The World";

console.log(ex1.startsWith('People', 6))
// console.log(ex1.endsWith('People'))
// console.log(ex1.startsWith('Metal'))

let a = 'ABCDEFGHKLMNOP';
let b = 'ABCDEFGHKL';

console.log(a.match(b))

function x() {
    let arr1 = [];
    for(i = 0; i <arguments.length; i++){
        arr1.push(arguments[i])
    }
    console.log(arr1)
}
(x(9, 7, 10))

function y(...arr2){
    let hum = 0;
    for(i = 0; i < arr2.length; i++){
        hum = hum + arr2[i]
    }
return hum;
}

console.log(y(100, 200, 400))

// const array = [1, 2, 3, 4];
// let sum = 0;

// for (let i = 0; i < array.length; i++) {
//     // sum += array[i];
//     sum = sum + array[i];

// }
// console.log(sum);


const sumAll = (...arr3) => {
    let sum1 = 0;
    for(i = 0; i <arr3.length ; i++){
        sum1 = sum1 + arr3[i];
    }
    return sum1
}

console.log(sumAll(3, 9, 100, 200, 11))

// let arr4 = [2, 4, 5, 9, 81, 9];

const evenNum = (arr4) => {
    const isEven = arr4.length % 2 === 0;
    return isEven ? arr4[arr4.length / 2 - 1] : arr4[Math.floor(arr4.length / 2)]
}

console.log(evenNum([2, 4, 7, 9]));
console.log(evenNum([8, 9, 1, 4, 5]));


const median = (a) => {
    const isEven = a.length % 2 === 0;

    if(isEven){
        return a[a.length / 2 - 1]
    }
    else{
        return a[Math.floor(a.length / 2)]
    }
}

console.log(median([7, 9, 10, 12]))
console.log(median([12, 111, 10]))


const aSum = (...arr5) => {
    let sum = 0; 
    for(i = 0; i < arr5.length; i++){
        sum = sum + arr5[i]
    }
    return sum;
}

console.log(aSum(5, 6, 7, 8, 10))

arr6 = 19;
arr7 = arr6.toString()
console.log(arr7)
console.log(typeof arr7)
splitArr7 = arr7.split('')
console.log(splitArr7)
console.log(splitArr7[0])
console.log(splitArr7[1])
let totalNums = parseInt(splitArr7[0]) + parseInt(splitArr7[1])
console.log(totalNums)

const Sum2D = (a) => {
    const nums = a.toString()
    const splitter = nums.split('')
    const total = parseInt(splitter[0]) + parseInt(splitter[1])
    return total 
}

console.log(Sum2D(21))

const sum3D = (...a) => {
    let sum = 0; 
    const nums = a.toString().split('');
    for(i = 0; i < nums.length ; i ++ ){
        sum = sum + parseInt(nums[i])
    }
    return sum;
}

console.log(sum3D(11111))


//Sum of 2 numbers

const sumAnyNums = (...num) => {
    let sum = 0; 
    for(i = 0; i < num.length; i++){
        sum = sum + num[i];
    }
    return sum
}

console.log(sumAnyNums(6, 9, 30))
console.log(sumAnyNums(100, 1000, 30, 400))

//Sum of digits

let xa = 2022
let x2String = xa.toString()
let xSplit = x2String.split('')
console.log(xSplit)
let sumx = 0; 
for(i = 0; i < xSplit.length; i++){
    sumx = sumx + xSplit[i]
}

const sumAllDigits = (...x) => {
    let sum = 0; 
    pureNum = x.toString().split('')
    console.log(pureNum)
    for(i = 0; i < pureNum.length; i++){
        sum = sum + parseInt(pureNum[i])
    }
    return sum
}

console.log(sumAllDigits(2022))
console.log(sumAllDigits(9999))


//Median

// [2, 4, 8] //4
// [2, 6, 8, 9] //6

const newMediane = (x) => {
    isItEven = x.length % 2 === 0; 

    if(isItEven){
        return x[x.length / 2 - 1]
    }else {
        return x[Math.floor(x.length / 2)]
    }
}

console.log(newMediane([2, 4, 8]))
console.log(newMediane([12, 6, 108, 9]))

//Highest multiple adj

const mult = (arr) => {
    let p =arr[0] * arr[1]; 
    for(i = 1; i < arr.length -1; i++){
       const z = arr[i] * arr[i+1]
      p = p > z ? p : z
    }
    return p;
}

console.log(mult([2, 4, 6, 10]))