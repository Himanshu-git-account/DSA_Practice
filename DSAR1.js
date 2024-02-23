//check palindrome
// let num = 512215;
// var checkPalindromeDigit = (num) =>{
//     let reverseNum = 0;
//     let orignalNum = num;
//     while(num>0){
//         let digit = num % 10;
//         reverseNum = reverseNum*10+digit;
//         num = Math.floor(num/10)
//     }
//     if(reverseNum === orignalNum) return true
//     return false
// }
// console.log(checkPalindromeDigit(num))

//max sum of p consucutive array

// let arr = [2,3,4,5,6,-1,0,9,2]
// p=3

// const largestSum = (arr,p) =>{

//     let sum =0;
    
//     for(let i=0;i<p;i++){
//         sum= sum+arr[i]
//     }
//     let maxSum = sum;

//     for(let i=p;i<arr.length;i++){
//         sum = sum+arr[i]-arr[i-p];
//         if(sum>maxSum){
//             maxSum=sum;
//         }
//     }
//     return maxSum;
// }

// console.log(largestSum(arr,p))

//merge two sorted Array
//Merge two Sorted Array 
// const arr1=[1,5,6,7,22];
// const arr2=[4,9,11,22,27,28];

// const mergeSortedArray = (arr1,arr2)=>{
//     let resultArray = [];

//     while(arr1.length!=0 && arr2.length!==0){
//         let num = arr1[0]<arr2[0]?arr1.shift():arr2.shift();
//         resultArray.push(num)
//     }
//     if(arr1.length!=0){
//         resultArray = [...resultArray,...arr1]
//     }
//     if(arr2.length!=0){
//         resultArray = [...resultArray,...arr2]
//     }
//     return resultArray
// }

// console.log(mergeSortedArray(arr1,arr2))

//find secondlargest number

// let arr=[5,1,88,5,20];

// const findSecondLargest = (arr) =>{
//     let largest = arr[0];
//     let secondlargest=arr[0];

//     for(let i=0;i<arr.length;i++){
//         if(arr[i]>largest){
//             secondlargest = largest;
//             largest=arr[i]
//         }else if(arr[i]>secondlargest){
//             secondlargest=arr[i]
//         }
//     }
//     return secondlargest;
// }

// console.log(findSecondLargest(arr))

//contains duplicate

// const arr=[2,5,7,8,10.4,91];

// const checkDuplicate = (arr) =>{
//     let map = {};
//     for(let i=0;i<arr.length;i++){
//         if(map[arr[i]]){
//             return true
//         }else{
//             map[arr[i]]=arr[i];
//         }
//     }
//     return false;
 
// }

// console.log(checkDuplicate(arr))

//check Anagram 

const str1="ratate";
const str2 = "taerat"

const checkAnagram =(str1,str2)=>{
    let map = {}
    for(let i=0;i<str1.length;i++){
        if(typeof map[str1[i]]==="number"){
            map[str1[i]]= map[str1[i]]+1;
        }else{
            map[str1[i]]=1;
        }
    }

    for(let i=0;i<str2.length;i++){
        if(typeof map[str2[i]]==="number"){
            map[str2[i]] = map[str2[i]]-1;
            if( map[str2[i]]===0){
                 delete map[str2[i]]
            }
        }
        else{
            return false;
        }
    }
    if(Object.keys(map).length){
        return false;
    }
    else return true;

    console.log(map)
}

console.log(checkAnagram(str1,str2))