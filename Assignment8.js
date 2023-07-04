/*
💡 **Question 1**

Given two strings s1 and s2, return *the lowest **ASCII** sum of deleted characters to make two strings equal*.

**Example 1:**

**Input:** s1 = "sea", s2 = "eat"

**Output:** 231

**Explanation:** Deleting "s" from "sea" adds the ASCII value of "s" (115) to the sum.

Deleting "t" from "eat" adds 116 to the sum.

At the end, both strings are equal, and 115 + 116 = 231 is the minimum sum possible to achieve this.

*/

// Code
// function minimumDeleteSum(s1, s2) {
//     const m = s1.length;
//     const n = s2.length;
  
//     const dp = Array(m + 1)
//       .fill(0)
//       .map(() => Array(n + 1).fill(0));
  
 
//     for (let i = 1; i <= m; i++) {
//       dp[i][0] = dp[i - 1][0] + s1.charCodeAt(i - 1);
//     }
  
//     for (let j = 1; j <= n; j++) {
//       dp[0][j] = dp[0][j - 1] + s2.charCodeAt(j - 1);
//     }
  
//     for (let i = 1; i <= m; i++) {
//       for (let j = 1; j <= n; j++) {
//         if (s1[i - 1] === s2[j - 1]) {
//           dp[i][j] = dp[i - 1][j - 1];
//         } else {
//           dp[i][j] = Math.min(
//             dp[i - 1][j] + s1.charCodeAt(i - 1),
//             dp[i][j - 1] + s2.charCodeAt(j - 1)
//           );
//         }
//       }
//     }
  
//     return dp[m][n];
//   }
  
  
//   const s1 = "sea";
//   const s2 = "eat";
//   const result = minimumDeleteSum(s1, s2);
//   console.log(result); // 231,TC=O(m*n),SC=O(m*n)
  
/*
💡 **Question 2**

Given a string s containing only three types of characters: '(', ')' and '*', return true *if* s *is **valid***.

The following rules define a **valid** string:

- Any left parenthesis '(' must have a corresponding right parenthesis ')'.
- Any right parenthesis ')' must have a corresponding left parenthesis '('.
- Left parenthesis '(' must go before the corresponding right parenthesis ')'.
- '*' could be treated as a single right parenthesis ')' or a single left parenthesis '(' or an empty string "".

**Example 1:**

**Input:** s = "()"

**Output:**

true
*/

// Code
// function isValid(s) {
//     return checkValid(s, 0, 0, 0);
//   }
  
//   function checkValid(s, index, openCount, balance) {
    
//     if (index === s.length) {
//       return openCount === 0;
//     }
  
//     const char = s.charAt(index);
  
    
//     if (char === '(') {
      
//       return checkValid(s, index + 1, openCount + 1, balance + 1) ||
        
//         checkValid(s, index + 1, openCount, balance);
//     } else if (char === ')') {
      
//       return balance > 0 && (
//         checkValid(s, index + 1, openCount - 1, balance - 1) ||
        
//         checkValid(s, index + 1, openCount, balance)
//       );
//     } else if (char === '*') {
      
//       return (
//         checkValid(s, index + 1, openCount + 1, balance + 1) ||
//         (balance > 0 && checkValid(s, index + 1, openCount - 1, balance - 1)) ||
//         checkValid(s, index + 1, openCount, balance)
//       );
//     }
  
    
//     return false;
//   }
  
  
//   const s = "()";
//   console.log(isValid(s)); // true,TC=(3^n),SC=O(n)
  

/*
💡 **Question 3**

Given two strings word1 and word2, return *the minimum number of **steps** required to make* word1 *and* word2 *the same*.

In one **step**, you can delete exactly one character in either string.

**Example 1:**

**Input:** word1 = "sea", word2 = "eat"

**Output:** 2

**Explanation:** You need one step to make "sea" to "ea" and another step to make "eat" to "ea".

*/

// Code
// function minDistance(word1, word2) {
//     return minSteps(word1, word2, 0, 0);
//   }
  
//   function minSteps(word1, word2, i, j) {
    
