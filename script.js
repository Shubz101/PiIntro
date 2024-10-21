function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('slide-enter', 'slide-enter-active', 'slide-leave', 'slide-leave-active');
        if (i === index) {
            slide.classList.add('slide-enter-active');
        } else if (i === (currentSlide + 1) % slides.length) {
            slide.classList.add('slide-enter');
        } else if (i === (currentSlide - 1 + slides.length) % slides.length) {
            slide.classList.add('slide-leave');
        }
    });

    dots.forEach((dot, i) => {
        dot.classList.toggle('bg-blue-500', i === index);
        dot.classList.toggle('bg-gray-300', i !== index);
    });

    // Update button text based on the current slide
    const nextBtn = document.getElementById('nextBtn');
    if (index === slides.length - 1) {
        nextBtn.textContent = 'Start';
    } else {
        nextBtn.textContent = 'Next';
    }
}

document.getElementById('nextBtn').addEventListener('click', () => {
    if (currentSlide === slides.length - 1) {
        window.location.href = 'page.tsx'; // Redirect to page.tsx
    } else {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }
});
