//Palindrome

//num:121 true
//num :3544  false



// function checkPalindrome(num){
//     let revNum = 0;
//     let orignalNum = num;
//         while(num){
//             result = num%10;
//             revNum = revNum*10+result
//             num = Math.floor(num/10);
//         }
       
//     if(revNum===orignalNum) return true;
//     return false
    
// }

// console.log(checkPalindrome(1213));
// console.log(checkPalindrome(1253));
// console.log(checkPalindrome(121));


//max sum of p consucutive array

// let arr = [2,3,4,5,6,-1,0,9,8]
// p=3

// function findMax(arr,p){
//     let maxSum =0;
//     for(let i=0;i<arr.length-p+1;i++){
//         let sum = 0;
//         for(let j=i;j<i+p;j++){
//             sum = arr[j]+sum
//         }   
//         if(sum>maxSum){
//             maxSum=sum;
//         }
//     }
//     return maxSum

// }

// console.log("findmaxsum", findMax(arr,p))

// function findMaxUsingWS(arr,p){
//     let sum=0;
//     let maxSum=0;
//     for(let i=0;i<p;i++){
//         sum = sum +arr[i]
//     }
//     maxSum=sum;
//     for(let i=p;i<arr.length;i++){
//         sum = sum + arr[i] - arr[i-p];
//         if(maxSum<sum){maxSum=sum}
//     }
//     return maxSum;

// }
// console.log("findMaxUsingWS",findMaxUsingWS(arr,p))

// const strname = "abcbdae";

// function findLongestSubstrin(str){
//     let left=0;
//     let maxSize=0;

//     const setMap = new Set();
//     for(let i=0;i<str.length;i++){
//         while(setMap.has(str[i])){
//             setMap.delete(str[left])
//             left++;
//         }
//         setMap.add(str[i])
//         let size = i-left+1
//        if(maxSize<size){maxSize=size}

//     }
//     return maxSize;
// }

// console.log("ggg",findLongestSubstrin(strname))

// const str = "acbkbecad"
// //Longest Palindrome Substring
// var longestPalindrome= function(str){
//     let maxSize=1;
//     let maxSubstring =str[0]
//     for(let i=1;i<str.length;i++){
//         // odd
//         let low=i;
//         let high = i;

//         while(str[low]===str[high] && low>=0 && high<=str.length-1){
//             low--;
//             high++;
//         }
//         size = high-low-1;
//         if(size>maxSize){
//             maxSize = size;
//             maxSubstring= str.substring(low+1,high)
//         }
//          // even
//         low=i;
//         high = i-1;

//         while(str[low]===str[high] && low>=0 && high<=str.length-1){
//             low--;
//             high++;
//         }
//         size = high-low-1;
//         if(size>maxSize){
//             maxSize = size;
//             maxSubstring= str.substring(low+1,high)
//         }
//     }
//     return maxSubstring
// }
// console.log("longestPalindrome",longestPalindrome(str))




//Merge two Sorted Array 
// const arr1=[1,5,6,7,22];
// const arr2=[4,9,11,22,27];

// const mergeSortedArray = (arr1,arr2) =>{
//     let resultArray = [];
//     while(arr1.length!=0 && arr2.length!=0){
//     let num = arr1[0]<arr2[0]?arr1.shift():arr2.shift();
//     resultArray.push(num)
//     }
//     if(arr1.length>0){
//         resultArray=[...resultArray,...arr1]
//     }
//     if(arr2.length>0){
//         resultArray=[...resultArray,...arr2]
//     }
//     let newSet = new Set(resultArray);
//     console.log([...newSet])
    
//     return resultArray
// }


// console.log("mergeSortedArray",mergeSortedArray(arr1,arr2))

//Merge Sorted Array
//Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]
// Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
// The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
// Example 2:

// Input: nums1 = [1], m = 1, nums2 = [], n = 0
// Output: [1]
// Explanation: The arrays we are merging are [1] and [].
// The result of the merge is [1].
// Example 3:

