let inp1 = document.getElementById("inp1")
let inp2 = document.getElementById("inp2")
let btn = document.getElementById("btn")


const localStorege = function(){
    localStorage.setItem('name',inp1.value)
    localStorage.setItem('email',inp2.value)
    inp1.value = ''
    inp2.value = '' 
}