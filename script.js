var btnMobileLeft = document.querySelector(".btn-mobile-left")
var menuLeft = document.querySelector(".nav-list-mobile")
var menuSacola = document.querySelector(".bag-products")
var btnSacola = document.querySelector("#mobile-sac")
var btnClose = document.querySelector("#btn-close-left")
var imageSplash = document.querySelector("#splash")

imageSplash.addEventListener("load", (e) => {
    
    setTimeout( () => {
        imageSplash.style.display = "none"
    }, 3000)
    
})

btnMobileLeft.onclick = () => {
    menuLeft.classList.toggle("esconder-left")
}

btnClose.addEventListener("click", () => {
    menuLeft.style.display = "none"

   //  alert("teste")
   location.reload()
})

btnSacola.onclick = () => {
    menuSacola.classList.toggle("esconder")
}

menuSacola.onclick = () => {
    menuSacola.classList.toggle("esconder")
}
//  menuSacola.classList.toggle("esconder")