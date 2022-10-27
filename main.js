let navCopy = document.querySelector("nav").cloneNode(true);
let isClicked = false;
navCopy.classList.remove("main-nav");
let myA = navCopy.querySelectorAll("a");
for(let i=0;i<myA.length;i++) {
    myA[i].style = "display: block; margin-top: 20px;";
    console.log(myA[i]);
}
let right = document.querySelector(".right");
right.style = "align-items: flex-start;";
let header = document.querySelector(".header");
//header.style = "align-items: flex-start;"
let icon = document.querySelector(".fa-bars");
let iconContainer = document.querySelector(".menu-icon");
icon.onclick = function() {
    if(isClicked==false) {
        navCopy.style = "display: block;"
        isClicked = true;
    } else {
        navCopy.style = "display: none;"
        isClicked = false;
    }
    iconContainer.appendChild(navCopy);
};