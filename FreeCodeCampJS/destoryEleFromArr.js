// You will be provided with an initial array as the first argument to the destroyer function,
// followed by one or more arguments.
// Remove all elements from the initial array that are of the same value as these arguments.

// The function must accept an indeterminate number of arguments, also known as a variadic function.
// You can access the additional arguments by adding a rest parameter to the function definition or using the arguments object.

function destroyer(arr, ...rest) {
  for (let i = 0; i < rest.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      let destoryEle = rest[i]
      if (destoryEle === arr[j]) {
        console.log("destory: ", destoryEle, arr[j])
        let arr1 = arr.slice(0, j)
        let arr2 = arr.slice(j + 1, arr.length)
        arr = arr1.concat(arr2)
        console.log("current Arr: ", arr)
        j-- //decrement J since we cut off one element from the arr
      }
    }
  }
  return arr
}

let result = destroyer([1, 2, 3, 1, 2, 3], 2, 3)
// let result = destroyer([3, 5, 1, 2, 2], 2, 3, 5)
console.log("Result: ", result)
