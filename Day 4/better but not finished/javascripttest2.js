var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 30000); // Change image every 2 seconds
}
backButton= document.getElementById("backwards");
nextButton= document.getElementById("forwards");
backButton.addEventListener ("click",event => {
        slides =slides-1;
        if(slides<0){
        slides=4;
        }
        slides.innerHTML= temp[slides];
        dots.innerHTML= temp[dots]
}
)
nextButton.addEventListener ("click",event => {
    slides =slides+1;
    if(slides===5){
    slides=0;
    }
    slides.innerHTML= temp[slides];
    dots.innerHTML= temp[dots]
}
)
