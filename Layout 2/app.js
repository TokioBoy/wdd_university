const images = document.querySelectorAll('#flex img');

images.forEach(image => {
  image.addEventListener('click', () => {
    image.classList.toggle('rotated')
  });
});