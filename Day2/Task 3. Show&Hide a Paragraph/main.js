let p = document.getElementById("p")
let btn = document.getElementById("btn")
const showHideFunction = function(){
    p.style.display = p.style.display === "block" ? "none" : "block";
    btn.innerHTML = btn.innerHTML === "Show" ? "Hide" : "Show"
}