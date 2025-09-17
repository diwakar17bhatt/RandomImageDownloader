// List of images in the 'images' folder
const images = [
    'images/photo1.jpg',
    'images/photo2.jpg',
    'images/photo3.jpg',
    'images/photo4.jpg',
    'images/photo5.jpg',
    'images/photo6.webp',
    'images/photo7.jpg',
    'images/photo8.webp',
    'images/photo9.jpg',
    'images/photo10.jpg',
    'images/photo11.jpg',
    'images/photo12.jpg',
    'images/photo13.jpg',
    'images/photo14.jpg',
    'images/photo15.jpg'
];

// Function to download two random images
function downloadRandomImages() {
    const shuffled = images.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 2);

    selected.forEach(url => {
        const link = document.createElement('a');
        link.href = url;
        link.download = url.split('/').pop(); // Get filename from path
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
}

// Event listener for the button
document.getElementById('download-btn').addEventListener('click', downloadRandomImages);
