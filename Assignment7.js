/*

💡 **Question 1**

Given two strings s and t, *determine if they are isomorphic*.

Two strings s and t are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

**Example 1:**

**Input:** s = "egg", t = "add"

**Output:** true
*/

// Code
// function isIsomorphic(s, t) {
//   if (s.length !== t.length) {
//     return false; 
//   }
  
//   const sToTMap = {}; 
//   const tToSMap = {}; 
  
//   for (let i = 0; i < s.length; i++) {
//     const charS = s[i];
//     const charT = t[i];
    
    
//     if ((sToTMap[charS] && sToTMap[charS] !== charT) || (tToSMap[charT] && tToSMap[charT] !== charS)) {
//       return false;
//     }
    
    
//     if (!sToTMap[charS] && !tToSMap[charT]) {
//       sToTMap[charS] = charT;
//       tToSMap[charT] = charS;
//     }
//   }
  
//   return true;
// }


// const s = "egg";
// const t = "add";
// console.log(isIsomorphic(s, t));  //true, TC=O(n), SC=O(n)


/*
💡 **Question 2**

Given a string num which represents an integer, return true *if* num *is a **strobogrammatic number***.

A **strobogrammatic number** is a number that looks the same when rotated 180 degrees (looked at upside down).

**Example 1:**

**Input:** num = "69"

**Output:**

true
*/

// Code
// function isStrobogrammatic(num) {
//     const strobogrammaticDigits = {
//       '0': '0',
//       '1': '1',
//       '6': '9',
//       '8': '8',
//       '9': '6'
//     };
    
//     let left = 0;
//     let right = num.length - 1;
    
//     while (left <= right) {
//       const leftDigit = num[left];
//       const rightDigit = num[right];
      
//       if (!strobogrammaticDigits.hasOwnProperty(leftDigit) || strobogrammaticDigits[leftDigit] !== rightDigit) {
//         return false;
//       }
      
//       left++;
//       right--;
//     }
    
//     return true;
//   }
  

//   const num = "69";
//   console.log(isStrobogrammatic(num)); // true,TC=O(n),SC=O(1)
  

/*
💡 **Question 3**

Given two non-negative integers, num1 and num2 represented as string, return *the sum of* num1 *and* num2 *as a string*.

You must solve the problem without using any built-in library for handling large integers (such as BigInteger). You must also not convert the inputs to integers directly.

**Example 1:**

**Input:** num1 = "11", num2 = "123"

**Output:**

"134"

*/

// Code
// function addStrings(num1, num2) {
//     let result = '';
//     let carry = 0;
//     let i = num1.length - 1;
//     let j = num2.length - 1;
    
//     while (i >= 0 || j >= 0 || carry > 0) {
//       const digit1 = i >= 0 ? Number(num1[i]) : 0;
//       const digit2 = j >= 0 ? Number(num2[j]) : 0;
//       const sum = digit1 + digit2 + carry;
      
//       result = (sum % 10) + result;
//       carry = Math.floor(sum / 10);
      
//       i--;
//       j--;
//     }
    
//     return result;
//   }
  
  
//   const num1 = "11";
//   const num2 = "123";
//   console.log(addStrings(num1, num2)); // "134", TC=O(max(n1, n2)),SC=O(max(n1, n2))
  
/*
💡 **Question 4**

Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

**Example 1:**

**Input:** s = "Let's take LeetCode contest"

**Output:** "s'teL ekat edoCteeL tsetnoc"

*/

// Code
// function reverseWords(s) {
//     const words = s.split(' ');
    
//     for (let i = 0; i < words.length; i++) {
//       words[i] = reverseString(words[i]);
//     }
    
//     return words.join(' ');
//   }
  
//   function reverseString(str) {
//     let reversed = '';
    
//     for (let i = str.length - 1; i >= 0; i--) {
//       reversed += str[i];
//     }
    
//     return reversed;
//   }
  

