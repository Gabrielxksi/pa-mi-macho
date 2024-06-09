// Variables globales para el primer carrusel
var slideIndex = 1;
showSlides(slideIndex);

// Variables globales para el segundo carrusel
var slideIndex2 = 1;
showSlides2(slideIndex2);

// Función para avanzar/retroceder en las imágenes del primer carrusel
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Función para mostrar la imagen actual del primer carrusel
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Función para mostrar las imágenes del primer carrusel
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

// Función para avanzar/retroceder en las imágenes del segundo carrusel
function plusSlides2(n) {
    showSlides2(slideIndex2 += n);
}

// Función para mostrar la imagen actual del segundo carrusel
function currentSlide2(n) {
    showSlides2(slideIndex2 = n);
}

// Función para mostrar las imágenes del segundo carrusel
function showSlides2(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides2");
    if (n > slides.length) {
        slideIndex2 = 1;
    }
    if (n < 1) {
        slideIndex2 = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex2 - 1].style.display = "block";
}
