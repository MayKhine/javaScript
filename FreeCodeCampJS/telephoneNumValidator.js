/*
Telephone Number Validator
Return true if the passed string looks like a valid US phone number.

The user may fill out the form field any way they choose as long as it has the format of a valid US number. 
The following are examples of valid formats for US numbers (refer to the tests below for other variants):

555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555
For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf. 
Your job is to validate or reject the US phone number based on any combination of the formats provided above. 
The area code is required. If the country code is provided, you must confirm that the country code is 1. 
Return true if the string is a valid US phone number; otherwise return false.
*/

function telephoneCheck(str) {
  if (str.length < 10 || str.length > 16) {
    return false
  }
  let bracketFlag = 0
  let dashFlag = 0
  let digitArr = []
  for (let i = 0; i < str.length; i++) {
    if (
      str[i] == " " ||
      str[i] == "(" ||
      str[i] == ")" ||
      str[i] == "-" ||
      Number(str[i])
    ) {
      if (str[i] != " ") {
        let curDigit = str[i]

        if (Number(curDigit)) {
          digitArr.push(curDigit)
        }

        if (curDigit == "(" || curDigit == ")") {
          if (
            (i == 0 || i == 1 || i == 2) &&
            curDigit == "(" &&
            bracketFlag == 0
          ) {
            bracketFlag = 1
          } else if (
            (i == 4 || i == 5 || i == 6) &&
            curDigit == ")" &&
            bracketFlag == 1
          ) {
            bracketFlag = 2
          } else {
            return false
          }
        }
        // console.log(curDigit, i, dashFlag, bracketFlag)
        if (curDigit == "-") {
          if (
            (i == 3 || (i == 4) | (i == 5)) &&
            curDigit == "-" &&
            bracketFlag == 0
          ) {
            dashFlag = 1
          } else if (
            i >= 7 &&
            i <= 11 &&
            curDigit == "-" &&
            (dashFlag == 1 || bracketFlag == 2)
          ) {
            dashFlag = 2
          } else {
            return false
          }
        }
        // console.log("At the end", typeof curDigit, digitArr)
      }
    } else {
      return false
    }
  }

  // console.log("DigitArr: ", digitArr)
  if (digitArr.length == 10) {
    return true
  } else if (digitArr.length == 11 && digitArr[0] == 1) {
    return true
  }
  return false
}

// const result = telephoneCheck("1(555)555-5555")
const result = telephoneCheck("(555)555-5555")

console.log("Result: ", result)
