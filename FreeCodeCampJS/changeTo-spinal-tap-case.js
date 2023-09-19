// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

function spinalCase(str) {
  let tempStr = ""
  let tempArr = []
  for (let i = 0; i < str.length; i++) {
    if (str[i].toUpperCase() === str[i]) {
      if (!str[i].match(/[a-z]/i)) {
        tempArr.push(tempStr)
        tempStr = ""
      }
      if (tempStr.length > 0) {
        tempArr.push(tempStr)
        tempStr = ""
      }
    }

    if (str[i].match(/[a-z]/i)) {
      tempStr = tempStr + str[i].toLowerCase()
    }
  }
  tempArr.push(tempStr)
  let resultArr = tempArr.join("-")
  return resultArr
}

console.log(spinalCase("This Is Spinal Tap"))
console.log(spinalCase("thisIsSpinalTap"))
console.log(spinalCase("AllThe-small Things"))
