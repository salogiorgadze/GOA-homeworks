const images = [
    "img1.jpg",
    "img2.jpg",
    "img3.jpg"
];

let currentIndex = 0;


const sliderImage = document.getElementById("slider-image");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

function nextImage() {
    currentIndex++;
    if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    sliderImage.src = images[currentIndex];
}

function prevImage() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }
    sliderImage.src = images[currentIndex];
}

nextBtn.addEventListener("click", nextImage);
prevBtn.addEventListener("click", prevImage);
