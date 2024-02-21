let btn = document.getElementById("btn")
let inp = document.getElementById("inp")

const checkEmail = function(){
    inp.value === "" ? alert("Please enter an email address") : alert("successful login")
}