// Input: nums1 = [0], m = 0, nums2 = [1], n = 1
// Output: [1]
// Explanation: The arrays we are merging are [] and [1].
// The result of the merge is [1].
// Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.



//  


//second Largest number in the array

// const arr2=[4,34,9,11,6,22,2];

// const secondLargestNum = (arr2) =>{
//     let largest=arr2[0];
//     let secondLargestNum=null;
//     for(let i=0;i<arr2.length;i++){
//         if(arr2[i]>largest){
//             secondLargestNum=largest;
//             largest = arr2[i];
//         }
//         else if(arr2[i]>secondLargestNum){
//             secondLargestNum=arr2[i];
//         }
//     }
//     return secondLargestNum;
// }

// console.log("secondLargestNum",secondLargestNum(arr2))

// if array contains any duplicate 

// const arr=[2,5,7,2,8,10.4,91];

//Approach 1 using set

// function isDuplicates(arr){
//     const newSet = new Set(arr);
//     console.log(newSet.size,arr.length)
//     return newSet.size == arr.length;
// } 

//Approach 2 using map

// function isDuplicates(arr){
//     let map= {};
//     for(let i=0;i<arr.length;i++){
//         console.log(map)
//         if(map[arr[i]]){
            
//             return false
//         }else{
//             map[arr[i]] = i
//         }
//     }

//     return true
// }

// console.log(isDuplicates(arr))

//Anagram
// const str1="rat";
// const str2="art";

// const checkAnagram = (str1,str2) =>{
//     if(str1.length !== str2.length) return false;
//     let map = {};
//     for(let i=0;i<str1.length;i++){
//         if(map[str1[i]]){
//             map[str1[i]] = map[str1[i]]+1;
//         }else{
//             map[str1[i]] = 1;
//         }
//     }
//     for(let i=0;i<str2.length;i++){
//         if(map[str2[i]]){
//             map[str2[i]] = map[str2[i]]-1;
//             if(map[str2[i]===0]){
//                 delete map.str2[i]
//             }
//         }else{
//             return false
//         }
//     }
//     if(Object.keys(map).length) return false;
//     return true;

// }
// console.log(checkAnagram(str1,str2));


// two sum

// const arr=[2,5,7,8,9,3];
// const p = 10;

// const  findTwoSum = (arr,p) =>{
//     let map = {};
//     for(let i=0;i<arr.length;i++){
//             if(map[arr[i]]){
//                 console.log(arr[i],map[arr[i]])
//             }
//             map[p-arr[i]]=arr[i];
        

//     }
//     console.log(map)
// }

// findTwoSum(arr,p)



//median of two array
// var findMedianSortedArrays = function(num1, num2) {
//     let resultArray = [];
//     while(num1.length!=0 && num2.length!=0){
//         let num = num1[0]<num2[0]?num1.shift():num2.shift();
//         resultArray.push(num)
//     }
//     if(num1.length>0){
//         resultArray= [...resultArray,...num1]
//     }
//      if(num2.length>0){
//         resultArray= [...resultArray,...num2]
//     }
//     const newSet = new Set(resultArray);
//     const updatedArray = [...newSet];
//     if(updatedArray.length%2){
//         console.log( updatedArray[Math.floor(updatedArray.length/2)])
//     }else{
//         console.log(( updatedArray[updatedArray.length/2]+updatedArray[(updatedArray.length/2)-1])/2)
//     }
// };
// findMedianSortedArrays([1,2],[3,4])


// find max profit by selling a stock
//You want to maximize your profit by choosing a single day to buy one stock and 
//choosing a different day in the future to sell that stock.

// const prices = [7,1,5,3,6,4];
// var maxProfit = function(prices) {
//     let profit =0;
//     let minBuy = prices[0];
//     for(i=0;i<prices.length;i++){
//         if(minBuy>prices[i]){
//             minBuy= prices[i];
//         }
//         if(profit<(prices[i]-minBuy)){
//             profit = prices[i]-minBuy
//         }
//     }
//     return profit
// };

