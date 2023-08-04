function isPalindrome(word) {
  // reverse the input string
    const rev = word.split("").reverse().join("");
  //compare the reveresd string to the input
    if (rev == word) {
      return true
     }
      return false;
}

/* 
  reverse the input string and if the reversed string is the same as the input then return true
  if else return false
*/

/*
  Add written explanation of your solution here
  in this lab i need to find a solution that will work properly on palindrome's 
  giving a true or false answer. I found the easiest way for this problem was to 
  use the inbuilt string methods split() , reverse() and join() to get the correct answer.
  this method takes a string and splits it into a character array then reveresd the array
  and finally joined them back into a string.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));
  
  console.log("");
  
  console.log("Expecting: true");
  console.log("=>", isPalindrome("hannah"));
  
  console.log("");
  
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");
  
  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));
  
  console.log("");
  
  console.log("=>", isPalindrome("robot"));
  console.log("Expecting: false");
  
  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("ab"));

  console.log("=>", isPalindrome("damon"));
  console.log("Expecting: false");
  
  console.log("");

}

module.exports = isPalindrome;
