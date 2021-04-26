let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const binarySearch = (arr, target) => {
  let first = 0;
  let last = arr.length - 1;
  let position = -1;

  while (first <= last) {
    let mid = Math.floor((first + last) / 2);
    let guess = arr[mid];
    position = mid;
    if (guess === target) return position;
    if (guess > target) {
      last = mid - 1;
    }
    if (guess < target) {
      first = mid + 1;
    }
  }
  return -1;
};

console.log(binarySearch(array, 8));

// Set first to 0
// Set last to the last index in the list
// Set found to false
// Set position to −1
// while found is false and first is less than or equal to last
//     Set middle to the index halfway between first and last
//     if list[middle] equals the desired value
//         Set found to true
//         Set position to middle
//     else if list[middle] is greater than the desired value
//         Set last to middle − 1
//     else
//         Set first to middle + 1
// return position

const iterativeSearch = (arr, target) => {
  if (arr.length === 1 && arr[0] !== target) return -1;
  let first = 0;
  let last = arr.length - 1;
  let position = -1;

  while (first <= last) {
    let mid = Math.floor((first + last) / 2);
    position = mid;
    if (arr[mid] === target) return position;
    else if (target < arr[mid]) {
      last = mid - 1;
    } else if (target > arr[mid]) {
      first = mid + 1;
    }
  }
  return -1;
};

// [5, 8, 19, 22, 30] target = 22;
//return index of match

console.log(iterativeSearch(array, 9));
