let calc = (num)=>{
    let sum =0; 
    for(let i=1;i<=num;i++){
        sum = sum +i;
    }
    return sum
}

// console.time();
// console.log(calc(5));
// console.timeEnd()

let memoizedFunc = (func) =>{
    let cache={}
    return function(...args){
        let value = JSON.stringify(args);
        if(cache[value]){
            console.log("from cache")
            return cache[value]
        }else{
            console.log("from func call")
            cache[value] = func.apply(this,args);
            return cache[value]
        }
    }
}

console.time()
const memoized = memoizedFunc(calc);
console.log(memoized(5))
console.timeEnd()
console.time()
console.log(memoized(5))
console.timeEnd()