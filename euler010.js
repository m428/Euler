// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
//
// Find the sum of all the primes below two million.

function sumPrimes(n) {
  var sum = 2;

  if (n == 3) {
    return sum;
  }

  for (i = 3; i < n; i++) { // check if i is prime
    for (k = 2; k < i; k++) {
      if (i % k !== 0 && k == i - 1) { // if prime add to sum
        sum = sum + i;
      }
      else if (i % k === 0) { // else check next
        k = i;
      }
    }
  }
  console.log(sum);
  return sum;
}

sumPrimes(10);
// sumPrimes(2e6);
// sumPrimes(2000000);



// create an array of consecutive integers {2,3,…,n}.
// select p as the first prime number in the list, p = 2.
// remove all multiples of p from the array.
// set p equal to the next integer in array that has not been removed.
// repeat steps 3 and 4 until p2 > N, all the remaining numbers in the list are primes

function sumPrimesTwo(n) {
  var array = [];
  var p = 2;
  var sum = 0;
  var increment = 0;

  if (n === 1 || n === 2) {
    console.log(0);
    return 0;
  }
  else if (n === 3) {
    console.log(2);
    return 2;
  }

  for (i = 2; i < n; i++) {   // make an array of all consecutive intergers from 2...n - 1
    array.push(i);
  }

  while(array[increment]) { // check all elements is array
    for (k = 0; k < array.length; k++) {
      if (array[k] % p === 0 && array[k] != p) { // if it is a multiple, it is not prime
        array.splice(k, 1);
      }
    }
    increment++;
    p = array[increment];
  }

  for (m = 0; m < array.length; m++) { // sum all primes between 1 and n
    sum = sum + array[m];
  }

  console.log(sum);
  return sum;
}

sumPrimesTwo(10);
