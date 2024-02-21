let nameInput = document.getElementById("nameInput")
let emailInput = document.getElementById("emailInput")
let btn= document.getElementById("btn")


btn.addEventListener("click", check)
function check(){
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(emailRegex.test(emailInput.value) && emailInput.value !== "" && nameInput.value !== ""){
            alert("This is corect")
    }else{
        alert("this is isCorect")
    }
}