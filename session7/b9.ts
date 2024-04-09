function isPrime(num: number): boolean {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function allPrimes(arr: number[]): boolean {
  for (let num of arr) {
    if (!isPrime(num)) {
      return false;
    }
  }
  return true;
}

let arr1: number[] = [1, 3, 4, 2, 7, 9, 32, 43, 12, 45];
console.log(allPrimes(arr1)); // false

let arr2: number[] = [3, 5, 7, 11, 13];
console.log(allPrimes(arr2)); // true
