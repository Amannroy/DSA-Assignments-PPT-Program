/*
💡 **Question 1**
Given an integer array nums of 2n integers, group these integers into n pairs (a1, b1), (a2, b2),..., (an, bn) such that the sum of min(ai, bi) for all i is maximized. Return the maximized sum.

**Example 1:**
Input: nums = [1,4,3,2]
Output: 4

**Explanation:** All possible pairings (ignoring the ordering of elements) are:

1. (1, 4), (2, 3) -> min(1, 4) + min(2, 3) = 1 + 2 = 3
2. (1, 3), (2, 4) -> min(1, 3) + min(2, 4) = 1 + 2 = 3
3. (1, 2), (3, 4) -> min(1, 2) + min(3, 4) = 1 + 3 = 4
So the maximum possible sum is 4
*/

// Code
// function arrayPairSum(nums){

//     nums.sort((a,b) => a - b);

    
//     let maxSum = 0;

//     for(let i=0; i < nums.length; i += 2){

//         maxSum += Math.min(nums[i],nums[i+1]);
//     }
    
//     return maxSum;
// }
// const nums = [1,4,3,2];
// const result = arrayPairSum(nums);
// console.log(result); //4  TC=O(nlogn) SC=O(1)


/*
Question 2
Alice has n candies, where the ith candy is of type candyType[i]. Alice noticed that she started to gain weight, so she visited a doctor. 

The doctor advised Alice to only eat n / 2 of the candies she has (n is always even). Alice likes her candies very much, and she wants to eat the maximum number of different types of candies while still following the doctor's advice. 

Given the integer array candyType of length n, return the maximum number of different types of candies she can eat if she only eats n / 2 of them.

Example 1:
Input: candyType = [1,1,2,2,3,3]
Output: 3

Explanation: Alice can only eat 6 / 2 = 3 candies. Since there are only 3 types, she can eat one of each type.
*/


// Code
// function maxCandies(candyType){
//     let limit = candyType.length/2;
//     let UniqueCandies = new Set();

//     for(let candy in candyType){
//         UniqueCandies.add(candy);
//         if(UniqueCandies.size === limit){
//             break;
//         }
//     }
//     return UniqueCandies.size;
// }

// const candyType = [1,1,2,2,3,3];
// const result = maxCandies(candyType);
// console.log(result); // 3 TC=O(N), SC=O(N/2)

/*
Question 3
We define a harmonious array as an array where the difference between its maximum value
and its minimum value is exactly 1.

Given an integer array nums, return the length of its longest harmonious subsequence
among all its possible subsequences.

A subsequence of an array is a sequence that can be derived from the array by deleting some or no elements without changing the order of the remaining elements.

Example 1:
Input: nums = [1,3,2,2,5,2,3,7]
Output: 5

Explanation: The longest harmonious subsequence is [3,2,2,2,3].
*/

// Code
// function findLHS(nums) {
//     const freqMap = new Map();
  
//     for (let num of nums) {
//       freqMap.set(num, (freqMap.get(num) || 0) + 1);
//     }
  
//     let longestLength = 0;
  
//     for (let [key, value] of freqMap) {
//       if (freqMap.has(key + 1)) {
//         const currentLength = value + freqMap.get(key + 1);
//         if (currentLength > longestLength) {
//           longestLength = currentLength;
//         }
//       }
//     }

//     return longestLength;
//   }
 
//   const nums = [1, 3, 2, 2, 5, 2, 3, 7];
//   const result = findLHS(nums);
//   console.log(result); // Output: 5  TC=O(N), SC=O(N)



/*
Question 4
You have a long flowerbed in which some of the plots are planted, and some are not.
However, flowers cannot be planted in adjacent plots.
Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.

Example 1:
Input: flowerbed = [1,0,0,0,1], n = 1
Output: true
*/

