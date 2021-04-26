// Interviewer Prompt
// Given an array arr consisting of N integers, sorted in ascending order (least to greatest), and a separate number (a sum), determine if any 2 numbers in the array add up to the sum. Return true if any 2 different numbers within the array add up to sum. Return false if no 2 numbers in the array add up to sum.

// Examples
// pairSum([1, 1, 2, 3, 4, 5], 7) -> true (either 2+5 or 3+4)
// pairSum([1, 2, 3, 4, 5], 10) -> false
// pairSum([0, 2, 3, 6, 9, 10], 10) -> true (0 + 10)
// pairSum([1, 2, 3, 7, 8], 7) -> false
// pairSum([-2, 0, 4, 6, 10], 8) -> true (-2 + 10)
// pairSum([1, 2, 3, 4, 5], 2) -> false
// Examples - Edge cases

// pairSum([1], 2) -> false
// pairSum([2], 2) -> false
// pairSum([], 1) -> false

//given an array of sorted integers and a target sum, return true if any two nums in the array add up to the sum, and false if none do.
//might I be given negative numbers?
//might I be given an empty array or one with only 1 number?
//what would we need to do if we were given [1, 2, 3], 4?

//we would have to check 1 and 2, 1 and 3
//then we would have to check 2 and 3
//so we can start i at 0 and nest a loop with j saving each sum of i + j (j = i + 1)
//then we can check the array for the correct sum.

//could I add arr[0] to a loop that runs from 1 and then save that to an array and then slice arr[1] off?

//any two numbers add up to the target sum
//one way is to store all the possible sums

//because this is sorted, we could also use pointers

const pairSum = (arr, target) => {
  let leftPointer = 0;
  let rightPointer = arr.length - 1;

  while (rightPointer > leftPointer) {
    let sum = arr[rightPointer] + arr[leftPointer];
    if (sum === target) return true;
    else {
      if (sum > target) rightPointer--;
      else if (sum < target) leftPointer++;
    }
  }
  return false;
};

console.log(pairSum([1, 2, 3, 4, 5], 10));
// -> true (either 2+5 or 3+4)

// pairSum([1, 1, 2, 3, 4, 5], 7) -> true (either 2+5 or 3+4)
// pairSum([1, 2, 3, 4, 5], 10) -> false
// pairSum([0, 2, 3, 6, 9, 10], 10) -> true (0 + 10)
// pairSum([1, 2, 3, 7, 8], 7) -> false
// pairSum([-2, 0, 4, 6, 10], 8) -> true (-2 + 10)
// pairSum([1, 2, 3, 4, 5], 2) -> false
