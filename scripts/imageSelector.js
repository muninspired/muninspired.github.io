const imagePreview = document.getElementById('image-preview')
const images = [
  '../images/preview/1.png',
  '../images/preview/2.png'
]


document.getElementById('firstImage').addEventListener('click', () => {
  imagePreview.src = images[0];
})

document.getElementById('secondImage').addEventListener('click', () => {
  imagePreview.src = images[1];
})