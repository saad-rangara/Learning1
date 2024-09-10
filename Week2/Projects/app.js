console.log("Week2");
console.log(document);

let images = [
    {
        src: "./Images/Deer.jpg",
        alt: "Deer looking at me",
    },
    {
        src: "./Images/Lion.jpg",
        alt: "Roar Scary",
    },
    {
        src: "./Images/LionDark.jpg",
        alt: "Lion sitting",
    },
    {
        src: "./Images/Snowie.jpg",
        alt: "snow dod got eyes on me",
    },
    {
        src: "./Images/Tiger.jpg",
        alt: "tiger in the jungle",
    }
]

let imagegallery = document.getElementById("image-gallery");
let currentImage = 0
let mainImageContainer = document.getElementById("main-image-container");
mainImageContainer.appendChild(createLargeImage(images[currentImage]))

let nextButton = document.getElementById("Next");
nextButton.addEventListener('click', function() {
    console.log("currentImage", currentImage)
    if(currentImage == images.length - 1) {
        currentImage = 0;
    } else {
        currentImage = currentImage + 1;
    }
    console.log("currentImage", currentImage)

    mainImageContainer.innerHTML = ""
    mainImageContainer.appendChild(createLargeImage(images[currentImage]))

})

let prevButton = document.getElementById("Prev");
prevButton.addEventListener("click", function(){
    console.log("prevButton", currentImage);
    if (currentImage == 0){
        currentImage = images.length - 1;
    } else {
        currentImage = currentImage - 1;
    }
    mainImageContainer.innerHTML = ""
    mainImageContainer.appendChild(createLargeImage(images[currentImage]))
    // console.log("mainImageContainer");
})


createThumbnails()

function createThumbnails(){
    let imagegallery = document.getElementById("image-gallery");
    images.forEach((gallery, index) => {
        let thumbnailImage = document.createElement(`img`)
        thumbnailImage.setAttribute(`src`, gallery.src)
        thumbnailImage.setAttribute(`alt`, gallery.alt)
        imagegallery.appendChild(thumbnailImage)
        thumbnailImage.addEventListener(`click`, function() {
            mainImageContainer.innerHTML = ""
            mainImageContainer.appendChild(createLargeImage(gallery))
            currentImage = index
        })
    });

}

function createLargeImage(image) {
   let largeImage = document.createElement(`img`)
   largeImage.setAttribute("src", image.src)
   largeImage.setAttribute("alt", image.alt)
//    console.log(largeImage)
   return largeImage;
}