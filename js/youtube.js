var videoData = [
  {
      "title": "Video 1",
      "url": "https://www.youtube.com/embed/Ki4YUA8F3k4",
      "size": "large"
  },
  {
      "title": "Video 2",
      "url": "https://www.youtube.com/embed/Ki4YUA8F3k4",
      "size": "large"
  },
  {
      "title": "Video 3",
      "url": "https://www.youtube.com/embed/Ki4YUA8F3k4",
      "size": "large"
  },
  {
      "title": "Video 4",
      "url": "https://www.youtube.com/embed/Ki4YUA8F3k4",
      "size": "large"
  },
  {
      "title": "Video 5",
      "url": "https://www.youtube.com/embed/Ki4YUA8F3k4",
      "size": "large"
  },
  {
      "title": "Video 6",
      "url": "https://www.youtube.com/embed/Ki4YUA8F3k4",
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
