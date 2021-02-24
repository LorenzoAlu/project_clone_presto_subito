const navbar = document.querySelector("#navbar")

const logo =document.querySelector("#logo")

const signbtn=document.querySelector("#signbtn")

const signbtn1=document.querySelector("#signbtn1")



logo.src="./media/logo.png"


window.addEventListener("scroll", ()=> {

let scrolled = window.pageYOffset




if(scrolled>130) {
    navbar.classList.remove("bg-transparent")
    navbar.classList.add("navbar-dark","bg-secondary-color")
    signbtn.classList.add("btn-outline-light")
    signbtn.classList.remove("btn-outline-dark")

    signbtn1.classList.add("btn-outline-light")
    signbtn1.classList.remove("btn-outline-dark")



    logo.src="./media/logo-w.png"


} else {
    navbar.classList.remove("navbar-dark","bg-secondary-color")
    navbar.classList.add("navbar-light","bg-transparent")
    signbtn.classList.remove("btn-outline-light")
    signbtn.classList.add("btn-outline-dark")

    signbtn1.classList.remove("btn-outline-light")
    signbtn1.classList.add("btn-outline-dark")


    logo.src="./media/logo.png"

    
}

})