const title = document.getElementById("title");
const button=document.getElementById("button");
title.textContent= "Welcome to my WebPage !!";
title.style.color ="pink"

button.addEventListener("click",()=>{
    button.textContent="clicked";
    alert("button clicked")
});