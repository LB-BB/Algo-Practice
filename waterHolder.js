//iterative approach

//looking through an array of ints
//[0, 0, 1, 2, 4, 3, 2, 5]

//track if we can hold water
//let possibleWater = 0;

//iterate array
//check arr[0]. check arr[1]. if arr[1] > arr[0], move on to checking arr[i] against arr[2]
//check for increasing numbers until we reach one that decreases

//when we reach one that decreases, we later need to look for one of equal or greater height.

//return possibleWater.

const waterHolder = (arr) => {
  if (arr.length < 3) return 0;
  let possibleWater = 0;
  let confirmedWater = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < arr[i + 1]) {
      //move on
    } else if (arr[i] > arr[i + 1]) {
      possibleWater += arr[i] - arr[i + 1];
    } else if (arr[i] === arr[i + 1]) {
      //do nothing
    }
  }
  return confirmedWater;
};

//find the tallest thing in the array
//if it does not match anything, the water will never be that high.
//check for a match
//if no match, move on to next lowest num.
//count the indices between the two highest matching numbers
//at least that many of water possible
