let navbar =document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick=()=>{
    navbar.classList.toggle('active');
    
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

let searchForm =document.querySelector('.search-form');
document.querySelector('#search-btn').onclick=()=>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    
    cartItem.classList.remove('active');
}

let cartItem =document.querySelector('.cart-items-container');
document.querySelector('#cart-btn').onclick=()=>{
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
   
}
window.onscroll=()=>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}
//add to cart functionality
let addtocartList=[];

function addtocart(coffeeName,price,img){
let addtocartobj={
    coffee:coffeeName,
    amount:price,
    image:img
}

const isValExists = addtocartList.find((e) => e.coffee === coffeeName)
if(!isValExists){
  addtocartList.push(addtocartobj);
    let Totalprice=document.querySelector(".total")
    let totalcount=addtocartList.reduce((acc,e)=> acc+ (+e.amount),0)
    Totalprice.innerText= `Total : ${totalcount}`;    

    let pDivTag = document.createElement("div");
   pDivTag.classList.add("cart-items");

   let cSpanTag = document.createElement("span");
   cSpanTag.classList.add('fas');
   cSpanTag.classList.add('fa-times');
   let cImgTag = document.createElement("img");
   cImgTag.src= "images/"+addtocartobj.image;
   let cDivTag = document.createElement("div");
   cDivTag.classList.add("content");
   let ccH3Tag = document.createElement("h3");
    ccH3Tag.innerText = addtocartobj.coffee;
   let ccDivTag = document.createElement("div");
   ccDivTag.classList.add("price");
   ccDivTag.innerText = addtocartobj.amount;

   cDivTag.appendChild(ccH3Tag);
   cDivTag.appendChild(ccDivTag);

   pDivTag.appendChild(cSpanTag);
   pDivTag.appendChild(cImgTag);
   pDivTag.appendChild(cDivTag);

   cartItem.appendChild(pDivTag);
}   
}

