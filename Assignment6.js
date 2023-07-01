/*
💡 **Question 1**

A permutation perm of n + 1 integers of all the integers in the range [0, n] can be represented as a string s of length n where:

- s[i] == 'I' if perm[i] < perm[i + 1], and
- s[i] == 'D' if perm[i] > perm[i + 1].

Given a string s, reconstruct the permutation perm and return it. If there are multiple valid permutations perm, return **any of them**.

**Example 1:**

**Input:** s = "IDID"

**Output:**

[0,4,1,3,2]

*/

// Code
// function findPermutation(s) {
//     const n = s.length;
//     const perm = Array.from({ length: n + 1 }, (_, i) => i);
//     let low = 0;
//     let high = n;
  
//     for (let i = 0; i < n; i++) {
//       if (s[i] === 'I') {
//         perm[i] = low;
//         low++;
//       } else if (s[i] === 'D') {
//         perm[i] = high;
//         high--;
//       }
//     }
  
//     perm[n] = low; 
  
//     return perm;
//   }
  

//   const s = "IDID";
//   const perm = findPermutation(s);
//   console.log(perm);// [ 0, 4, 1, 3, 2 ], TC=O(n),SC=O(n)
  

/*
💡 **Question 2**

You are given an m x n integer matrix matrix with the following two properties:

- Each row is sorted in non-decreasing order.
- The first integer of each row is greater than the last integer of the previous row.

Given an integer target, return true *if* target *is in* matrix *or* false *otherwise*.

You must write a solution in O(log(m * n)) time complexity.
**Input:** matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3

**Output:** true
*/

// Code

// function searchMatrix(matrix, target) {
//     if (matrix.length === 0 || matrix[0].length === 0) {
//       return false;
//     }
  
//     const m = matrix.length;
//     const n = matrix[0].length;
  
//     let left = 0;
//     let right = m * n - 1;
  
//     while (left <= right) {
//       const mid = Math.floor((left + right) / 2);
//       const midElement = matrix[Math.floor(mid / n)][mid % n];
  
//       if (midElement === target) {
//         return true;
//       } else if (midElement < target) {
//         left = mid + 1;
//       } else {
//         right = mid - 1;
//       }
//     }
  
//     return false;
//   }
  
  
//   const matrix = [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]];
//   const target = 3;
//   const result = searchMatrix(matrix, target);
//   console.log(result);// True, TC=O(log(m*n)), SC=O(1)
  
/*
💡 **Question 3**

Given an array of integers arr, return *true if and only if it is a valid mountain array*.

Recall that arr is a mountain array if and only if:

- arr.length >= 3
- There exists some i with 0 < i < arr.length - 1 such that:
    - arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
    - arr[i] > arr[i + 1] > ... > arr[arr.length - 1]

**Example 1:**

**Input:** arr = [2,1]

**Output:**

false
*/

// Code
// function validMountainArray(arr) {
//     const n = arr.length;
//     let i = 0;
  

//     if (n < 3 || arr[0] >= arr[1]) {
//       return false;
//     }
  
    
//     while (i < n - 1 && arr[i] < arr[i + 1]) {
//       i++;
//     }
  
//     if (i === 0 || i === n - 1) {
//       return false;
//     }
  
   
//     while (i < n - 1 && arr[i] > arr[i + 1]) {
//       i++;
//     }
  
//     return i === n - 1;
//   }
 
//   const arr = [2, 1];
//   const result = validMountainArray(arr);
//   console.log(result);// false,TC=O(n),SC=O(1)
  
/*
💡 **Question 4**

Given a binary array nums, return *the maximum length of a contiguous subarray with an equal number of* 0 *and* 1.

**Example 1:**

**Input:** nums = [0,1]

**Output:** 2

**Explanation:**

[0, 1] is the longest contiguous subarray with an equal number of 0 and 1.

*/

// Code


// function findMaxLength(nums) {
//     const map = new Map();
//     map.set(0, -1);
//     let count = 0;
//     let maxLength = 0;
  
//     for (let i = 0; i < nums.length; i++) {
//       count += nums[i] === 1 ? 1 : -1;
  
//       if (map.has(count)) {
//         maxLength = Math.max(maxLength, i - map.get(count));
//       } else {
//         map.set(count, i);
//       }
//     }
  
//     return maxLength;
//   }
  
  
//   const nums = [0, 1];
//   const maxLength = findMaxLength(nums);
//   console.log(maxLength);// 2, TC=O(n),SC=O(n)
  


/*
💡 **Question 5**

The **product sum** of two equal-length arrays a and b is equal to the sum of a[i] * b[i] for all 0 <= i < a.length (**0-indexed**).

- For example, if a = [1,2,3,4] and b = [5,2,3,1], the **product sum** would be 1*5 + 2*2 + 3*3 + 4*1 = 22.

Given two arrays nums1 and nums2 of length n, return *the **minimum product sum** if you are allowed to **rearrange** the **order** of the elements in* nums1.

**Example 1:**

**Input:** nums1 = [5,3,4,2], nums2 = [4,2,2,5]

**Output:** 40

**Explanation:**

We can rearrange nums1 to become [3,5,4,2]. The product sum of [3,5,4,2] and [4,2,2,5] is 3*4 + 5*2 + 4*2 + 2*5 = 40.

*/

//Code
// function minProductSum(nums1, nums2) {
//     nums1.sort((a, b) => a - b);
//     nums2.sort((a, b) => b - a);
  
