// Smallest Common Multiple
// Find the smallest common multiple of the provided parameters that can be evenly divided by both,
// as well as by all sequential numbers in the range between these parameters.

// The range will be an array of two numbers that will not necessarily be in numerical order.

// For example, if given 1 and 3, find the smallest common multiple of both 1 and 3
// that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.
function smallestCommons(arr) {
  arr.sort((a, b) => a - b)
  let notFound = true
  const numArr = []
  let commonMultiple = arr[1]
  for (let i = arr[0]; i <= arr[1]; i++) {
    numArr.push(i)
  }

  console.log(numArr)
  console.log(5 % 2) //num % x => divisible by x
  do {
    for (let i = 0; i < numArr.length; i++) {
      // console.log("Common Multiple:", commonMultiple, numArr[i], notFound)

      if (commonMultiple % numArr[i] == 0) {
        notFound = false
      } else {
        notFound = true
        commonMultiple++
        break
      }
    }
  } while (notFound)
  return commonMultiple
}

let result = smallestCommons([1, 13])
console.log("result: ", result)
