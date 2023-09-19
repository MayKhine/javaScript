/*
Roman Numeral Converter
Convert the given number into a roman numeral.

Roman numerals	Arabic numerals
M	1000
CM	900
D	500
CD	400
C	100
XC	90
L	50
XL	40
X	10
IX	9
V	5
IV	4
I	1
All roman numerals answers should be provided in upper-case.
*/

function convertToRoman(num) {
  const RomanLookUpArr = [
    { romanNumeral: "M", val: 1000 },
    { romanNumeral: "CM", val: 900 },
    { romanNumeral: "D", val: 500 },
    { romanNumeral: "CD", val: 400 },
    { romanNumeral: "C", val: 100 },
    { romanNumeral: "XC", val: 90 },
    { romanNumeral: "L", val: 50 },
    { romanNumeral: "XL", val: 40 },
    { romanNumeral: "X", val: 10 },
    { romanNumeral: "IX", val: 9 },
    { romanNumeral: "V", val: 5 },
    { romanNumeral: "IV", val: 4 },
    { romanNumeral: "I", val: 1 },
  ]

  let romanNumeral = ""
  let notCompleteClac = true

  for (let i = 0; i < RomanLookUpArr.length; i++) {
    if (num - RomanLookUpArr[i]["val"] >= 0) {
      romanNumeral = romanNumeral + RomanLookUpArr[i]["romanNumeral"]
      console.log("Roman: ", romanNumeral)
      num = num - RomanLookUpArr[i]["val"]
      i = i - 1
    }
  }
  return romanNumeral
}
const numIntoArr = (num) => {
  let resultArr = []
  let curNum = num
  let val = 0

  if (curNum >= 1000) {
    val = Math.floor(curNum % 1000)
    resultArr.push(curNum - val)
    curNum = val
  }

  if (curNum >= 100) {
    val = Math.floor(curNum % 100)
    resultArr.push(curNum - val)
    curNum = val
  }

  if (curNum >= 10) {
    val = Math.floor(curNum % 10)
    resultArr.push(curNum - val)
    curNum = val
  }

  resultArr.push(curNum)
  return resultArr
}

const result = convertToRoman(3456)
console.log("Result : ", result)
