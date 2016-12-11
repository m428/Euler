// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that
// the 6th prime is 13.
//
// What is the 10001st prime number?

function findPrime(n) {
  var temp = 1
  var i = 3;

  if (n === 1) {
    console.log(2)
    return 2;
  }

  // find prime numbers
  while (i > 0) {
    // k gets incremented when i % k !== 0 && k != i - 1
    for (k = 2; k < i; k++) {
      // if i is divisible by k w/o a remainder, it is not prime
      if (i % k === 0) {
        i++;
        k = i;
      }
      // if i is not divisible by all numbers between 1 and i, it is prime
      else if ( i % k !== 0 && k == i - 1 ) {
        temp++;
        // check if this prime number is the nth prime number
        if (temp == n) {
          console.log(i);
          return i;
        }
        else {
        i++;
        k = i;
        }
      }
    }
  }
}

findPrime(6);
findPrime(10001);
