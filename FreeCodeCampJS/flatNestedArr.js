// Steamroller
// Flatten a nested array. You must account for varying levels of nesting.
function steamrollArray(arr) {
  const resultArr = []

  flatArr(arr, arr, resultArr)
  console.log(resultArr)
  return resultArr
}
const flatArr = (arr, _arr, result) => {
  for (let i = 0; i < arr.length; i++) {
    console.log("Cur: ", arr, ", arr[i]: ", arr[i], ", Result: ", result)
    if (Array.isArray(arr[i]) != true) {
      result.push(arr[i])
    } else {
      flatArr(arr[i], _arr, result)
    }
  }
}
const result = steamrollArray([1, {}, [3, [[4]]]]) //([1, [], [3, [[4]]]]) //([[3, [[4]]]])
console.log(result)
