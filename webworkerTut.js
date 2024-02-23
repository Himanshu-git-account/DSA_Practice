let index=0;
const heavyDisplay = document.getElementById("heavyDisplay");
const LightDisplay = document.getElementById("lightDisplay");

const heavyButton = document.getElementById("btn1");
const LightBUtton = document.getElementById("btn2");



LightBUtton.addEventListener('click',()=>{

    LightDisplay.innerText=index++;
})

heavyButton.addEventListener('click',()=>{

    const workerObj = new Worker("worker.js");
    workerObj.postMessage('start work')
    workerObj.onmessage=(e)=>{
        heavyDisplay.innerText=e.data
    }
   
})
