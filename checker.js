// Given an array arr consisting of N integers, sorted in ascending order (least to greatest), and a separate number (a sum), determine if any 2 numbers in the array add up to the sum. Return true if any 2 different numbers within the array add up to sum. Return false if no 2 numbers in the array add up to sum.

// Examples
// pairSum([1, 1, 2, 3, 4, 5], 7) -> true (either 2+5 or 3+4)
// pairSum([1, 2, 3, 4, 5], 10) -> false
// pairSum([0, 2, 3, 6, 9, 10], 10) -> true (0 + 10)
// pairSum([1, 2, 3, 7, 8], 7) -> false
// pairSum([-2, 0, 4, 6, 10], 8) -> true (-2 + 10)
// pairSum([1, 2, 3, 4, 5], 2) -> false

//use pointers at either end
//compare their sum
//< move left
//> move right
//return true;

const pairSum = (arr, target) => {
  let leftPointer = 0;
  let rightPointer = arr.length - 1;
  while (leftPointer < rightPointer) {
    let tempSum = arr[leftPointer] + arr[rightPointer];
    if (tempSum === target) return true;
    else if (tempSum < target) leftPointer++;
    else if (tempSum > target) rightPointer--;
  }
  return false;
};

console.log(pairSum([0, 2, 3, 6, 9, 10], 15));
// pairSum([0, 2, 3, 6, 9, 10], 10) -> true (0 + 10)
