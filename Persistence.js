function persistence(num) {
  const stringNum = String(num);
  if (String(num).length === 1) return 0;

  // We can split the strings into an array and then multiply the values to return a product using a reduce function
  // This works in JS because the engine sees two numbers of string data type and coerces them back to being numbers when you try to multiple them
  const newNum = stringNum
    .split("")
    .reduce((product, factor) => product * factor);
  //here's an alt to the above without reduce.
  // let newNum = 1;

  // for (let i = 0; i < stringNum.length; i++) {
  //   newNum *= stringNum[i];
  // }

  return 1 + persistence(newNum);
}

console.log(persistence(10));
