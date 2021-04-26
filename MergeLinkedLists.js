//iterative
const mergeLinkedLists = (headOne, headTwo) => {
  let pointer1 = headOne;
  let pointer1Prev = null;
  let pointer2 = headTwo;

  while (pointer1 !== null && pointer2 !== null) {
    //while neither first pointer is null (we are still in the list, going forward)
    if (pointer1.value < pointer2.value) {
      //if the value of p1 is less than the value of p2
      pointer1Prev = pointer1;
      //move pointer1 back one to its previous, saving it.
      pointer1 = pointer1.next;
      //pointer1 prev is in the pointer1 space and pointer1 is its .next.
    } else {
      //if pointer1.value > pointer2.value, p2 must go first
      if (pointer1Prev !== null) {
        //if pointer1Prev !== null
        pointer1Prev.next = pointer2;
        //pointer2 takes the second spot
      }

      pointer1Prev = pointer2;
      //pointer 2 goes in first spot
      pointer2 = pointer2.next;
      //pointer2.next goes in second spot
      pointer1Prev.next = pointer1;
      //pointer1
    }
  }
  if (pointer1 === null) {
    pointer1Prev.next = pointer2;
    return headOne.value < headTwo.value ? headOne : headTwo;
  }
};



// recursive
function mergeLinkedLists(headOne, headTwo) {
    recursiveMerge(headOne, headTwo, null);
    return headOne.value < headTwo.value ? headOne : headTwo;
  }
  ​
  function recursiveMerge(p1, p2, p1Prev) {
    if (p1 === null) {
      p1Prev.next = p2;
      return;
    }
    if (p2 === null) return;
  
  ​  if (p1.value < p2.value) {
      recursiveMerge(p1.next, p2, p1);
    } else {
      if (p1Prev !== null) p1Prev.next = p2;
      const newP2 = p2.next;
      p2.next = p1;
      recursiveMerge(p1, newP2, p2);
    }
  }