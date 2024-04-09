function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (var i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
function allPrimes(arr) {
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var num = arr_1[_i];
        if (!isPrime(num)) {
            return false;
        }
    }
    return true;
}
var arr1 = [1, 3, 4, 2, 7, 9, 32, 43, 12, 45];
console.log(allPrimes(arr1)); // false
var arr2 = [3, 5, 7, 11, 13];
console.log(allPrimes(arr2)); // true
