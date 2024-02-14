// 'use-strict'

// console.log(a); // un
// console.log(b);
// var a= 10;

// let b= 10

// function sum(a){
//     return function curriedFunct(b){
//         if(a) curriedFunct(a,b)
//         return a+b
//     }
// }

// console.log(sum(10)(20)());\


// let arr=[1,2,3,4]
// let arr2=[7,8,9]

// let resultArr = [...arr,...arr2];
// console.log(resultArr)






// Given the following array: [2,3,4,5,7]  // [2,3,4,5] 7
// Perform 3 right rotations:
// First rotation : [7,2,3,4,5] , Second rotation : [5,7,2,3,4] and, Third rotation: [4,5,7,2,3]
// let [4,5,7,2,3]
4
//3,2,7

function rotateArr(arr,k){
    let resultArr = [];
    for(let i=0;i<k;i++){
        let val = arr[arr.length-1];
        for(let j=arr.length-1;j>0;j--){  
            arr[j]=arr[j-1];
          
        }
    
        arr[0]=val;
        console.log("outsidefor",arr)
    }
  
}

rotateArr([2,3,4,5,6],3)