// Code
// function canPlaceFlowers(flowered,n){
//     let count=0;
//     let i=0;
//     while(i < flowered.length){
//         if(flowered[i] === 0 && (i === 0 || flowered[i - 1] === 0) && (i === flowered.length-1 || flowered[i+1] === 0) ) 
//     {
//     flowered[i] = 1;
//     count++;
//     if(count >= n){
//         return true;
//     }
// }
// i++;
// }
// return count >= n;
// }

// const flowered = [1,0,0,0,1];
// const n=1;
// const result = canPlaceFlowers(flowered,n);
// console.log(result); // true TC=O(N), SC=O(1)

/*
Question 5
Given an integer array nums, find three numbers whose product is maximum and return the maximum product.

Example 1:
Input: nums = [1,2,3]
Output: 6
*/

// Code
// function maximumProduct(nums){
//     nums.sort((a,b) => a-b);

//     const lastThreeProduct = nums[nums.length-1] * nums[nums.length-2] * nums[nums.length-3];
//     const firstThreeproduct = nums[0] * nums[1] * nums[nums.length-1];

//     return Math.max(lastThreeProduct,firstThreeproduct);
// }
// const nums = [1,2,3];
// const result = maximumProduct(nums);
// console.log(result); // 6 TC=O(NlogN), SC=O(1)


/*
Question 6
Given an array of integers nums which is sorted in ascending order, and an integer target,
write a function to search target in nums. If target exists, then return its index. Otherwise,
return -1.

You must write an algorithm with O(log n) runtime complexity.

Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4

Explanation: 9 exists in nums and its index is 4
*/

// Code
// function search(nums,target){
//     let left=0;
//     let right=nums.length-1;
//     while(left <= right){
//         const mid = Math.floor((left+right)/2);
//         if(nums[mid] === target){
//             return mid;
//         }else if(nums[mid] < target){
//             left = mid + 1;
//         }else{
//             right = mid - 1;
//         }
//     }
//     return -1;
// }
// const nums = [-1,0,3,5,9,12];
// const target=9;
// const result = search(nums,target);
// console.log(result); // 4 TC=O(logN), SC=O(1)



/*
Question 7
An array is monotonic if it is either monotone increasing or monotone decreasing.

An array nums is monotone increasing if for all i <= j, nums[i] <= nums[j]. An array nums is
monotone decreasing if for all i <= j, nums[i] >= nums[j].

Given an integer array nums, return true if the given array is monotonic, or false otherwise.

Example 1:
Input: nums = [1,2,2,3]
Output: true
*/

// Code
// function isMonotonic(nums){
//     let isIncreasing = true;
//     let isDecreasing = true;

//     for(let i=0;i<nums.length;i++){
//         if(nums[i] < nums[i-1]){
//             isDecreasing = fasle;
//         }
//         if(nums[i] > nums[i-1]){
//             isDecreasing = false;
//         }
//     }
//     return isIncreasing || isDecreasing;

// }
// const nums = [1,2,2,3];
// const result = isMonotonic(nums);
// console.log(result); // true TC=O(N), SC=O(1)

/*
Question 8
You are given an integer array nums and an integer k.

In one operation, you can choose any index i where 0 <= i < nums.length and change nums[i] to nums[i] + x where x is an integer from the range [-k, k]. You can apply this operation at most once for each index i.

The score of nums is the difference between the maximum and minimum elements in nums.

Return the minimum score of nums after applying the mentioned operation at most once for each index in it.

Example 1:
Input: nums = [1], k = 0
Output: 0

Explanation: The score is max(nums) - min(nums) = 1 - 1 = 0.
*/

// Code
function minimumScore(nums, k) {
    let minScore = Infinity;
  
    for (let x = -k; x <= k; x++) {
      let min = Infinity;
      let max = -Infinity;
  
      for (let i = 0; i < nums.length; i++) {
        const modifiedNum = nums[i] + x;
        min = Math.min(min, modifiedNum);
        max = Math.max(max, modifiedNum);
      }
  
      minScore = Math.min(minScore, max - min);
    }
  
    return minScore;
  }
const nums = [1];
const k = 0;
const result = minimumScore(nums,k);
console.log("Minimum Score:", result);  