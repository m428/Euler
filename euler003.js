// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143 ?

function findLargestPrime(number) {
  var factor;
  var prime;
  var largestPrime

  for (i = 2; i < number / 2; i++) {
    if (number % i === 0) { // then i is a factor
      var k = 2;
      for (k = 2; k < i; k++) {
        if (i % k !== 0 || i === 2) { // if i is only divisible by itself and 1
          prime = i
        }
        else { // i is not a prime number
          console.log(largestPrime);
          return largestPrime;
        }
      }
      console.log(prime + " is a prime factor");
      largestPrime = prime
    }
  }
  return largestPrime;
} //end function

findLargestPrime(13195);

// 6 is an edge case that needs to be accounted for
