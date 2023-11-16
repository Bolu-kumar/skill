var jsonData = [
  
  {
    "imageSrc": "img/carousel/office-199.png",
    "altText": "Image 1",
  },

  {
    "imageSrc": "img/carousel/excel-99.png",
    "altText": "Image 2",
  },

  {
    "imageSrc": "img/carousel/chatgpt-99.png",
    "altText": "Image 3",
  },
  {
    "imageSrc": "img/carousel/social-media-99.png",
    "altText": "Image 4",
  },
  {
    "imageSrc": "img/carousel/wordpress-99.png",
    "altText": "Image 5",
  },

  {
    "imageSrc": "img/carousel/job-subscription-499.png",
    "altText": "Image 5",
  },
 
  
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