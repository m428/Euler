// The sum of the squares of the first ten natural numbers is,
//
// 1^2 + 2^2 + ... + 10^2 = 385
// The square of the sum of the first ten natural numbers is,
//
// (1 + 2 + ... + 10)2 = 55^2 = 3025
// Hence the difference between the sum of the squares of the first ten natural
// numbers and the square of the sum is 3025 − 385 = 2640.
//
// Find the difference between the sum of the squares of the first one hundred
// natural numbers and the square of the sum.


function sumSquareDifference(number) {
  var sum = 0;
  var sumOfSquares = 0;
  var squareOfSum = 0
  var difference = 0;

  for (i = 1; i <= number; i++) {
    sum = sum + i
    sumOfSquares = sumOfSquares + i * i;
  }
  squareOfSum = sum * sum;
  difference = squareOfSum - sumOfSquares;
  console.log(difference);
  return difference;
}

sumSquareDifference(10);
sumSquareDifference(100);
