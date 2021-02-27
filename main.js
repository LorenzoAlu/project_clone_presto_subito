const navbar = document.querySelector("#navbar")

const logo =document.querySelector("#logo")

const signbtn=document.querySelector("#signbtn")

const signbtn1=document.querySelector("#signbtn1")

logo.src="./media/logo.png"

window.addEventListener("scroll", ()=> {

let scrolled = window.pageYOffset

if(scrolled>100) {
    navbar.classList.remove("bg-white")
    navbar.classList.add("navbar-dark","bg-secondary-color")
    signbtn.classList.add("btn-outline-light")
    signbtn.classList.remove("btn-outline-dark")

    signbtn1.classList.add("btn-outline-light")
    signbtn1.classList.remove("btn-outline-dark","btn-accedi")

    logo.src="./media/logo-w.png"

} else {
    navbar.classList.remove("navbar-dark","bg-secondary-color")
    navbar.classList.add("navbar-light","bg-white")
    signbtn.classList.remove("btn-outline-light")
    signbtn.classList.add("btn-outline-dark")

    signbtn1.classList.remove("btn-outline-light")
    signbtn1.classList.add("btn-outline-dark","btn-accedi")

    logo.src="./media/logo.png"

    
}

})




//effetto diamico per header principale 
const skewedOne = document.querySelector('.skewedOne')

const skewedTwo = document.querySelector('.skewedTwo')


if(skewedOne,skewedTwo){
window.addEventListener('scroll', () => {
    const value1 = -15 + window.scrollY / 30
    const value2 = 15 + window.scrollY / -30

    skewedOne.style.transform = "sKewY(" + value1 + "deg)";
    skewedTwo.style.transform = "sKewY(" + value2 + "deg)";

})

}


//effetto dinamico per header small

const skewedOneS = document.querySelector('.skewedOneS')

        const skewedTwoS = document.querySelector('.skewedTwoS')


        if(skewedOneS,skewedTwoS){

        window.addEventListener('scroll', () => {
            const value1 = -17 + window.scrollY / 15
            const value2 = 17 + window.scrollY / -15

            skewedOneS.style.transform = "sKewY(" + value1 + "deg)";
            skewedTwoS.style.transform = "sKewY(" + value2 + "deg)";

        })

        }   