//   const s = "Let's take LeetCode contest";
//   console.log(reverseWords(s)); // "s'teL ekat edoCteeL tsetnoc",TC=O(n),SC=O(n)
  
/*
💡 **Question 5**

Given a string s and an integer k, reverse the first k characters for every 2k characters counting from the start of the string.

If there are fewer than k characters left, reverse all of them. If there are less than 2k but greater than or equal to k characters, then reverse the first k characters and leave the other as original.

**Example 1:**

**Input:** s = "abcdefg", k = 2

**Output:**

"bacdfeg"

*/

// Code
// function reverseStr(s, k) {
//     const chars = s.split('');
    
//     for (let i = 0; i < chars.length; i += 2 * k) {
//       let start = i;
//       let end = Math.min(i + k - 1, chars.length - 1);
      
//       while (start < end) {
//         const temp = chars[start];
//         chars[start] = chars[end];
//         chars[end] = temp;
//         start++;
//         end--;
//       }
//     }
    
//     return chars.join('');
//   }
  

//   const s = "abcdefg";
//   const k = 2;
//   console.log(reverseStr(s, k)); //"bacdfeg",TC=O(n),SC=O(n)
  

/*
💡 **Question 6**

Given two strings s and goal, return true *if and only if* s *can become* goal *after some number of **shifts** on* s.

A **shift** on s consists of moving the leftmost character of s to the rightmost position.

- For example, if s = "abcde", then it will be "bcdea" after one shift.

**Example 1:**

**Input:** s = "abcde", goal = "cdeab"

**Output:**

true

*/

// Code
// function rotateString(s, goal) {
//     if (s.length !== goal.length) {
//       return false; 
//     }
    
//     const concatenated = s + s;
    
//     return concatenated.includes(goal);
//   }
  
  
//   const s = "abcde";
//   const goal = "cdeab";
//   console.log(rotateString(s, goal)); // true,TC=O(n),SC=O(n)
  

/*
💡 **Question 7**

Given two strings s and t, return true *if they are equal when both are typed into empty text editors*. '#' means a backspace character.

Note that after backspacing an empty text, the text will continue empty.

**Example 1:**

**Input:** s = "ab#c", t = "ad#c"

**Output:** true

**Explanation:**

Both s and t become "ac".

*/

// Code
// function backspaceCompare(s, t) {
//     const stackS = [];
//     const stackT = [];
    
//     for (let char of s) {
//       if (char !== '#') {
//         stackS.push(char);
//       } else if (stackS.length > 0) {
//         stackS.pop();
//       }
//     }
    
//     for (let char of t) {
//       if (char !== '#') {
//         stackT.push(char);
//       } else if (stackT.length > 0) {
//         stackT.pop();
//       }
//     }
    
//     return stackS.join('') === stackT.join('');
//   }
  

//   const s = "ab#c";
//   const t = "ad#c";
//   console.log(backspaceCompare(s, t)); // true,TC=O(n),SC=O(n)
  
/*
💡 **Question 8**

You are given an array coordinates, coordinates[i] = [x, y], where [x, y] represents the coordinate of a point. Check if these points make a straight line in the XY plane.

**Example 1:**

**Input:** coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]

**Output:** true

*/

// Code
// function checkStraightLine(coordinates) {
//     const [x0, y0] = coordinates[0];
//     const [x1, y1] = coordinates[1];
//     const initialSlope = (y1 - y0) / (x1 - x0);
    
//     for (let i = 2; i < coordinates.length; i++) {
//       const [xi, yi] = coordinates[i];
//       const [xPrev, yPrev] = coordinates[i - 1];
//       const slope = (yi - yPrev) / (xi - xPrev);
      
//       if (slope !== initialSlope) {
//         return false;
//       }
//     }
    
//     return true;
//   }
  

//   const coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]];
//   console.log(checkStraightLine(coordinates)); // true,TC=O(n),SC=O(1)
  