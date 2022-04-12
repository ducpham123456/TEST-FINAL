function adjacentElementsProduct(arr) {
    let len = arr.length;
    let max = -Infinity;
    for(let i = 0; i < len - 1; i++){
        let largets = arr[i] * arr[i+1];
        if(max < largets) max = largets;
    }
    return max;
}
let arr = [2, 3, -5, -2, 4];
let result = adjacentElementsProduct(arr)
console.log("Ket qua bai 1 :", result);

