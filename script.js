<script>
    const slides = document.querySelectorAll('#slides > div');
    const dots = [document.getElementById('dot1'), document.getElementById('dot2'), document.getElementById('dot3'), document.getElementById('dot4')];
    let currentSlide = 0;

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
    }

    document.getElementById('nextBtn').addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    });

    document.getElementById('prevBtn').addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    });

    showSlide(currentSlide);
</script>
