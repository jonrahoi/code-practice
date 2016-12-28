
// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143 ?



const problemThree = (largeNumber) => {
 let factorizedPrimes = []
  for( var i = 2; i <= largeNumber/i; i++){
    while(largeNumber % i === 0){
      largeNumber = largeNumber/i
      factorizedPrimes.push(i)
    }
  }

  if(largeNumber > 1) {
    factorizedPrimes.push(largeNumber)
    console.log(largeNumber)
  }
console.log(factorizedPrimes)
}

module.exports = problemThree


//Did not know how to find prime factorizations of numbers
