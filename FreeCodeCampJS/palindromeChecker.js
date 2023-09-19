/*
Palindrome Checker
Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and 
turn everything into the same case (lower or upper case) in order to check for palindromes.

We'll pass strings with varying formats, such as racecar, RaceCar, and race CAR among others.

We'll also pass strings with special symbols, such as 2A3*3a2, 2A3 3a2, and 2_A3*3#A2.
*/
function palindrome(str) {
  //remove all non aphanumeric chars
  str = str.replace(/[\W_]+/g, "").toLowerCase()
  console.log(str)
  let pivotI = Math.round(str.length / 2) - 1

  let even = str.length % 2 == 0 ? 1 : 0

  for (let i = 1; i < Math.round(str.length / 2); i++) {
    let left = pivotI - i + even
    let right = pivotI + i
    console.log(left, right, pivotI)
    if (str[left] != str[right]) {
      return false
    }
  }

  return true
}

const result = palindrome("never odd or even")
console.log("Result: ", result)
