/*
Make a Person
Fill in the object constructor with the following methods below:

getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(first, last)
Run the tests to see the expected output for each method. These methods must be the only available means of interacting with the object. 
Each test will declare a new Person instance as new Person('Bob', 'Ross').
*/
const Person = function (first, last) {
  let firstName = first
  let lastName = last
  this.getFullName = function () {
    return firstName + " " + lastName
  }

  this.getFirstName = () => firstName
  this.getLastName = () => lastName
  this.setFirstName = (first) => {
    firstName = first
  }
  this.setLastName = (last) => {
    lastName = last
  }
  this.setFullName = (first, last) => {
    firstName = first
    lastName = last
  }
}

const Bob = new Person("Bob", "JJ")
console.log(Bob.setFirstName("John"))
console.log(Bob.getFirstName())
