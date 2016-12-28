
// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
// Find the largest palindrome made from the product of two 3-digit numbers.

const problemFour = (a,b) => {

 var largestPaladromes = []

function runNumbers(num1, num2){
      testPal(num1, num2)
    }


runNumbers(a, b)


function testPal(a, b){
  var num1 = a
  var num2 = b
  var totalNum = num1 * num2
  var numArr = totalNum.toString().split("")
  var reverseNumArr = numArr.reverse()
  var reverseNum = reverseNumArr.join("")


  if(totalNum === parseInt(reverseNum)){
    largestPaladromes.push({palladrom: totalNum, num1: num1, num2: num2 })
  } else {
    var a = a - 1
    runNumbers(a, b)
  }
}


console.log(largestPaladromes)

}

module.exports = problemFour
