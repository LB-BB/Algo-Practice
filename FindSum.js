const twoSum = (arr, target) => {
  const sortedArr = arr.sort((a, b) => a - b);
  let left = 0;
  let right = sortedArr.length - 1;

  while (left !== right) {
    let curSum = sortedArr[left] + sortedArr[right];
    if (curSum === target) return true;
    else if (curSum > target) right--;
    else left++;
  }
  return false;
};

const arr = [4, 34, 6, 2, 19, 22, 5, 41];

const num = 63;

console.log(twoSum(arr, num));
