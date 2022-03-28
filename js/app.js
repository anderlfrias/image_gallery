const images = document.querySelectorAll('#image');
const openImageContainer = document.querySelector('.open_image');
const currentImage = document.getElementById('current_image');

const close = document.getElementById('close');
const previous = document.getElementById('previous');
const next = document.getElementById('next');

let indexImage = 0;

const openImage = (e) =>{
    openImageContainer.classList.remove('hidden');
    currentImage.src = e.target.src;
    indexImage = Array.from(images).indexOf(e.target);
    console.log(e);
}

const nextImage = () =>{
    if (indexImage === images.length - 1) {
        indexImage = -1;
    }

    currentImage.src = images[indexImage + 1].src;
    indexImage++;
}

const previousImage = () =>{
    if (indexImage === 0) {
        indexImage = images.length;
    }
    currentImage.src = images[indexImage - 1].src;
    indexImage--;
}

images.forEach(image => {
    image.addEventListener('click', openImage)
});

close.addEventListener('click', () =>{
    openImageContainer.classList.add('hidden');
})

next.addEventListener('click', nextImage);
previous.addEventListener('click', previousImage);