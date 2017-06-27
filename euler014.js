// The following iterative sequence is defined for the set of positive integers:
//
// n → n/2 (n is even)
// n → 3n + 1 (n is odd)
//
// Using the rule above and starting with 13, we generate the following sequence:
//
// 13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
// It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.
//
// Which starting number, under one million, produces the longest chain?
//
// NOTE: Once the chain starts the terms are allowed to go above one million.


var currentNum = 0;
var tempNum = 0;
var count = 1;
var tempCount = 0;

function findStartingNum() {
  for (i = 999999; i > 1; i--) {
    currentNum = i;
    while (currentNum > 1) {
      count++;
      checkEvenOrOdd(currentNum);
    }
    if (count > tempCount) {
        tempNum = i;
        tempCount = count;
        count = 1;
    }
    else {
      count = 1;
    }
  }
  console.log(tempCount)
  return tempNum;
}

function checkEvenOrOdd() {
  if (currentNum % 2 === 0) {
    makeOdd(currentNum);
  }
  else {
    makeEven(currentNum);
  }
}

function makeOdd() {
  currentNum = currentNum / 2;
}

function makeEven() {
  currentNum = (currentNum * 3 + 1);
}

findStartingNum();
