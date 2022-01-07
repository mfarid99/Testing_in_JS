const largestAdj = (arr) => {
    let largestProduct = arr[0] * arr[1];
    
    for(i = 1; i < arr.length; i++){
        const product = arr[i] * arr[i +1];
        largestProduct = largestProduct < product ? product : largestProduct
    }
    return largestProduct;
}

console.log(largestAdj([2, 4, 1, 5, 6, 9, 0]))