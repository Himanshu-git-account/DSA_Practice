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

const arr2=[4,34,9,11,6,22,2,27];

const secondLargestNum = (arr2) =>{
    let largest=arr2[0];
    let secondLargestNum=null;
    for(let i=0;i<arr2.length;i++)
}



