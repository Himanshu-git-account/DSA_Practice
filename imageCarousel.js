let ImageList = [];
let index=0;
const imageConatainer = document.getElementById("imageContainer"); 
const backwardButton = document.getElementById("backwardButton");
backwardButton.disabled=true;

const forwardButton = document.getElementById("forwardButton");
const fetchAPI= async()=>{
    const response = await fetch(`https://jsonplaceholder.typicode.com/photos?_limit=15&_page=1`)
    const data = await response.json();
    ImageList=data;
    showImage()
};
const goNext=()=>{
   
    index= index+1;
    showImage();
    if(index<ImageList.length-1){
    forwardButton.disabled=false;
}else{
    forwardButton.disabled=true;
}
if(index>0){
    backwardButton.disabled=false;
}
}
const showImage = () =>{
    imageConatainer.innerHTML="";
    const img= document.createElement('img');
    img.classList.add("image")
    img.src=ImageList[index].url;
    imageConatainer.append(img)
}
const goBack = () =>{
  
    index=index-1;
    showImage();
    if(index>0){
        backwardButton.disabled=false;
    }else{
        backwardButton.disabled=true;
    }
}

document.addEventListener("DOMContentLoaded",fetchAPI)