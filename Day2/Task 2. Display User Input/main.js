let input = document.getElementById("input")
let btn = document.getElementById("btn")
let p = document.getElementById("p")


const clickDispley = function(){
    p.innerHTML = input.value 
    input.value = ""
}