// console.log(maxProfit(prices))

//  const num1 =[1,2] 
//  const m=2;
//  const num2 =[2,4,5] 
//  const n=3;



// var merge = function(nums1, m, nums2, n) {
//     let newArray =[];
//     let i=0;
//     while(i<(m+n) && nums1.length!=0 && nums2.length!=0){
//         let newNum = nums1[i]<=nums2[i]?nums1.shift():nums2.shift();
//         newArray.push(newNum);
//         i++;
//     }
//     if(newArray.length<m+n){
//         if(num1.length){
//             newArray = [...newArray,...num1]
//         }
//         if(num2.length){
//             newArray = [...newArray,...num1]
//         }
//     }
//     return newArray
// };
// console.log(merge(num1,m,num2,n))
//newArray=[1,]


//create a largest number out of the array
//input :[9,2,99,901,910] // 9999109012

// const greatestNumber = (arr) =>{
//     const newArray = arr.map(item=>item.toString()).sort((a,b)=>{
//         if( a+b < b+a){
//             return -1
//         }
//         return 1
//     });
//    return parseInt(newArray.join(""));
// }
// console.log(greatestNumber([9,2,99,901,910]))

// Product of Array Except Self
// Example 1:

// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]
// Example 2:

// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]

// function productExceptSelf(arr){
//     let leftProduct = [];
//     let rightProduct =[];
//     let resultArr = [];
//     let product = 1
//     for(let i=0;i<arr.length;i++){
//         leftProduct.push(product); // remember this
//        product = product * arr[i];
//     }
//     product=1
//     for(let i=arr.length-1;i>=0;i--){
//         rightProduct[i] = product // remember this
//        product = product * arr[i];
//     }
//     for(let i=0;i<arr.length;i++){
//         resultArr[i] = leftProduct[i]*rightProduct[i]
//     }
    
//     return resultArr
// }
// console.log(productExceptSelf([1,2,3,4]))


//Maximum Subarray
// Example 1:

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: The subarray [4,-1,2,1] has the largest sum 6.
// Example 2:

// Input: nums = [1]
// Output: 1
// Explanation: The subarray [1] has the largest sum 1.
// Example 3:

// Input: nums = [5,4,-1,7,8]
// Output: 23
// Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.

//USe kaden's alogrithm


// var maxSubArray = function(arr) {
//     let maxSum=arr[0];
//     let currentSum = 0;

//     for(let i=0;i<arr.length;i++){
//         currentSum = currentSum+ arr[i];
//         if(currentSum>maxSum){
//             maxSum=currentSum;
//         }
//         if(currentSum<=0){
//             currentSum=0;
//         }
//     }
//     return maxSum;
// };
 
// console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))


//Maximum Product Subarray
// Example 1:

// Input: nums = [2,3,-2,4]
// Output: 6
// Explanation: [2,3] has the largest product 6.
// Example 2:

// Input: nums = [-2,0,-1]
// Output: 0
// Explanation: The result cannot be 2, because [-2,-1] is not a subarray.

// var maxProduct = function(arr) {
//     let leftProduct = 1;
//     let rightProduct = 1;
//     let max =arr[0];

//     for(let i=0;i<arr.length;i++){
//             leftProduct = leftProduct===0?1:leftProduct;
//             rightProduct = rightProduct===0?1:rightProduct;

//             //remember this
//             leftProduct = leftProduct*arr[i]
//             rightProduct = rightProduct * arr[arr.length-i-1]

//              max = Math.max(leftProduct,Math.max(max,rightProduct));

            
//     }
//     return max
// };

// console.log(maxProduct([-3,0,1,-2]))


//Find Minimum in Rotated Sorted Array

// Example 1:

// Input: nums = [3,4,5,1,2]
// Output: 1
// Explanation: The original array was [1,2,3,4,5] rotated 3 times.
// Example 2:

