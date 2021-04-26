// Given an string str, create a function that returns a boolean, corresponding to whether that string is a palindrome (spelled the same backwards and forwards). Our palindrome check should be case-insensitive.

// Examples
// isPalRecursive('car') => false
// isPalRecursive('racecar') => true
// isPalRecursive('RaCecAr') => true
// isPalRecursive('!? 100 ABCcba 001 ?!') => true

//put a pointer at either end and iterate inward until something returns false.

const isPalRecursive = (str) => {
  if (str.length <= 1) return true;
  const frontLetter = str[0];
  const backLetter = str[str.length - 1];
  if (frontLetter !== backLetter) {
    return false;
  } else {
    str = str.slice(1, str.length - 1);
    return isPalRecursive(str); //RETURN WAS CRUCIAL HERE! WE WEREN'T RETURNING!!!
  }
};

// console.log(isPalRecursive("soos"));

const isPalIterative = (str) => {
  while (str.length > 1) {
    let front = str[0];
    let back = str[str.length - 1];
    if (front !== back) return false;
    str = str.slice(1, str.length - 1);
  }
  return true; //RETURN WAS ALSO CRUCIAL HERE! REMEMBER IT
};

console.log(isPalIterative("final"));
