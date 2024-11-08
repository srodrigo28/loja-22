var btnMobileLeft = document.querySelector(".btn-mobile-left")
var menuLeft = document.querySelector(".nav-list-mobile")
var menuSacola = document.querySelector(".bag-products")
var btnSacola = document.querySelector("#mobile-sac")

btnMobileLeft.onclick = () => {
    menuLeft.classList.toggle("esconder-left")
}

btnSacola.onclick = () => {
    menuSacola.classList.toggle("esconder")
}

menuSacola.onclick = () => {
    menuSacola.classList.toggle("esconder")
}
//  menuSacola.classList.toggle("esconder")