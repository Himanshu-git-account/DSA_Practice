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
// function longestPalindrome(str){

//     let maxSize =0;palindrome = ""
//     for(let i=0;i<str.length;i++){
//         console.log("i->",i)
//         let [oddsubpalin,oddSize] = expandAroundCenter(str,i,i);
//         let [evenSubPalin,evenSize] = expandAroundCenter(str,i,i+1);
       
//         if(maxSize<oddSize){
//             maxSize=oddSize;
//             palindrome = str.substr(oddsubpalin,oddSize)
//         }
//         if(maxSize<evenSize){
//             maxSize=evenSize;
//             palindrome = str.substring(evenSubPalin,evenSize)
//         }
        
        
//     }
//     return palindrome;
// }
// console.log("longestPalindrome",longestPalindrome(str))

// function expandAroundCenter(str,left,right){


//     while(str[left]===str[right] && left>=0 && right<str.length){
        
//         left--;
//         right++;
//     }
//     let size = right-left-1;
        
//     return [left+1,size]
// }


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
//     if(map.length>0) return false;
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

 const num1 =[1,2] 
 const m=2;
 const num2 =[2,4,5] 
 const n=3;



var merge = function(nums1, m, nums2, n) {
    let newArray =[];
    let i=0;
    while(i<(m+n) && nums1.length!=0 && nums2.length!=0){
        let newNum = nums1[i]<=nums2[i]?nums1.shift():nums2.shift();
        newArray.push(newNum);
        i++;
    }
    if(newArray.length<m+n){
        if(num1.length){
            newArray = [...newArray,...num1]
        }
        if(num2.length){
            newArray = [...newArray,...num1]
        }
    }
    return newArray
};
console.log(merge(num1,m,num2,n))
//newArray=[1,]
