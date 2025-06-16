// Palindrome Checker
// Write a function that checks whether a given string is a palindrome. Ignore casing and spaces.
// Example Input: "Race car"
// Expected Output: True
 
 
 function isPalindrome(str) {
     const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");
     return cleaned === cleaned.split('').reverse().join('');
 }
 
 console.log(isPalindrome("Race car"))