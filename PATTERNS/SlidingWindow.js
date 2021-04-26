//Sliding Window-- when do we use this pattern?

// -- With a data structure that is ordered or iterable, like a linked list, an array, or a string
// -- You are looking for some sort of sub range or sub sequence, like a longest, shortest, or target value
// -- There is an apparent brute force solution that is O(n^2) or more
// -- Biggest giveaway: you are looking for something optimal, like the longest or shortest sequence that matches a given condition exactly.

// Make a variable for the start of my window
// Make a variable to hold my result
// Make an object to hold the counts of the characters in my array
// Make a counter variable to count how many of my unique characters I have come across so far

const slidingWindow = (s, t) => {
  let start = 0;
  let result = "";
  let dictionary = {};
  let counter = 0;

  for (let i = 0; i < t.length; i++) {
    let char = t[i];
    if (!dictionary[char]) {
      dictionary[char] = 0;
    }
  }
  console.log(dictionary);
};

slidingWindow("overton", "ton");
