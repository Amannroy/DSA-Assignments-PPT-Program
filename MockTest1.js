/* 1) Move Zeroes
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

Example 1:
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]

Example 2:
Input: nums = [0]
Output: [0]

Constraints:
a. 1 <= nums.length <= 10^4
b. -2^31 <= nums[i] <= 2^31 - 1
*/


// function moveZeroes(nums){
//     let left=0;
//     for(let right=0;right<nums.length;right++){
//         if(nums[right] !== 0){
//             [nums[left],nums[right]] = [nums[right], nums[left]];
//             left++;
//         }
//     }
// }
// let nums = [0,1,0,3,12];
// moveZeroes(nums);
// console.log(nums); // [1,3,12,0,0]  TC=O(N), SC=O(N)

/*
First Unique Character in a String

Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

Example 1:
Input: s = "leetcode"
Output: 0

Example 2:
Input: s = "loveleetcode"
Output: 2

Example 3:
Input: s = "aabb"
Output: -1

Constraints:
a. 1 <= s.length <= 10^5
b. s consists of only lowercase English letters.

*/


function firstUniqChar(s){
    const countChar = {};

    // Count the frequency of each character
    for(let i=0;i<s.length;i++){
         const char = s[i];

         // if the character is already a property in countchar increase its count by 1. Otherwise add it to countChar with a count of 1
         countChar[char] = (countChar[char] || 0) + 1;
         
         // Finding the first non repeating character
         for(let i=0;i<s.length;i++){
            const char = s[i];
            if(countChar[char] === 1){
                return i;
            }
         }
         return -1;
    }
}
const s1 = "leetcode";
console.log(firstUniqChar(s1)); // 0 TC=O(N) SC=O(N)

