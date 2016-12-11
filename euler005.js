// 2520 is the smallest number that can be divided by each of the numbers from 1 to
// 10 without any remainder.
//
// What is the smallest positive number that is evenly divisible by all of the
// numbers from 1 to 20?


function findSmallest(number) {
  i = number;
  while (i >= number) {
    for (k = 1; k <= number; k++) {
      if (i % k === 0 && k == number) {
        console.log(i);
        return i;
      }
      else if (i % k !== 0) {
        k = number + 1;
        i++;
      }
    }
  }
}

findSmallest(20);
