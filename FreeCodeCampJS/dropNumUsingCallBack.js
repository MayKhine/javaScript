// Drop it
// Given the array arr, iterate through and remove each element starting from the first element (the 0 index)
// until the function func returns true when the iterated element is passed through it.

// Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.
function dropElements(arr, func) {
  for (let i = 0; i < arr.length; i++) {
    console.log("i: ", i, ", arrr[i]", arr[i], func(arr[i]))
    if (func(arr[i])) {
      return arr
    } else {
      arr.shift()
      i--
    }
  }
  return arr
}

// const result = dropElements([1, 2, 3, 4], function (n) {
//   return n >= 3
// })

const result = dropElements([0, 1, 0, 1], function (n) {
  return n === 1
})
console.log("Result: ", result)