//     if (i === word1.length) {
//       return word2.length - j;
//     }
//     if (j === word2.length) {
//       return word1.length - i;
//     }
  
    
//     if (word1[i] === word2[j]) {
//       return minSteps(word1, word2, i + 1, j + 1);
//     }
  
    
//     const deleteFromWord1 = minSteps(word1, word2, i + 1, j);
//     const deleteFromWord2 = minSteps(word1, word2, i, j + 1);
  
    
//     return Math.min(deleteFromWord1, deleteFromWord2) + 1;
//   }
  
  
//   const word1 = "sea";
//   const word2 = "eat";
//   console.log(minDistance(word1, word2)); // 2,TC=O(2^(m+n)),SC=O(m+n)
  
/*
💡 **Question 4**

You need to construct a binary tree from a string consisting of parenthesis and integers.

The whole input represents a binary tree. It contains an integer followed by zero, one or two pairs of parenthesis. The integer represents the root's value and a pair of parenthesis contains a child binary tree with the same structure.
You always start to construct the **left** child node of the parent first if it exists.

**Input:** s = "4(2(3)(1))(6(5))"

**Output:** [4,2,6,3,1,5]
*/

// Code
// class TreeNode {
//     constructor(val) {
//       this.val = val;
//       this.left = null;
//       this.right = null;
//     }
//   }
  
//   function str2tree(s) {
//     if (s.length === 0) {
//       return null;
//     }
  
//     let numEnd = s.indexOf('(');
//     if (numEnd === -1) {
//       numEnd = s.length;
//     }
  
//     const rootVal = parseInt(s.slice(0, numEnd), 10);
//     const root = new TreeNode(rootVal);
  
//     if (numEnd === s.length) {
//       return root;
//     }
  
//     let parenthesesCount = 0;
//     let start = numEnd;
  
//     for (let i = start; i < s.length; i++) {
//       if (s[i] === '(') {
//         parenthesesCount++;
//       } else if (s[i] === ')') {
//         parenthesesCount--;
//       }
  
//       if (parenthesesCount === 0 && start === numEnd) {
//         root.left = str2tree(s.slice(start + 1, i));
//         start = i + 1;
//       } else if (parenthesesCount === 0) {
//         root.right = str2tree(s.slice(start + 1, i));
//       }
//     }
  
//     return root;
//   }
  
//   function inorderTraversal(root) {
//     const result = [];
//     traverse(root, result);
//     return result;
//   }
  
//   function traverse(node, result) {
//     if (node === null) {
//       return;
//     }
  
//     result.push(node.val);
//     traverse(node.left, result);
//     traverse(node.right, result);
//   }
  
//   // Example usage
//   const s = "4(2(3)(1))(6(5))";
//   const root = str2tree(s);
//   const inorder = inorderTraversal(root);
//   console.log(inorder); // Output: [4, 2, 3, 1, 6, 5],TC=O(n),O(n)
  
/*
💡 **Question 5**

Given an array of characters chars, compress it using the following algorithm:

Begin with an empty string s. For each group of **consecutive repeating characters** in chars:

- If the group's length is 1, append the character to s.
- Otherwise, append the character followed by the group's length.

The compressed string s **should not be returned separately**, but instead, be stored **in the input character array chars**. Note that group lengths that are 10 or longer will be split into multiple characters in chars.

After you are done **modifying the input array,** return *the new length of the array*.

You must write an algorithm that uses only constant extra space.

**Example 1:**

**Input:** chars = ["a","a","b","b","c","c","c"]

**Output:** Return 6, and the first 6 characters of the input array should be: ["a","2","b","2","c","3"]

**Explanation:**

The groups are "aa", "bb", and "ccc". This compresses to "a2b2c3".

*/

// Code
// function compress(chars) {
//     let writeIndex = 0;
//     let count = 1;
  
//     for (let i = 0; i < chars.length; i++) {
//       if (i + 1 === chars.length || chars[i] !== chars[i + 1]) {
//         chars[writeIndex] = chars[i];
//         writeIndex++;
  
//         if (count > 1) {
//           const countStr = count.toString();
//           for (let j = 0; j < countStr.length; j++) {
//             chars[writeIndex] = countStr[j];
//             writeIndex++;
//           }
//         }
  
//         count = 1;
//       } else {
//         count++;
//       }
//     }
  
//     return writeIndex;
//   }
  

//   const chars = ["a","a","b","b","c","c","c"];
//   const newLength = compress(chars);
//   console.log(newLength); //  6
//   console.log(chars.slice(0, newLength)); //  ["a", "2", "b", "2", "c", "3"],TC=O(n),SC=O(1)
  
