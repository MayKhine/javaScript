/*
Sum All Primes
A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. 
For example, 2 is a prime number because it is only divisible by 1 and 2. 
In contrast, 4 is not prime since it is divisible by 1, 2 and 4.

Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.
*/
function sumPrimes(num) {
  //create an array of prime number till num
  const primeArr = createPrimes(num)
  //sum up using reduce
  return primeArr.reduce((sum, prime) => sum + prime, 0)
}

const createPrimes = (num) => {
  let primeArr = []
  for (let i = 2; i <= num; i++) {
    let isPrime = true

    for (let j = 2; j < i; j++) {
      if (i % j == 0) {
        isPrime = false
        break
      }
    }

    if (isPrime) {
      console.log("I: ", i)
      primeArr.push(i)
    }
  }
  return primeArr
}

// function sumPrimes(num) {
//   // Check all numbers for primality
//   let primes = []
//   for (let i = 2; i <= num; i++) {
//     if (
//       primes.every((prime) => {
//         console.log("Prime: ", prime, "Primes: ", primes, "i: ", i)
//         return i % prime !== 0
//       })
//     )
//       primes.push(i)
//   }
//   return primes.reduce((sum, prime) => sum + prime, 0)
// }

// sumPrimes(10)
const result = sumPrimes(10)
console.log("Result: ", result)
