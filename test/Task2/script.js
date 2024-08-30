document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.carousel-image');
    const fallbackImage = 'placeholder.jpg'; // placeholder image path
    const nextButton = document.querySelector('.next');
    const prevButton = document.querySelector('.prev');
    const carouselContainer = document.querySelector('.carousel-container');
    const indicators = document.querySelectorAll('.indicator');

    let currentIndex = 0;

    // Placeholder image handler
    images.forEach(image => {
        // Check if image fails to load immediately after DOM content is loaded
        if (!image.complete || image.naturalWidth === 0) {
            image.src = fallbackImage;
        }

        // Add error event listener to set fallback image if the image fails to load later
        image.onerror = () => {
            image.src = fallbackImage;
        };
    });

    // Function to update carousel indicators and position
    function updateCarousel(index) {
        carouselContainer.style.transform = `translateX(-${index * 100}%)`;
        indicators.forEach((indicator, i) => {
            indicator.classList.toggle('active', i === index);
        });
    }

    // Next button click event
    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % images.length;
        updateCarousel(currentIndex);
    });

    // Previous button click event
    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateCarousel(currentIndex);
    });

    // Indicator click event
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            currentIndex = index;
            updateCarousel(currentIndex);
        });
    });

    // Initialize the carousel
    updateCarousel(currentIndex);
});
