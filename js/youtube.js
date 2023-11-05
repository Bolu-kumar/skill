var videoData = [
  {
      "title": "Excel Basics: Essential Functions & Formulas",
      "url": "https://www.youtube.com/embed/pvyfhWVzOE0",
      "size": "large"
  },
  {
      "title": "IF Function",
      "url": "https://www.youtube.com/embed/CPtZfScmp30",
      "size": "large"
  },
  {
      "title": "Basic VLOOKUP Introduction",
      "url": "https://www.youtube.com/embed/hpY10Sf29_E",
      "size": "large"
  }
];

// Function to create video elements
function createVideoElements() {
  const videoContainer = document.getElementById('video-container');

  videoData.forEach(video => {
      const videoItem = document.createElement('div');
      videoItem.classList.add('col-md-' + (video.size === "small" ? "12" : "3"), 'video-item', 'mb-4'); // Adjust the column size

      const videoContent = document.createElement('div');
      videoContent.classList.add('gallery-item');

      const videoFrame = document.createElement('iframe');
      videoFrame.classList.add('video-thumbnail');
      videoFrame.width = '100%';
      videoFrame.height = video.size === "small" ? '150' : '300'; // Adjust the height

      videoFrame.src = video.url;
      videoFrame.frameBorder = '0';
      videoFrame.allowFullscreen = true;

      videoContent.appendChild(videoFrame);
      videoItem.appendChild(videoContent);
      videoContainer.appendChild(videoItem);
  });
}

// Execute the function when the document is ready
document.addEventListener("DOMContentLoaded", createVideoElements);
