// Compare two arrays and return a new array with any items only found in one of the two given arrays,
// but not both. In other words, return the symmetric difference of the two arrays.

// Note: You can return the array with its elements in any order.

function diffArray(arr1, arr2) {
  const newArr = [...diff(arr1, arr2), ...diff(arr2, arr1)]

  return newArr
}

const diff = (a1, a2) => {
  return a1.filter((ele) => a2.indexOf(ele) == -1)
}
let result = diffArray([1, 2, 7, 3, 5], [1, 2, 3, 4, 5])
console.log("Result: ", result)
