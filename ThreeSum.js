// const threeSum = (array, sum) => {
//   //sort the array
//   //1 pointer: for loop
//   //another 2 pointers use nested while loops (left, right)
//   //compare the sum of those 3 pointers with the targetSum
//   if (array.length < 3) return [];

//   sortArray = array.sort();
//   //now array is sorted in ascending
//   let finalArray = [];

//   for (let i = 0; i < sortArray.length - 2; i++) {
//     let element = arr[i];
//     let leftIndex = i + 1;
//     let rightIndex = arr.length - 1;

//     while (leftIndex < rightIndex) {
//       let currentSum = element + sortArray[leftIndex] + sortArray[rightIndex];

//       if ((currentSum = sum)) {
//         finalArray.push([element, sortArray[leftIndex], sortArray[rightIndex]]);
//         leftIndex++;
//         rightIndex--;
//       } else if (currentSum > sum) {
//         rightIndex--;
//       } else if (currentSum < sum) {
//         leftIndex++;
//       }
//     }
//   }
//   return finalArray;
// };

// //Given an array of distinct integers and an integer representing a target sum, write a function that returns an array of all triplets in the input array that sum to the target sum.

// //have a way to track individual numbers as I add them together

// //find and save the value of every combination of 3 in the array
// //taking the sum and subtracting values from it

// // order the array
// //identify sets of three that add up to the sum
// //hold a number
// //check if any other two nums plus that = sum

// //for loop + while loop

// //get every combination of 2
// //see if the gap can be filled with one of the remaining numbers

// //retain the individual numbers from those sets
// //add those sets to new arrays
// //put those arrays in a final array

// //add the two at either end
// //subtract from the target
// //search in the arr for the missing number

// // Examples
// // arrayThreeSum([12, 3, 1, 2, -6, 5, -8, 6], 0)   //should return [[-8, 2, 6], [-8, 3, 5], [-6, 1, 5]]
// // arrayThreeSum([5, 6 , 1, -9 , 7, 3 , 2], 35)    //should return []
// // arrayThreeSum([1, 15, -5, 12 , -3, 6 , 2], 10)  //should return [[ -3, 1, 12

const arrayThreeSum = (arr, sum) => {
  arr.sort((a, b) => a - b);
  //[ -8, -6, 1,  2, 3,  5, 6, 12]
  let solution = [];

  for (let i = 0; i < arr.length - 2; i++) {
    let element = arr[i]; //-6
    let leftIndex = i + 1;
    let rightIndex = arr.length - 1; //7

    while (leftIndex < rightIndex) {
      //before they come together
      let num1 = arr[leftIndex];
      let num3 = arr[rightIndex];
      let mySum = num1 + element + num3;

      if (mySum === sum) {
        solution.push([num1, element, num3]);
        leftIndex++;
        rightIndex++;
        //i was not iterating these in
      } else if (mySum < sum) {
        leftIndex++;
      } else if (mySum > sum) {
        rightIndex--;
      }
    }
  }
  return solution;
};

// console.log(arrayThreeSum([12, 3, 1, 2, -6, 5, -8, 6], 0))
console.log(arrayThreeSum([1, 15, -5, 12, -3, 6, 2], 10)); //should return [[ -3, 1, 12 )

//Please picture me/
//with an array sorted from low to hightest/
//if we want to see if any of these sum up
//I will use pointers
