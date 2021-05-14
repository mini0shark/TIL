const openButton = document.getElementById('open');
const modal = document.querySelector(".modal");
const overlay = modal.querySelector(".modal__overlay");
const closeBtn = modal.querySelector("button");

const openModal = ()=>{
    modal.classList.remove("hidden");
}
const closeModal = ()=>{
    modal.classList.add("hidden");
}
overlay.addEventListener("click", closeModal);
closeBtn.addEventListener("click", closeModal);

openButton.addEventListener("click", openModal);

const body1 = document.getElementsByTagName('body');
console.log(body1);
console.log(body1[0].innerHTML);
console.log(body1[0].innerText);
// body1.innerHtml="";

