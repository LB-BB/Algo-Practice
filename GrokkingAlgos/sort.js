// function selectionSort(items) {
//   var length = items.length;
//   for (var i = 0; i < length - 1; i++) {
//     //Number of passes
//     var min = i; //min holds the current minimum number position for each pass; i holds the Initial min number
//     for (var j = i + 1; j < length; j++) {
//       //Note that j = i + 1 as we only need to go through unsorted array
//       if (items[j] < items[min]) {
//         //Compare the numbers
//         min = j; //Change the current min number position if a smaller num is found
//       }
//     }
//     if (min != i) {
//       //After each pass, if the current min num != initial min num, exchange the position.
//       //Swap the numbers
//       var tmp = items[i];
//       items[i] = items[min];
//       items[min] = tmp;
//     }
//   }
// }

const selectionSort = (array) => {
  let length = array.length;
  for (let i = 0; i < length; i++) {
    let min = i;
    for (let j = i + 1; j < length; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }
    //^^locates the smallest number in the array
    if (min !== i) {
      let temp = array[i];
      array[i] = array[min];
      array[min] = temp;
    }
    //^^swaps it for the first number or whatever index it's at
  }
  return array;
};

let array = [7, 3, 6, 2, 8];
console.log(selectionSort(array));
