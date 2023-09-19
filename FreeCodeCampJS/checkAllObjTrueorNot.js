/*
Everything Be True
Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

In other words, you are given an array collection of objects. 
The predicate pre will be an object property and you need to return true if its value is truthy. Otherwise, return false.

In JavaScript, truthy values are values that translate to true when evaluated in a Boolean context.

Remember, you can access object properties through either dot notation or [] notation.
*/

function truthCheck(collection, pre) {
  for (let i = 0; i < collection.length; i++) {
    // console.log(
    //   "Collection: ",
    //   collection[i],
    //   ", pre: ",
    //   pre,
    //   ".. ",
    //   collection[i][pre]
    // )
    if (!collection[i][pre]) {
      return false
    }
  }
  return true
}

const result = truthCheck(
  [
    { name: "Quincy", role: "Founder", isBot: false },
    { name: "Naomi", role: "", what: "" },
    { name: "Camperbot", role: "Bot", isBot: true },
  ],
  "isBot"
)
console.log("Result : ", result)
