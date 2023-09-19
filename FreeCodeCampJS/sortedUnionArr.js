/*
Sorted Union
Write a function that takes two or more arrays and 
returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, 
but with no duplicates in the final array.

The unique numbers should be sorted by their original order, 
but the final array should not be sorted in numerical order.

Check the assertion tests for examples.
*/
function uniteUnique(...allArrArg) {
  let vistedEleArr = []
  for (let i = 0; i < allArrArg.length; i++) {
    for (let j = 0; j < allArrArg[i].length; j++) {
      // console.log("which one: ", allArrArg[i][j])
      if (vistedEleArr.indexOf(allArrArg[i][j]) == -1) {
        vistedEleArr.push(allArrArg[i][j])
      }
    }
  }
  console.log(vistedEleArr)
  return vistedEleArr
}

let result = uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])
console.log("Result: ", result) //1 3 2 5 4
