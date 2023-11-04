var jsonData = [
  {
    "imageSrc": "img/5.png",
    "altText": "Image 1",
  },
  {
    "imageSrc": "img/1.png",
    "altText": "Image 2",
  },
  {
    "imageSrc": "img/2.png",
    "altText": "Image 3",
  }
];

// Render the JSON data
const carouselContainer = document.getElementById('carousel-container');
jsonData.forEach((item, index) => {
  const carouselItem = document.createElement('div');
  carouselItem.classList.add('carousel-item');
  if (index === 0) {
    carouselItem.classList.add('active');
  }

  const anchor = document.createElement('a');
  anchor.href = '#'; // Set your link URL here

  const image = document.createElement('img');
  image.classList.add('d-block', 'w-100');
  image.src = item.imageSrc;
  image.alt = item.altText;

  anchor.appendChild(image);
  carouselItem.appendChild(anchor);
  carouselContainer.querySelector('.carousel-inner').appendChild(carouselItem);
});

// Set up automatic sliding
$(document).ready(function () {
  $('#carousel-container').carousel({
    interval: 3000 // 3 seconds (adjust as needed)
  });
});