/*Algorithm
  //1. take in the word and split into individual letters
  //2. reverse the order of the word
  //3. join back the split word into one string
  //4. compare whether the initial word and the one reversed are the same



/* 
  create a new variable that will hold in the array created after splitting the word.
  new word = split the word
  reverse the order using the reverse command and then,
  join back the array into a string using the join function
  compare the two words to see if they reverse is the same as the original word
*/

const { consoleLog } = require("mocha/lib/reporters/base")

/*
  Add written explanation of your solution here
*/
function isPalindrome(word){
  const array = word.split('')//split the word into individual letters in an array
  const reverseWord = array.reverse().join('') //reverse the order of the array and join the items into one string
  if (reverseWord === word) {//condition for checking if the reversed word and the original word are similar
    console.log("True")
    return true
  }
  else{
    console.log("false")
    return false
  }
  
  
}
isPalindrome("racecar")


if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
