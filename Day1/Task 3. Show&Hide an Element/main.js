let div = document.getElementById("showHideDiv")
let btn = document.getElementById("btn")
let condition = false
const showHideFunction = function(){
    div.style.display = div.style.display === "block" ? "none" : "block";
    btn.innerHTML = btn.innerHTML === "Show" ? "Hide" : "Show"
}