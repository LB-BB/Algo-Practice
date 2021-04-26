const stockExchange = (array) => {
  //pointer
  if (array.length <= 1) return 0;

  //locate the smallest, earliest number
  //locate the latest, largest number
  //return the difference between them
  //loop of some kind

  //while i < array.length
  // a condition where both value and index of b are larger than those of a
  let profit = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      let tempSum = array[j] - array[i];
    }
  }
  return profit;
  //find highest

  //loop and track profit of each day - profit + profit
  //save that number
  //find highest num
};
//Input: [7,1,5,3,6,4]
//Output: 5Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.             Not 7-1 = 6, as selling price needs to be larger than buying price.
