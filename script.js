let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide').length;

    if (index < 0) {
        currentSlide = totalSlides - 1;
    } else if (index >= totalSlides) {
        currentSlide = 0;
    } else {
        currentSlide = index;
    }

    slides.style.transform = `translateX(-${currentSlide * 100}%)`;

    const nextBtn = document.getElementById('nextBtn');
    if (currentSlide === totalSlides - 1) {
        nextBtn.textContent = "Finish";
        nextBtn.onclick = function() {
            window.location.href = "page.tsx";
        };
    } else {
        nextBtn.textContent = "Next";
        nextBtn.onclick = function() {
            changeSlide(1);
        };
    }
}

function changeSlide(direction) {
    showSlide(currentSlide + direction);
}

// Initial call to display the first slide
showSlide(currentSlide);
