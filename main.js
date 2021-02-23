const navbar = document.querySelector("#navbar")


window.addEventListener("scroll", ()=> {

let scrolled = window.pageYOffset

if(scrolled>130) {
    navbar.classList.remove()
    navbar.classList.add("border-custom-navbar")
} else {
    navbar.classList.remove("border-custom-navbar")
    navbar.classList.add()
}

})