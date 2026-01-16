const btn = document.getElementById('add')
const carousel = document.getElementById('carousel')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
let images = []
let currentIndex = 0

btn.addEventListener('click',()=>{
    if (images.length>= 5){
        alert('You can only add 5 images')
        return
    }
    let addImage = prompt('Enter URL:')
    if(addImage){
        images.push(addImage)
        prev.style.display = 'inline-block'
        next.style.display = 'inline-block'
        showImages()
    }
})

const showImages = () => {
    carousel.innerHTML = ''
    if (images.length > 0){
        const img = document.createElement('img')
        img.src = images[currentIndex]
        img.style.width = '400px'
        img.style.height = '300px'
        carousel.appendChild(img)
    }
}

function nextImage(){
    currentIndex++
    if (currentIndex >= images.length) {
        currentIndex = 0
    }
    showImages()
}

function prevImage() {
    currentIndex--
    if (currentIndex < 0) {
        currentIndex = images.length - 1
    }
    showImages()
}

prev.addEventListener('click', prevImage)
next.addEventListener('click', nextImage)