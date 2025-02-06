let currentIndex = 0;
const images = document.querySelectorAll('.carousel-container img');
const totalImages = images.length;

function showNextImage() {
    currentIndex = (currentIndex + 1) % totalImages;
    const offset = -currentIndex * 100;
    document.querySelector('.carousel-container').style.transform = `translateX(${offset}%)`;
}



function showPreviousImage() {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    const offset = -currentIndex * 100;
    document.querySelector('.carousel-container').style.transform = `translateX(${offset}%)`;
}


setInterval(showNextImage, 5000); 