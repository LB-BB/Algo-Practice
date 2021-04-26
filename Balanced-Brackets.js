//define edge cases for empty strings or strings with only letters

//define new empty array
//loop through string and push all bracket chars into the new array
//check for an odd number of brackets => return false

//kind of like checking for a palindrome
//.join?

//two pointers at either end

const stack = ["(){}[]"]; //=> true
//could simply check if the next is a match for the previous

const altStack = ["{[()]}"]; //=> true
//stack I can use the famous push/pop

//find an opening bracket & a closed one next to each other, pop 'em both off

//how to tell the computer one is opening and one is closing?

const sampleObj = {
  "{": true,
  "[": true,
};

//sampleObj['{'] = true

//if I find a closing bracket && sampleObj['{'] === true
//if i make it all the way through without finding the wrong partner the I can return true and otherwise false

const brackets = ["{", "}", "[", "]", "(", ")"];

const balancedBrackets = (inputString) => {
  if (inputString.length === 0) return true;
  const filteredString = inputString.filter((i) => {
    //return anything that is in the brackets array
  });
  //theoretically I should have an array of only brackets
  //various kinds and potentially in any order

  if (filteredString.length === 0) return true;
  if (filteredString.length % 2 === 1) return false;

  const bracketStack = [];
  const bracketObj = {};

  //loop through filteredString push opening brackets onto the stack
  //if I find one that is a closing bracket that doesnt match the one before it then i can return false.
};

// ----------------------
//SOLUTION

const openBrackets = {
  "{": true,
  "[": true,
  "(": true,
};

const closeBrackets = {
  "}": "{",
  "]": "[",
  ")": "(",
};

const isValid = (string) => {
  let stack = [];

  for (let i = 0; i < onlyBrackets.length; i++) {
    let char = string[i];

    if (openBrackets[char]) {
      stack.push(char);
    } else if (closeBrackets[char]) {
      if (stack[stack.length - 1] !== closeBrackets[char]) {
        return false;
      } else {
        stack.pop();
      }
    }
  }
  return !stack.length;
};
