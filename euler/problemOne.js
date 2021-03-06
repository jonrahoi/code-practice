

///////////////Problem 1
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.


const problemOne = (totalSum) => {

    let array = []

    for (var i = 1; i < totalSum; i++) {
      if(i % 3 && i % 5){
        // do nothing
      } else{
        array.push(i)
      }
    }

  return array.reduce(function(a, b){ return a + b})
}

module.exports = problemOne
