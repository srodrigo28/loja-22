var menuLeft = document.querySelector(".nav-list-mobile")
var menuSacola = document.querySelector(".bag-products")

var imageSplash = document.querySelector("#splash")

var btnSacolaShow = document.querySelector("#mobile-sac")
var btnMobileLeft = document.querySelector(".btn-mobile-left")
var btnCloseLeftMenu = document.querySelector("#btn-close-left")
var btnCloseSacola = document.querySelector("#btnCloseSacola")


btnMobileLeft.onclick = (e) => {
    e.preventDefault()
    menuLeft.style.display = "block"
    // alert("teste :: btnLeft")
}

btnCloseLeftMenu.addEventListener("click", (e) => {
    e.preventDefault()
    menuLeft.style.display = "none"
})

btnSacolaShow.onclick = (e) => {
    e.preventDefault()
    menuSacola.style.display = "block"
}

btnCloseSacola.onclick = (e) => {
    e.preventDefault()
    menuSacola.style.display = "none"
}