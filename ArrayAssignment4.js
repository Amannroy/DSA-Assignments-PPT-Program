/*
💡 **Question 1**
Given three integer arrays arr1, arr2 and arr3 **sorted** in **strictly increasing** order, return a sorted array of **only** the integers that appeared in **all** three arrays.

**Example 1:**

Input: arr1 = [1,2,3,4,5], arr2 = [1,2,5,7,9], arr3 = [1,3,4,5,8]

Output: [1,5]

**Explanation:** Only 1 and 5 appeared in the three arrays.
*/

// Code

// function findCommonElements(arr1,arr2,arr3){
//     let i=0,j=0,k=0;
//     const result =[];
//     while(i<arr1.length && j<arr2.length && k<arr3.length){
//         if(arr1[i] === arr2[j] && arr2[j] === arr3[k]){
//             result.push(arr1[i]);
//             i++;
//             j++;
//             k++;
//         }else if(arr1[i] < arr2[j]){
//             i++;
//         }else if(arr2[j] < arr3[k]){
//             j++;
//         }else{
//             k++;
//         }
//     }
//     return result;
// }
// const arr1=[1,2,3,4,5];
// const arr2=[1,2,5,7,9];
// const arr3=[1,3,4,5,8];
// console.log(findCommonElements(arr1,arr2,arr3));//[ 1, 5 ] TC=O(n), SC=O(1)

/*
💡 **Question 2**

Given two **0-indexed** integer arrays nums1 and nums2, return *a list* answer *of size* 2 *where:*

- answer[0] *is a list of all **distinct** integers in* nums1 *which are **not** present in* nums2*.*
- answer[1] *is a list of all **distinct** integers in* nums2 *which are **not** present in* nums1.

**Note** that the integers in the lists may be returned in **any** order.

**Example 1:**

**Input:** nums1 = [1,2,3], nums2 = [2,4,6]

**Output:** [[1,3],[4,6]]

**Explanation:**

For nums1, nums1[1] = 2 is present at index 0 of nums2, whereas nums1[0] = 1 and nums1[2] = 3 are not present in nums2. Therefore, answer[0] = [1,3].

For nums2, nums2[0] = 2 is present at index 1 of nums1, whereas nums2[1] = 4 and nums2[2] = 6 are not present in nums2. Therefore, answer[1] = [4,6].

*/

// Code
// function findDisjoint(nums1,nums2){
//     const set1 = new Set(nums1);
//     const set2 = new Set(nums2);
//     const answer = [[], []];
//     for(const num of nums1){
//         if(!set2.has(num)){
//             answer[0].push(num)
//         }
//     }
//     for(const num of nums2){
//         if(!set1.has(num)){
//             answer[1].push(num)
//         }
//     }
//     return answer;
// }
// const nums1 = [1,2,3];
// const nums2 = [2,4,6];
// console.log(findDisjoint(nums1,nums2)); // [ [ 1, 3 ], [ 4, 6 ] ], TC=O(n+m), SC=O(n+m)


/*
💡 **Question 3**
Given a 2D integer array matrix, return *the **transpose** of* matrix.

The **transpose** of a matrix is the matrix flipped over its main diagonal, switching the matrix's row and column indices.

**Example 1:**

Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]

Output: [[1,4,7],[2,5,8],[3,6,9]]

*/

// Code
// function transposematrix(matrix){
//     const numRows = matrix.length;
//     const numCols = matrix[0].length;
//     const transpose = [];
//     for(let j=0;j<numCols;j++){
//         const rows=[];
//         for(let i=0;i<numRows;i++){
//             rows.push(matrix[i][j]);
//         }
//         transpose.push(rows);
//     }
//         return transpose;
//     }

// const matrix = [[1,2,3],[4,5,6],[7,8,9]]; 
// console.log(transposematrix(matrix)); // [ [ 1, 4, 7 ], [ 2, 5, 8 ], [ 3, 6, 9 ] ], TC=O(n*m), SC=O(n*m)

/*
💡 **Question 4**
Given an integer array nums of 2n integers, group these integers into n pairs (a1, b1), (a2, b2), ..., (an, bn) such that the sum of min(ai, bi) for all i is **maximized**. Return *the maximized sum*.

**Example 1:**

Input: nums = [1,4,3,2]

Output: 4

**Explanation:** All possible pairings (ignoring the ordering of elements) are:

1. (1, 4), (2, 3) -> min(1, 4) + min(2, 3) = 1 + 2 = 3

2. (1, 3), (2, 4) -> min(1, 3) + min(2, 4) = 1 + 2 = 3

3. (1, 2), (3, 4) -> min(1, 2) + min(3, 4) = 1 + 3 = 4

So the maximum possible sum is 4.

*/

