// You are attempting to find the index of the first appearance of one string (the needle) inside of another (the haystack).

// Examples
// indexOf('or', 'hello world'); // should return 7
// indexOf('hello world', 'or'); // should return -1
// indexOf('howdy', 'hello world'); // should return -1
// indexOf('oox', 'ooboxoooxo'); // should return 6

const stringSearch = (string, needle) => {
  //compare string[0] with needle[0]
  //if correct compare the slice of string that is the correct length against needle
  //if not correct rerun the algo with the first letter sliced off
  //algo should end when there are not enough letters in string to make needle
  while (string.length >= needle.length) {
    const slice = string.slice(0, needle.length);
    if (slice === needle) {
      return 0;
    } else {
      string = string.slice(1);
      return 1 + stringSearch(string, needle);
    }
  }
  return -1;
};

console.log(stringSearch("or", "hello world")); // should return 7
