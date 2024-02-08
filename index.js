console.log("wkk")

//currying

// sum(1)(2)(3)()

// function sum(a){
//     return function(b){
//        if(b) return sum(a+b);
//        return a;
//     }
// }
// console.log(sum(1)(2)(3)(8)(10)());

// //Solution not got

// function sum(a){
//     console.log(typeof(a))
//     return function(b){
//         console.log(typeof(b))
//     }
// }

// console.log(sum(1))

// console.log(add(1,2,3,4,5,6)(2,3,4,5,6,7)(2,3,4,5,6,7)());


// function add(...args){
//     const sumA = args.reduce((acc,argu)=>{return acc+argu},0)
//     return function (...args){
//         const sumB = args.reduce((acc,argu)=>{return acc+argu},0)
//         if(args.length>0){
//             return add(sumA+sumB)
//         }
//         return sumA
//     }
// }
