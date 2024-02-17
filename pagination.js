let page=1;
let pagination = document.getElementById("pagination");
let pageNumber = document.getElementById("pageNumber");
let goBackButton = document.getElementById("goBack");
goBackButton.disabled=true;
const fetchAPi = async()=>{
    if(page>1){
        goBackButton.disabled=false;
    }else{
        goBackButton.disabled=true;
    }
    const response = await fetch(`https://jsonplaceholder.typicode.com/photos?_limit=15&_page=${page}`)
    const data = await response.json();
    pagination.innerHTML="";
    pageNumber.innerText=page
    data.forEach(item => {
        const dataRow = document.createElement('div');
        dataRow.innerHTML=`<span>${item.id}</span>-<span>${item.title}</span>`
        pagination.appendChild(dataRow);
    });
    console.log(data);
}

const goBack =() =>{
    page= page-1;
    fetchAPi();
}
const goNext = () =>{
    page= page+1;
    fetchAPi();
}


document.addEventListener("DOMContentLoaded",fetchAPi)