const images = [
    'images/w1.jpeg',
    'images/w3.jpeg',
    'images/w4.jpeg',
    'images/w5.jpeg',
    'images/w6.jpeg',
    'images/w7.jpeg',
    'images/w8.jpeg',
    'images/w9.jpeg',
];

let currentIndex = 0;

function changeImage() {
    currentIndex = (currentIndex + 1) % images.length;
    document.getElementById('mainImage').src = images[currentIndex];
}
