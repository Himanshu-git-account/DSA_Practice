onmessage = (e)=>{
    let index=0;
    for(let i=0;i<10000000000;i++){
        index=index+1
    }
    postMessage(index)
}