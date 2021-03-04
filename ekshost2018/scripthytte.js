window.onload = oppstart;
//variabler//

//valg av hytte//
function oppstart() {
    document.getElementById("tilbake-knapp").onclick = gaTilbake;
    document.getElementById("granbo").onclick = granboVindu;
    document.getElementById("granstua").onclick = granstuaVindu;
    document.getElementById("uthev").onmouseover = skygge;
    document.getElementById("uthev").onmouseleave = ikkeskygge;
}
function gaTilbake () {
    document.getElementById("cover").style.display = "none";
}
function granboVindu () {
    document.getElementById("cover").style.display = "inline";
    document.getElementById("hyttebilde1").src = "filer/granbo01.jpg";
    document.getElementById("hyttebilde2").src = "filer/granbo02.jpg";
    document.getElementById("hyttebilde3").src = "filer/granbo03.jpg";
    document.getElementById("hyttenavn").innerHTML = "Granbo";
    document.getElementById("antsenger").innerHTML = "6";
    document.getElementById("standard").innerHTML = "middels";
    showSlides(slideIndex = 1);
    document.getElementById("vid").pause();
    document.getElementById("vid").currentTime = 0;


}
function granstuaVindu () {
    document.getElementById("cover").style.display = "inline";
    document.getElementById("hyttebilde1").src = "filer/granstua01.jpg";
    document.getElementById("hyttebilde2").src = "filer/granstua02.jpg";
    document.getElementById("hyttebilde3").src = "filer/granstua03.jpg";
    document.getElementById("hyttenavn").innerHTML = "Granstua";
    document.getElementById("antsenger").innerHTML = "4";
    document.getElementById("standard").innerHTML = "Høy";
    showSlides(slideIndex = 1);
    document.getElementById("vid").pause();
    document.getElementById("vid").currentTime = 0;

}
function skygge () {
    document.getElementById("hyttefelt").style.opacity = "0.7"
}
function ikkeskygge () {
    document.getElementById("hyttefelt").style.opacity = "1"
}

//bildegaller//
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}
function currentSlide(n) {
    showSlides(slideIndex = n);
}
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}