//find out if any combination of numbers in an array can add up to a target sum.

//initiate a new set of possible sums with 0
//loop through the array of numbers
//make a copy of the original set of possible sums with 0
//loop through the copy and add nums[i] to sums[j]
//save newSum to nums[i] + sums[j]
//if that newSum is target return
//otherwise if it is less than target add to possible sums

const subsetSum = (array, target) => {
  const possibleSums = new Set([0]);
  for (let num of array) {
    const currentPossibleSums = new Set(possibleSums);
    for (let sum of currentPossibleSums) {
      let newSum = sum + num;
      if (newSum === target) {
        return true;
      }
      if (newSum > target) {
        possibleSums.add(newSum);
      }
    }
  }
  return false;
};
