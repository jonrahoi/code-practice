var printCommon = require('./printCommon')
var problemOne = require('./euler/problemOne')
var problemTwo = require('./euler/problemTwo')
var problemThree = require('./euler/problemThree')
var problemFour = require('./euler/problemFour')
var problemFive = require('./euler/problemFive')


const myList = [
	[10, 15, 20, 25, 30],
	[30, 20, 10, -10, 15],
	[10, 10, 10, 15, 15],
	[3, 6, 9, 10, 15],
	[20, 20, 20, 15, 10]
]


const totalSum = 1000

// console.log('print common numbers - ')
// console.log(printCommon( myList))

// console.log('------------------')
// console.log('Find the sum of all the multiples of 3 or 5 below 1000 - ')
// console.log(problemOne(totalSum))

// console.log('------------------')
// console.log('Even Fibonacci numbers the sum of even value terms')
// console.log(problemTwo([1,2]))

// console.log('------------------')
// console.log('What is the largest prime factor of the number 600851475143')
// console.log(problemThree(600851475143))

// console.log('------------------')
// console.log('Find the largest palindrome made from the product of two 3-digit numbers.')
// console.log(problemFour(999, 999))

console.log('------------------')
console.log('smallest positive number that is evenly divisible by all of the numbers from 1 to 20')
console.log(problemFive(1))
