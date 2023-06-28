/*
Question 1
Given an integer array nums of length n and an integer target, find three integers
in nums such that the sum is closest to the target.
Return the sum of the three integers.

You may assume that each input would have exactly one solution.

Example 1:
Input: nums = [-1,2,1,-4], target = 1
Output: 2

Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
*/

// Code
// function threeSumClosest(nums,target){
//     nums.sort((a,b) => a-b);
//     let closestSum = Infinity;

//     for(let i=0;i<nums.length-2;i++){
//         let left=i+1;
//         let right=nums.length-1;
//         while(left<right){
//             const sum = nums[i]+nums[left]+nums[right];
//             if(sum === target){
//                 return target;
//             }
//             if(Math.abs(sum-target) < Math.abs(closestSum-target)){
//                 closestSum=sum;
//             }
//             if(sum < target){
//                 left++;
//             }else{
//                 right--;
//             }
//         }
//     }
//     return closestSum;
// }
// const nums = [-1,2,1,-4];
// const target = 1;
// const result = threeSumClosest(nums,target);

// console.log(result); // 2, TC=O(N^2), SC=O(1)

/*
Question 2
Given an array nums of n integers, return an array of all the unique quadruplets
[nums[a], nums[b], nums[c], nums[d]] such that:
           ● 0 <= a, b, c, d < n
           ● a, b, c, and d are distinct.
           ● nums[a] + nums[b] + nums[c] + nums[d] == target

You may return the answer in any order.

Example 1:
Input: nums = [1,0,-1,0,-2,2], target = 0
Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
*/

// Code
// function fourSum(nums, target) {
//     nums.sort((a, b) => a - b);
//     const result = new Set();
  
//     for (let i = 0; i < nums.length - 3; i++) {
//       if (i > 0 && nums[i] === nums[i - 1]) {
//         continue;
//       }
  
//       for (let j = i + 1; j < nums.length - 2; j++) {
//         if (j > i + 1 && nums[j] === nums[j - 1]) {
//           continue;
//         }
  
//         let left = j + 1;
//         let right = nums.length - 1;
  
//         while (left < right) {
//           const sum = nums[i] + nums[j] + nums[left] + nums[right];
  
//           if (sum === target) {
//             result.add([nums[i], nums[j], nums[left], nums[right]].toString());
//             left++;
//             right--;
//           } else if (sum < target) {
//             left++;
//           } else {
//             right--;
//           }
//         }
//       }
//     }
  
//     return Array.from(result).map(item => item.split(',').map(Number));
//   }
  
//   const nums = [1, 0, -1, 0, -2, 2];
//   const target = 0;
//   const result = fourSum(nums, target);
//   console.log(result); // [ [ -2, -1, 1, 2 ], [ -2, 0, 0, 2 ], [ -1, 0, 0, 1 ] ], TC=O(N^3),SC=O(N)
  



/*
💡 **Question 3**
A permutation of an array of integers is an arrangement of its members into a
sequence or linear order.

For example, for arr = [1,2,3], the following are all the permutations of arr:
[1,2,3], [1,3,2], [2, 1, 3], [2, 3, 1], [3,1,2], [3,2,1].

The next permutation of an array of integers is the next lexicographically greater
permutation of its integer. More formally, if all the permutations of the array are
sorted in one container according to their lexicographical order, then the next
permutation of that array is the permutation that follows it in the sorted container.

If such an arrangement is not possible, the array must be rearranged as the
lowest possible order (i.e., sorted in ascending order).

● For example, the next permutation of arr = [1,2,3] is [1,3,2].
● Similarly, the next permutation of arr = [2,3,1] is [3,1,2].
● While the next permutation of arr = [3,2,1] is [1,2,3] because [3,2,1] does not
have a lexicographical larger rearrangement.

Given an array of integers nums, find the next permutation of nums.
The replacement must be in place and use only constant extra memory.

**Example 1:**
Input: nums = [1,2,3]
Output: [1,3,2]
*/
// Code
// function nextPermutation(nums) {
//     const n = nums.length;
    
//     let i = n - 2;
//     while (i >= 0 && nums[i] >= nums[i + 1]) {
//       i--;
//     }
  
//     if (i >= 0) {
//       let j = n - 1;
//       while (j > i && nums[j] <= nums[i]) {
//         j--;
//       }
//       swap(nums, i, j);
//     }
    
//     reverse(nums, i + 1, n - 1);
//   }
  
//   function swap(nums, i, j) {
//     const temp = nums[i];
//     nums[i] = nums[j];
//     nums[j] = temp;
//   }
  
//   function reverse(nums, start, end) {
//     while (start < end) {
//       swap(nums, start, end);
//       start++;
//       end--;
//     }
//   }
  
