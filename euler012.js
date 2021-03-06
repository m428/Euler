// The sequence of triangle numbers is generated by adding the natural numbers. So
// the 7th triangle number would be 1 + 2 + 3 + 4 + 5 + 6 + 7 = 28. The first ten
// terms would be:
//
// 1, 3, 6, 10, 15, 21, 28, 36, 45, 55, ...
//
// Let us list the factors of the first seven triangle numbers:
//
//  1: 1
//  3: 1,3
//  6: 1,2,3,6
// 10: 1,2,5,10
// 15: 1,3,5,15
// 21: 1,3,7,21
// 28: 1,2,4,7,14,28
// We can see that 28 is the first triangle number to have over five divisors.
//
// What is the value of the first triangle number to have over five hundred divisors?

// brute force solution
function findTriangleNum() {
  var triangleNum = 0;
  var i = 1;
  var arrTriangleNum = [];

  // generate triangle numbers
  while(i > 0) {
    triangleNum += i;
    i++;

    // determine divisors
    for (k = 1; k <= triangleNum; k++) {
      if (triangleNum % k === 0) {
        arrTriangleNum.push(k);
      }
      else if (triangleNum / 2 <= k) {
        k = triangleNum;
      }
    }
    arrTriangleNum.push(triangleNum);

    // check if greater than 500
    if (arrTriangleNum.length > 500) {
      return triangleNum;
    }
    else {
      arrTriangleNum = [];
    }
  }
}

findTriangleNum();
