window.addEventListener('load', () => {
  // Hide preloader
  const preloader = document.querySelector('.preloader');
  preloader.style.display = 'none';

  // Show content
  const content = document.querySelector('.content');
  content.style.display = 'block';
});