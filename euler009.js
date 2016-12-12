// A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,
// a2 + b2 = c2
//
// For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.
//
// There exists exactly one Pythagorean triplet for which a + b + c = 1000.
// Find the product abc.


function productOfTriplet() {

  var a = 0;
  var b = 0;
  var c = 2;

  while(c > 0) {
    c++;
    for (a = 0; a < c; a++) {
      for (b = 0; b < c; b++) {
        sum = a * a + b * b;
        if (sum == c * c && a + b + c == 1000) {
          console.log(a, b, c);
          return a * b * c;
        }
      }
    }
  }
}

productOfTriplet();
