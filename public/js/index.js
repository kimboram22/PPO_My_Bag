let slideIndex = 0;
let slides = document.getElementsByClassName("slide");
let ellipses = document.getElementsByClassName("ellipse");
let isProcessing = false;
let slideInterval;

function initializeSlides() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        ellipses[i].classList.remove("active");
    }
    slides[0].style.display = "block";
    ellipses[0].classList.add("active");
}

function showSlides() {
    if (isProcessing) return;
    isProcessing = true;

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        ellipses[i].classList.remove("active");
    }

    slideIndex++;

    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = "block";
    ellipses[slideIndex - 1].classList.add("active");

    setTimeout(() => {
        isProcessing = false;
    }, 500);
}

function startSlideShow() {
    slideInterval = setInterval(showSlides, 5000);
}

initializeSlides();

startSlideShow();

for (let i = 0; i < ellipses.length; i++) {
    ellipses[i].addEventListener("click", (event) => {
        if (isProcessing) return;

        clearInterval(slideInterval);

        let clickIndex = Array.from(ellipses).indexOf(event.target);
        slideIndex = clickIndex;

        showSlides();

        startSlideShow();
    });
}
