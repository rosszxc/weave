document.addEventListener('DOMContentLoaded', () => {
  const preloader = document.querySelector('.preloader');
  const videoContainer = document.querySelector('.video-container');
  const video = document.getElementById('main-video');

  // Preload the video
  video.addEventListener('loadeddata', () => {
    preloader.style.display = 'none'; // Hide the preloader
    videoContainer.style.display = 'block'; // Show the video container

  });
});
