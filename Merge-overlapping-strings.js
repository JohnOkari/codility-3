
//pseudo

// Start with the longest possible overlap and decrement
// until we find a matching overlap or reach zero.
// If we find a matching overlap, concatenate the two strings and return the result.
// If we don't find any overlap, simply concatenate the strings. 

// code
function mergeStrings(str1, str2) {
    const overlapLength = Math.min(str1.length, str2.length);
  
    for (let i = overlapLength; i > 0; i--) {
      if (str1.endsWith(str2.substring(0, i))) {
        return str1 + str2.substring(i);
      }
    }
  
    return str1 + str2;
  }


console.log(mergeStrings("abcde", "cdefgh")); 
console.log(mergeStrings("abaab", "aabab")); 
console.log(mergeStrings("abc", "def")); 
console.log(mergeStrings("abc", "abc")); 
console.log(mergeStrings("abaabaab", "aabaabab")); 
