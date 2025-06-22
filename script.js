let menuBtn = document.querySelector(".toggle")
let navList = document.querySelector(".nav-list")


menuBtn.addEventListener("click",() =>{
    navList.classList.toggle("active")
})