const mergeNLists = (arrOfLists) => {
  if (arrOfLists.length < 2) return arrOfLists;

  const newList = [];
  const lowestVal = infinity;
  let arrIndex = 0;

  //if (conditions of continuation) {}

  //look through array and grab 0 of each array
  for (let i = 0; i < arrOfLists.length; i++) {
    let curZero = arrOfLists[i][0];
    if (curZero < lowestVal) {
      lowestVal = curZero;
      arrIndex = i;
    }
  }
  newList.push(lowestVal);
  //alter the original array[i] to exclude that number
  //setting array[i][1] to be the new head of that array
  //arr[i][0].next = null;
  //arr[i][1] === arr[i][0]

  //loop again with the new arr[0] make the same comparison until i have only one [i] left in arrOfLists;
};

//brute force
//traverse the array
//push each individual node's value to that list
//then sorting that array
//the initialize a new LL
//traverse node array and assign it into the new LL.

//optimized solution

const mergeNLists = (lists) => {
  if (lists.length === 0) {
    return null;
  }
  let interval = 1;
  while (lists.length > interval) {
    let idx = 0;
    while (idx + interval < lists.length) {
      lists[idx] = merge2Lists(lists[idx], lists[idx + interval]);
    }
    interval *= 2;
  }
  return lists[0];
};