// Input: nums = [4,5,6,7,0,1,2]
// Output: 0
// Explanation: The original array was [0,1,2,4,5,6,7] and it was rotated 4 times.


// function findSmallest(arr){
//     let low=0;
//     let high= arr.length-1;

//     while(low<high){
//         let middle = Math.floor((low+high)/2);
//         if(arr[middle]>arr[high]){
//             low = middle+1;  //remember this
//         }else{
//             high = middle
//         }
//     }
//     return arr[low]
// }


//Search in Rotated Sorted Array

// Example 1:

// Input: nums = [4,5,6,7,0,1,2], target = 0
// Output: 4
// Example 2:

// Input: nums = [4,5,6,7,0,1,2], target = 3
// Output: -1

// var search = function(arr, key) {
//         let low=0;
//         let high = arr.length-1;
//         while(low<=high){ //remember
//             let mid = Math.floor((low+high)/2);
            
//             if(arr[mid]===key) return mid;

//             if(arr[low]<=arr[mid]){
//                 if(key>=arr[low]&& key<arr[mid]){
//                     high = mid-1;
//                 }
//                 else{
//                     low = mid +1;
//                 }
//             }
//             else{
//                 if(key > arr[mid] && key<=arr[high]){
//                     low=mid+1;
//                 }else{
//                     high=mid-1;
//                 }
//             }
//         }
//         return -1;
// };

// console.log(search([4,5,6,7,0,1,2],0))  


//3sum
// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Input: nums = [0,0,0]
// Output: [[0,0,0]]

// var threeSum = function(nums) {
//     let resultArray = [];
//     if(nums.length<3) return [];
//     nums = nums.sort((a,b)=>a-b);
//     for(let i=0;i<nums.length-2;i++){
          
//         let j=i+1;
//         let k=nums.length-1;
//         if(i>0 && nums[i]===nums[i-1]) continue;
//         while(j<k){
//             let sum = nums[i]+nums[j]+nums[k];
//             if(sum===0){
                
//                 resultArray.push([nums[i],nums[j],nums[k]]);
//                 while(nums[j]===nums[j+1]) j++;
//                 while(nums[k]===nums[k-1]) k--;
//                 j++;
//                 k--;
//             }
//             else if(sum<0){
//                 j++
//             }else{
//                 k--
//             }
//         }
//     }
//     return resultArray
// };

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.
 

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false

// var isValid = function(str) {
//     let parathesis ={
//         '{':'}',
//         '(':')',
//         '[':']'
//     }
//     let arr=[];
//     if(str.length%2===1) return false;
//     if(str[0]==='}' || str[0]===')'|| str[0]===']') return false;
//     if(str[str.length-1]==='[' || str[str.length-1]==='('|| str[str.length-1]==='[') return false
//     for(let i=0;i<str.length;i++){
//         if(str[i]==='[' || str[i]==='(' || str[i]==='{'){
//             arr.push(str[i])
//         }else{
//             if(parathesis[arr.pop()]===str[i]){
//                 continue;
//             }
//             else{
//                 return false
//             }
//         }
//     }
//     return arr.length===0
// };

// You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

// Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

// You may assume that you have an infinite number of each kind of coin.

 

// Example 1:

// Input: coins = [1,2,5], amount = 11
// Output: 3
// Explanation: 11 = 5 + 5 + 1
// Example 2:

// Input: coins = [2], amount = 3
// Output: -1
// Example 3:

// Input: coins = [1], amount = 0
// Output: 0


// var coinChange = function(coins, amount) {
//     let coinArray =new Array(amount+1).fill(Infinity);
//     coinArray[0] =0;
//     for(coin of coins){
//         for(let i=coin;i<=amount;i++){
//             coinArray[i] = Math.min(coinArray[i],coinArray[i-coin]+1)
//         }
//     }
//     return coinArray[amount]===Infinity?-1:coinArray[amount]
// };
 