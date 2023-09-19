/*
Sum All Odd Fibonacci Numbers
Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 0 and 1. 
Every additional number in the sequence is the sum of the two previous numbers. 
The first seven numbers of the Fibonacci sequence are 0, 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.
*/

function sumFibs(num) {
  let resultArr = []
  //create fib
  const fibArr = createFib(num)
  //get only odd and under num
  fibArr.filter((ele) => {
    if (ele % 2 !== 0 && ele <= num) {
      resultArr.push(ele)
    }
  })
  console.log(resultArr)
  //sum them
  let result = resultArr.reduce((sum, ele) => sum + ele, 0)
  console.log(result)
  return result
}

const createFib = (num) => {
  const fibArr = [0, 1]
  if (num <= 1) {
    return fibArr
  }
  for (let i = 2; i < num + 1; i++) {
    let prevNum = fibArr[i - 1]
    let prevNum2 = fibArr[i - 2]
    fibArr.push(prevNum + prevNum2)
  }
  return fibArr
}

const result = sumFibs(4)
console.log("Result: ", result)
