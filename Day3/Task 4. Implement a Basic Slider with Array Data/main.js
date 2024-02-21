let imageSources = [
    'walp1.jpg',
    'walp2.jpg',
    'walp3.jpg'
]

let currentIndex = 0;

document.getElementById('walp1').src = imageSources[currentIndex];

const nextSlide = function(){
    currentIndex = (currentIndex + 1) % imageSources.length
    document.getElementById("walp1").src = imageSources[currentIndex]
}   
const previousSlide = function(){
    currentIndex = (currentIndex - 1 + imageSources.length) % imageSources.length
    document.getElementById("walp1").src = imageSources[currentIndex];
}