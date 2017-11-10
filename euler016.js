// 2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.
// What is the sum of the digits of the number 2^1000?

function findSum(num, pow) {

  var sum = 0;
  var power = Math.pow(num, pow); // power = 32
  var string = power.toString(); // string = '32'
  var digits = string.split(''); // digits = ['3', '2']

  digits.forEach(addDigits);

  function addDigits(item) {
  item = parseInt(item); // convert each string digit into a number
  sum = sum + item // add each number
  };
  return sum;
};

findSum(2, 5);


// Refactored 
function findSum(num, pow) {

  var sum = 0;
  var digits = Math.pow(num, pow).toString().split(''); // get an array individual digits digits = ['3', '2']

  digits.forEach(addDigits);

  function addDigits(item) {
  item = parseInt(item); // convert each string digit into a number
  sum = sum + item // add each number
  };
  return sum;
};

findSum(2, 5);
