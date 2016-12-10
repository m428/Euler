// A palindromic number reads the same both ways. The largest palindrome made
//from the product of two 2-digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product of two 3-digit numbers.

function findPalindrome() {

  var product = 0;
  var string = '';
  var palindrome = 0;
  var temp = 0;

  // multiply all possible 3-digit numbers pairs
  for (i = 999; i >= 100; i--) {
    for (k = 999; k >= 100; k--) {
      product = i * k;
      // convert integer to string for comparison
      string = product.toString().split('');
      // check if palindrome
      if (string[0] === string[5] && string[1] === string[4] && string[2] === string[3]) {
        // if palindrome convert it back into an interger and store it
        string = string.join('')
        temp = parseInt(string)
        console.log(temp);
          // check for largest palindrome
          if (temp > palindrome) {
            palindrome = temp;
          }
      }
    }
  }
  console.log(palindrome);
  return palindrome;
}

findPalindrome();