/*
💡 **Question 6**

Given two strings s and p, return *an array of all the start indices of* p*'s anagrams in* s. You may return the answer in **any order**.

An **Anagram** is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

**Example 1:**

**Input:** s = "cbaebabacd", p = "abc"

**Output:** [0,6]

**Explanation:**

The substring with start index = 0 is "cba", which is an anagram of "abc".

The substring with start index = 6 is "bac", which is an anagram of "abc".

*/

// Code
// function findAnagrams(s, p) {
//     const result = [];
//     const pMap = new Map();
//     let count = p.length;
  

//     for (let i = 0; i < p.length; i++) {
//       const char = p[i];
//       pMap.set(char, (pMap.get(char) || 0) + 1);
//     }
  
//     function isAnagram(map) {
//       for (let [key, value] of map) {
//         if (value !== 0) {
//           return false;
//         }
//       }
//       return true;
//     }
  
//     function searchAnagrams(left, right) {
//       if (right - left === p.length) {
//         if (isAnagram(pMap)) {
//           result.push(left);
//         }
//         pMap.set(s[left], pMap.get(s[left]) + 1);
//         left++;
//       }
  
//       if (right < s.length) {
//         pMap.set(s[right], (pMap.get(s[right]) || 0) - 1);
//         searchAnagrams(left, right + 1);
//       } else if (left < s.length) {
//         pMap.set(s[left], pMap.get(s[left]) + 1);
//         searchAnagrams(left + 1, right);
//       }
//     }
  
//     searchAnagrams(0, 0);
  
//     return result;
//   }
  

//   const s = "cbaebabacd";
//   const p = "abc";
//   const indices = findAnagrams(s, p);
//   console.log(indices); // Output: [0, 6],TC=O(n*m),SC=O(m)
  

/*
💡 **Question 7**

Given an encoded string, return its decoded string.

The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.

You may assume that the input string is always valid; there are no extra white spaces, square brackets are well-formed, etc. Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there will not be input like 3a or 2[4].

The test cases are generated so that the length of the output will never exceed 105.

**Example 1:**

**Input:** s = "3[a]2[bc]"

**Output:** "aaabcbc"

*/

// Code
// function decodeString(s) {
//     let index = 0;
  
//     function decode() {
//       let result = '';
  
//       while (index < s.length && s[index] !== ']') {
//         if (isDigit(s[index])) {
//           const count = getCount();
//           index++; 
//           const decodedString = decode();
//           result += decodedString.repeat(count);
//           index++; 
//         } else {
//           result += s[index];
//           index++;
//         }
//       }
  
//       return result;
//     }
  
//     function isDigit(char) {
//       return /\d/.test(char);
//     }
  
//     function getCount() {
//       let count = 0;
//       while (index < s.length && isDigit(s[index])) {
//         count = count * 10 + parseInt(s[index]);
//         index++;
//       }
//       return count;
//     }
  
//     return decode();
//   }
  

//   const s = "3[a]2[bc]";
//   const decodedString = decodeString(s);
//   console.log(decodedString); // "aaabcbc",TC=O(n),SC=O(m)

/*
💡 **Question 8**

Given two strings s and goal, return true *if you can swap two letters in* s *so the result is equal to* goal*, otherwise, return* false*.*

Swapping letters is defined as taking two indices i and j (0-indexed) such that i != j and swapping the characters at s[i] and s[j].

- For example, swapping at indices 0 and 2 in "abcd" results in "cbad".

**Example 1:**

**Input:** s = "ab", goal = "ba"

**Output:** true

**Explanation:** You can swap s[0] = 'a' and s[1] = 'b' to get "ba", which is equal to goal.

*/

// Code
// function buddyStrings(s, goal) {
//     if (s.length !== goal.length) {
//       return false;
//     }
  
//     if (s === goal) {
//       const set = new Set(s);
//       return set.size < s.length;
//     }
  
//     const mismatchedIndices = [];
//     for (let i = 0; i < s.length; i++) {
//       if (s[i] !== goal[i]) {
//         mismatchedIndices.push(i);
//       }
//     }
  
//     if (mismatchedIndices.length !== 2) {
//       return false;
//     }
  
//     const [index1, index2] = mismatchedIndices;
//     return s[index1] === goal[index2] && s[index2] === goal[index1];
//   }
  
  
//   const s = "ab";
//   const goal = "ba";
//   console.log(buddyStrings(s, goal)); //  true,TC=O(n),SC=O(1)
  