//   const nums = [1, 2, 3];
//   nextPermutation(nums);
//   console.log(nums); // [ 1, 3, 2 ] , TC=O(N), SC=O(1)
  
/*
Question 4
Given a sorted array of distinct integers and a target value, return the index if the
target is found. If not, return the index where it would be if it were inserted in
order.

You must write an algorithm with O(log n) runtime complexity.

Example 1:
Input: nums = [1,3,5,6], target = 5
Output: 2
*/
// Code
// function searchInsert(nums, target) {
//     let left = 0;
//     let right = nums.length - 1;
  
//     while (left <= right) {
//       const mid = Math.floor((left + right) / 2);
  
//       if (nums[mid] === target) {
//         return mid;
//       } else if (nums[mid] < target) {
//         left = mid + 1;
//       } else {
//         right = mid - 1;
//       }
//     }
  
//     return left;
//   }
  
//   const nums = [1, 3, 5, 6];
//   const target = 5;
//   const index = searchInsert(nums, target);
//   console.log(index); // 2 TC=O(logn), SC=O(1)
  

/*
💡 **Question 5**
You are given a large integer represented as an integer array digits, where each
digits[i] is the ith digit of the integer. The digits are ordered from most significant
to least significant in left-to-right order. The large integer does not contain any
leading 0's.

Increment the large integer by one and return the resulting array of digits.

**Example 1:**
Input: digits = [1,2,3]
Output: [1,2,4]

**Explanation:** The array represents the integer 123.
Incrementing by one gives 123 + 1 = 124.
Thus, the result should be [1,2,4].
*/

// Code
// function plusOne(digits) {
//     const n = digits.length;
    
//     for (let i = n - 1; i >= 0; i--) {
//       if (digits[i] === 9) {
//         digits[i] = 0;
//       } else {
//         digits[i]++;
//         return digits;
//       }
//     }
    
//     digits.unshift(1);
//     return digits;
//   }
  
//   const digits = [1, 2, 3];
//   const result = plusOne(digits);
//   console.log(result); // [ 1, 2, 4 ] TC=O(n), SC=O(1)
  
/*
Question 6
Given a non-empty array of integers nums, every element appears twice except
for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only
constant extra space.

Example 1:
Input: nums = [2,2,1]
Output: 1
*/

// Code
// function singleNumber(nums) {
//     let result = 0;
    
//     for (let i = 0; i < nums.length; i++) {
//       result ^= nums[i];
//     }
    
//     return result;
//   }
  
//   const nums = [2, 2, 1];
//   const single = singleNumber(nums);
//   console.log(single); // 1 TC=O(N), SC=O(1)
  
/*
Question 7
You are given an inclusive range [lower, upper] and a sorted unique integer array
nums, where all elements are within the inclusive range.

A number x is considered missing if x is in the range [lower, upper] and x is not in
nums.

Return the shortest sorted list of ranges that exactly covers all the missing
numbers. That is, no element of nums is included in any of the ranges, and each
missing number is covered by one of the ranges.

Example 1:
Input: nums = [0,1,3,50,75], lower = 0, upper = 99
Output: [[2,2],[4,49],[51,74],[76,99]]

Explanation: The ranges are:
[2,2]
[4,49]
[51,74]
[76,99]
*/

// Code

// function findMissingRanges(nums, lower, upper) {
//     const ranges = [];
//     let prev = lower - 1;
  
//     for (let i = 0; i <= nums.length; i++) {
//       let curr = i < nums.length ? nums[i] : upper + 1;
  
//       if (curr - prev > 1) {
//         ranges.push(getRange(prev + 1, curr - 1));
//       }
  
//       prev = curr;
//     }
  
//     return ranges;
//   }
  
//   function getRange(start, end) {
//     if (start === end) {
//       return `${start}`;
//     } else {
//       return `${start}->${end}`;
//     }
//   }
  
//   const nums = [0, 1, 3, 50, 75];
//   const lower = 0;
//   const upper = 99;
//   const result = findMissingRanges(nums, lower, upper);
//   console.log(result);// [ '2', '4->49', '51->74', '76->99' ]  TC=O(N), SC=O(1)
  
/*
Question 8
Given an array of meeting time intervals where intervals[i] = [starti, endi],
determine if a person could attend all meetings.

Example 1:
Input: intervals = [[0,30],[5,10],[15,20]]
Output: false
*/

// Code
// function canAttendMeetings(intervals) {
//     intervals.sort((a, b) => a[0] - b[0]);
  
//     for (let i = 1; i < intervals.length; i++) {
//       if (intervals[i][0] < intervals[i - 1][1]) {
//         return false;
//       }
//     }
  
//     return true;
//   }
  
//   const intervals = [[0, 30], [5, 10], [15, 20]];
//   const canAttend = canAttendMeetings(intervals);
//   console.log(canAttend);//false  TC=O(nlogn), SC=O(1)
  