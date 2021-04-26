//DIVIDE AND CONQUER METHOD

function quickSort(originalArr) {
  if (originalArr.length <= 1) {
    return originalArr;
  } else {
    var leftArr = [];
    var rightArr = [];
    var newArr = [];
    var pivot = originalArr.pop(); //  Take a pivot value
    var length = originalArr.length;
    for (var i = 0; i < length; i++) {
      if (originalArr[i] <= pivot) {
        // using pivot value start comparing
        leftArr.push(originalArr[i]);
      } else {
        rightArr.push(originalArr[i]);
      }
    }
    return newArr.concat(quickSort(leftArr), pivot, quickSort(rightArr)); // recursive call that checks each separated array until full sorting occurs
  }
}

let myArray = [9, 0, 2, 7, -2, 6, 1];

let yourArray = [14, 5, 28, 9, -3, 6, 22];

let ourArray = [19, 1, 2, 3, 4, 5];

console.log(quickSort(yourArray));
console.log(quickSort(myArray));
console.log(quickSort(ourArray));

//The worst case Big O for quick sort is O(n), and the best case is O(log n). If you choose a random pivot, you will hit the average Big O of O(n log n).
