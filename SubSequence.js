const isValidSubsequence = (array, sequence) => {
  let arrIdx = 0;
  let seqIdx = 0;

  while (arrIdx < array.length && seqIdx < sequence.length) {
    if (array[arrIdx] === sequence[seqIdx]) {
      seqIdx++;
    }
    arrIdx++;
  }
  return seqIdx === sequence.length;
};

const myArray = [4, 7, 2, 8, 5, 9, 3, 0, 3, 5, 5];
const mySequence = [5, 9, 3];

console.log(isValidSubsequence(myArray, mySequence));
