// 2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.
// What is the sum of the digits of the number 2^1000?

function findSum(num, pow) {
  var power = Math.pow(num, pow);
  console.log(power);
  var string = power.toString();
  console.log(string)
  var digits = string.split();
console.log(digits)
  var numbers = parseInt(digits);
  console.log(numbers)
};



function findSum(num, pow) {
  var power = Math.pow(num, pow);
  console.log(power);
  var string = power.toString();
  console.log(string);
  var digits = string.split('');
console.log(digits);
// var numbers = parseInt(digits);
// console.log(numbers)
 var numbers = digits.forEach(addDigits);

console.log(numbers);

 function addDigits(item) {
   var number = Number(item);
   var sum = sum + number
   console.log(sum);
 }
}

findSum(2, 5);


// 2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.
// What is the sum of the digits of the number 2^1000?


function findSum(num, pow) {
  var sum = 0;
  var power = Math.pow(num, pow);
  console.log(power);
  var string = power.toString();
  console.log(string);
  var digits = string.split('');
console.log(digits);
// // var numbers = parseInt(digits);
// // console.log(numbers)
var numbers = digits.forEach(addDigits);

console.log(numbers);

function addDigits(item) {
  console.log(item + ' this is an item');
  item = parseInt(item);
  console.log(item + 2);
  sum = sum + item
  console.log(sum + " = sum");
}
}

findSum(2, 5);