// Code
// function arrayPairSum(nums){
//     nums.sort((a,b) => a-b);
//     let sum=0;
//     for(let i=0;i<nums.length;i+=2){
//         sum += nums[i];
//     }
//     return sum;
// }
// const nums = [1,4,3,2];
// console.log(arrayPairSum(nums)); //4, TC=O(nlogn), SC=O(1)

/*
💡 **Question 5**
You have n coins and you want to build a staircase with these coins. The staircase consists of k rows where the ith row has exactly i coins. The last row of the staircase **may be** incomplete.

Given the integer n, return *the number of **complete rows** of the staircase you will build*.

**Example 1:**


**Input:** n = 5

**Output:** 2

**Explanation:** Because the 3rd row is incomplete, we return 2.

*/

// Code
// function arrangeCoins(n){
//     let left=0;
//     let right=n;
//     while(left <= right){
//         const mid = Math.floor((left + right) / 2);
//         const coinsNeeded = (mid * (mid + 1) / 2);
//         if(coinsNeeded === n){
//             return mid;
//         }else if(coinsNeeded < n){
//             left = mid+1;
//         }else{
//             right=mid-1;
//         }
//     }
//     return right;
// }
// const n=5;
// console.log(arrangeCoins(n));// TC=O(logn), SC=O(1)

/*
💡 **Question 6**
Given an integer array nums sorted in **non-decreasing** order, return *an array of **the squares of each number** sorted in non-decreasing order*.

**Example 1:**

Input: nums = [-4,-1,0,3,10]

Output: [0,1,9,16,100]

**Explanation:** After squaring, the array becomes [16,1,0,9,100].
After sorting, it becomes [0,1,9,16,100]
*/

// Code
// function sortedSquares(nums){
//     const n=nums.length;
//     const result=new Array(n);
//     let left=0;
//     let right=n-1;
//     let index=n-1;
//     while(left <= right){
//         const squareLeft = nums[left] ** 2;
//         const squareRight = nums[right] ** 2;
//         if(squareLeft > squareRight){
//             result[index] = squareLeft;
//             left++;
//         }else{
//             result[index] = squareRight;
//             right--;
//         }
//         index--;
//     }
//     return result;
// }
// const nums=[-4,-1,0,3,10];
// console.log(sortedSquares(nums));//[ 0, 1, 9, 16, 100 , TC=O(n), SC=O(n)


/*
💡 **Question 7**
You are given an m x n matrix M initialized with all 0's and an array of operations ops, where ops[i] = [ai, bi] means M[x][y] should be incremented by one for all 0 <= x < ai and 0 <= y < bi.

Count and return *the number of maximum integers in the matrix after performing all the operations*

**Example 1:**


**Input:** m = 3, n = 3, ops = [[2,2],[3,3]]

**Output:** 4

**Explanation:** The maximum integer in M is 2, and there are four of it in M. So return 4.

*/

// Code
// function maxCount(m, n, ops) {
//     let minRow = m;
//     let minCol = n;
  
//     for (const [row, col] of ops) {
//       minRow = Math.min(minRow, row);
//       minCol = Math.min(minCol, col);
//     }
  
//     return minRow * minCol;
//   }
  
//   const m = 3;
//   const n = 3;
//   const ops = [[2, 2], [3, 3]];
//   console.log(maxCount(m, n, ops)); // 4, TC=O(k), SC=O(1)
  
/*
💡 **Question 8**

Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].

*Return the array in the form* [x1,y1,x2,y2,...,xn,yn].

**Example 1:**

**Input:** nums = [2,5,1,3,4,7], n = 3

**Output:** [2,3,5,4,1,7]

**Explanation:** Since x1=2, x2=5, x3=1, y1=3, y2=4, y3=7 then the answer is [2,3,5,4,1,7].
*/

// Code
// function shuffle(nums, n) {
//     const result = [];
//     let i = 0;
//     let j = n;
  
//     while (i < n) {
//       result.push(nums[i]);
//       result.push(nums[j]);
//       i++;
//       j++;
//     }
  
//     return result;
//   }
  

//   const nums = [2, 5, 1, 3, 4, 7];
//   const n = 3;
//   console.log(shuffle(nums, n)); // [ 2, 3, 5, 4, 1, 7 ], TC=O(n), SC=O(n)
  