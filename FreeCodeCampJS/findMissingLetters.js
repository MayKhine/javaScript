// Missing letters
// Find the missing letter in the passed letter range and return it.

// If all letters are present in the range, return undefined.

function fearNotLetter(str) {
  const alphabetArr = "abcdefghijklmnopqrstuvwxyz".split("")
  const startingIndex = alphabetArr.indexOf(str[0])
  for (let i = startingIndex; i < alphabetArr.length; i++) {
    // console.log("Cur: ", alphabetArr[i], str[i - startingIndex])
    if (alphabetArr[i] != str[i - startingIndex]) {
      // console.log("Not match: ", alphabetArr[i])
      return alphabetArr[i]
    }
  }
  return undefined
}

console.log(fearNotLetter("abce"))
