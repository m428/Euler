// If we list all the natural numbers below 10 that are multiples of 3 or 5, we
// get 3, 5, 6 and 9. The sum of these multiples is 23. Find the sum of all the
// multiples of 3 or 5 below 1000.

function multiples(num) {
  var sumOfMultiples = 0;
  for (i = 0; i < num; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sumOfMultiples = sumOfMultiples + i;
    }
  } // end for
  console.log(sumOfMultiples);
  return sumOfMultiples;
}

multiples(10) //23
multiples(1000) //233168
multiples(-1) //0
multiples(0) //0