//     let productSum = 0;
//     for (let i = 0; i < nums1.length; i++) {
//       productSum += nums1[i] * nums2[i];
//     }
  
//     return productSum;
//   }
  
  
//   const nums1 = [5, 3, 4, 2];
//   const nums2 = [4, 2, 2, 5];
//   const result = minProductSum(nums1, nums2);
//   console.log(result);// $0,TC=O(nlogn),SC=O(1)
  

/*
💡 **Question 6**

An integer array original is transformed into a **doubled** array changed by appending **twice the value** of every element in original, and then randomly **shuffling** the resulting array.

Given an array changed, return original *if* changed *is a **doubled** array. If* changed *is not a **doubled** array, return an empty array. The elements in* original *may be returned in **any** order*.

**Example 1:**

**Input:** changed = [1,3,4,2,6,8]

**Output:** [1,3,4]

**Explanation:** One possible original array could be [1,3,4]:

- Twice the value of 1 is 1 * 2 = 2.
- Twice the value of 3 is 3 * 2 = 6.
- Twice the value of 4 is 4 * 2 = 8.

Other original arrays could be [4,3,1] or [3,1,4].

*/

// Code
// function findOriginalArray(changed) {
//     if (changed.length % 2 !== 0) {
//       return [];
//     }
  
//     const frequencyMap = new Map();
//     for (const num of changed) {
//       frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
//     }
  
//     const original = [];
//     for (const num of changed) {
//       if (frequencyMap.get(num) === 0) {
//         continue;
//       }
  
//       const doubleNum = num * 2;
//       if (!frequencyMap.has(doubleNum) || frequencyMap.get(doubleNum) === 0) {
//         return [];
//       }
  
//       original.push(num);
//       frequencyMap.set(num, frequencyMap.get(num) - 1);
//       frequencyMap.set(doubleNum, frequencyMap.get(doubleNum) - 1);
//     }
  
//     return original;
//   }
  
//   const changed = [1, 3, 4, 2, 6, 8];
//   const original = findOriginalArray(changed);
//   console.log(original);//[ 1, 3, 4 ],TC=O(n),SC=O(n)
  
/*
💡 **Question 7**

Given a positive integer n, generate an n x n matrix filled with elements from 1 to n2 in spiral order.

**Input:** n = 3

**Output:** [[1,2,3],[8,9,4],[7,6,5]]
*/
// Code
// function generateMatrix(n) {
//     const matrix = new Array(n).fill(0).map(() => new Array(n).fill(0));
  
//     let top = 0;
//     let bottom = n - 1;
//     let left = 0;
//     let right = n - 1;
//     let value = 1;
  
//     while (value <= n * n) {
     
//       for (let i = left; i <= right; i++) {
//         matrix[top][i] = value++;
//       }
//       top++;
  
    
//       for (let i = top; i <= bottom; i++) {
//         matrix[i][right] = value++;
//       }
//       right--;
  
      
//       for (let i = right; i >= left; i--) {
//         matrix[bottom][i] = value++;
//       }
//       bottom--;
  
      
//       for (let i = bottom; i >= top; i--) {
//         matrix[i][left] = value++;
//       }
//       left++;
//     }
  
//     return matrix;
//   }
  
  
//   const n = 3;
//   const result = generateMatrix(n);
//   console.log(result);// [ [ 1, 2, 3 ], [ 8, 9, 4 ], [ 7, 6, 5 ] ],TC=O(n^2),SC=O(n^2)
  

/*
💡 **Question 8**

Given two [sparse matrices](https://en.wikipedia.org/wiki/Sparse_matrix) mat1 of size m x k and mat2 of size k x n, return the result of mat1 x mat2. You may assume that multiplication is always possible.

**Input:** mat1 = [[1,0,0],[-1,0,3]], mat2 = [[7,0,0],[0,0,0],[0,0,1]]

**Output:**

[[7,0,0],[-7,0,3]]
*/

// Code
// function multiplySparseMatrices(mat1, mat2) {
//     const m = mat1.length;
//     const k = mat1[0].length;
//     const n = mat2[0].length;
  
//     const result = new Array(m).fill(0).map(() => new Array(n).fill(0));
  
    
//     const mat2NonZeroMap = new Map();
//     for (let j = 0; j < k; j++) {
//       for (let i = 0; i < n; i++) {
//         if (mat2[j][i] !== 0) {
//           if (!mat2NonZeroMap.has(i)) {
//             mat2NonZeroMap.set(i, new Map());
//           }
//           mat2NonZeroMap.get(i).set(j, mat2[j][i]);
//         }
//       }
//     }
  
    
//     for (let i = 0; i < m; i++) {
//       for (let j = 0; j < n; j++) {
//         for (let l = 0; l < k; l++) {
//           if (mat1[i][l] !== 0 && mat2NonZeroMap.has(j) && mat2NonZeroMap.get(j).has(l)) {
//             result[i][j] += mat1[i][l] * mat2NonZeroMap.get(j).get(l);
//           }
//         }
//       }
//     }
  
//     return result;
//   }
  
  
//   const mat1 = [[1, 0, 0], [-1, 0, 3]];
//   const mat2 = [[7, 0, 0], [0, 0, 0], [0, 0, 1]];
//   const result = multiplySparseMatrices(mat1, mat2);
//   console.log(result);//  [ 7, 0, 0 ], [ -7, 0, 3 ] ],TC=O(m*k*n),SC=O(k*n)
  