
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