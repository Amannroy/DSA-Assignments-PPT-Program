/* 
💡  1) Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.
**Example:**
Input: nums = [2,7,11,15], target = 9
Output0 [0,1]
**Explanation:** Because nums[0] + nums[1] == 9, we return [0, 1]
 */

// Code
// function twoSum(nums,target){
//     const map = {};
//     for(let i=0;i<nums.length;i++){
//         const complement = target - nums[i];
//         if(complement in map){
//             return [map[complement],i];
//         }
//         map[nums[i]] = i;
//     }
// }
// const nums = [2,7,11,15];
// const target = 9;
// const result = twoSum(nums,target);
// console.log(result); // [0,1] here TC = O(N) & SC = O(N)

/*
💡 2) Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:

- Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
- Return k.

**Example :**
Input: nums = [3,2,2,3], val = 3
Output: 2, nums = [2,2,_*,_*]

**Explanation:** Your function should return k = 2, with the first two elements of nums being 2. It does not matter what you leave beyond the returned k (hence they are underscores)
*/

//Code

// function removeElement(nums, val) {
//     let k = 0;
//     for (let i = 0; i < nums.length; i++) {
//       if (nums[i] !== val) {
//         nums[k] = nums[i];
//         k++;
//       }
//     }
//     return k;
//   }
  
//   const nums = [3, 2, 2, 3];
//   const val = 3;
  
//   const result = removeElement(nums, val);
//   console.log(`k = ${result}`);
//   console.log(`nums = [${nums.slice(0, result)}]`); // k =2 , num = [2,2]
  // TC = O(N), SC = O(N)


/*
💡 3) Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

**Example 1:**
Input: nums = [1,3,5,6], target = 5

Output: 2
*/

// Code
// function searchInsert(nums, target){
//     let low = 0;
//     let high = nums.length-1;

//     while(low <= high){
//         let mid = Math.floor((low + high) / 2);
        
//         if(mid[nums] === target){
//             return mid;
//         }else if(nums[mid] < target){
//             low = mid + 1;
//         }else{
//             high = mid - 1;
//         }
//     }
//     return low;
// }
// const nums = [1,3,5,6];
// const target = 5;
// const index = searchInsert(nums,target);
// console.log(index); // 2     TC = O(logN), SC =O(N)


/*
💡 4) You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

Increment the large integer by one and return the resulting array of digits.

**Example 1:**
Input: digits = [1,2,3]
Output: [1,2,4]

**Explanation:** The array represents the integer 123.

Incrementing by one gives 123 + 1 = 124.
Thus, the result should be [1,2,4].

*/


//Code

// function plusOne(digits){
//     const n = digits.length;

//     for(let i = n-1; i>0; i--){
//         if(digits[i] < 9){
//             digits[i]++;
//             return digits;
//         }else{
//             digits[i] = 0
//         }
//     }
//     digits.unshift(1);
//     return digits;
// }
// const digits = [1,2,3];
// const result = plusOne(digits);
// console.log(result);  // [1,2,4]   TC = O(N) SC = O(1)


/*
💡 5) You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

**Example 1:**
Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]

**Explanation:** The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
*/

// Code

// function merge(nums1, m, nums2, n) {
//     let p1 = m - 1; // Pointer for nums1
//     let p2 = n - 1; // Pointer for nums2
//     let p = m + n - 1; // Pointer for merged array
  
//     while (p1 >= 0 && p2 >= 0) {
//       if (nums1[p1] > nums2[p2]) {
//         nums1[p] = nums1[p1];
//         p1--;
//       } else {
//         nums1[p] = nums2[p2];
//         p2--;
//       }
//       p--;
//     }
  
//     // If there are remaining elements in nums2, add them to nums1
//     while (p2 >= 0) {
//       nums1[p] = nums2[p2];
//       p2--;
//       p--;
//     }
//   }
  
//   const nums1 = [1, 2, 3, 0, 0, 0];
//   const m = 3;
//   const nums2 = [2, 5, 6];
//   const n = 3;
  
//   merge(nums1, m, nums2, n);
//   console.log(nums1); // [1,2,2,3,5,6]  TC=O(m+n), SC=O(1)  


/*
💡 6) Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

**Example 1:**
Input: nums = [1,2,3,1]

Output: true
*/

//Code

// function conatinDuplicates(nums){
//     const set = new Set();

//     for(let num of nums){
//         if(set.has(num)){
//             return true; // duplicate found
//         }
//         set.add(num);
//     }
//     return false;
// }

// const nums = [1,2,3,1];
// const result = conatinDuplicates(nums);
// console.log(result); // true  TC=O(N), SC=O(N) 


/*
💡 7)Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the nonzero elements.

Note that you must do this in-place without making a copy of the array.

**Example 1:**
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
*/

// Code

// function moveZeroes(nums){
//     left = 0;
//     right = 0;

//     while(right < nums.length){
//         if(nums[right] !== 0){
//             // Swap non-zero element to the left pointer position
//             [nums[left], nums[right]] = [nums[right], nums[left]];
//             left++;
//         }
//         right++;
//     }
// }
// const nums = [0,1,0,3,12];
// moveZeroes(nums);
// console.log(nums); // [1,3,12,0,0]  TC=O(N), SC=O(1)

/*
💡 8) You have a set of integers s, which originally contains all the numbers from 1 to n. Unfortunately, due to some error, one of the numbers in s got duplicated to another number in the set, which results in repetition of one number and loss of another number.

You are given an integer array nums representing the data status of this set after the error.

Find the number that occurs twice and the number that is missing and return them in the form of an array.

**Example 1:**
Input: nums = [1,2,2,4]
Output: [2,3]
*/


// Code

function findErrorNums(nums) {
    const n = nums.length;
    const originalSum = (n * (n + 1)) / 2;
    let missingNum, duplicatedNum;
    let numSet = new Set();
  
    for (let num of nums) {
      if (numSet.has(num)) {
        duplicatedNum = num;
      }
      numSet.add(num);
    }
  
    missingNum = originalSum - [...numSet].reduce((a, b) => a + b, 0);
  
    return [duplicatedNum, missingNum];
  }
  
  const nums = [1, 2, 2, 4];
  const result = findErrorNums(nums);
  console.log(result[0]); // Output: 2
  console.log(result[1]); // Output: 3
  




