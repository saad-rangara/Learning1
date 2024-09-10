// // // for (inialisation; Condition; afterthought){
// // //     repeated action;
// // // }

// // for (let i = 0; i < 5; i++) {
// //     console.log("HEELLOOO, Running FOR LOOP");
// // }

// // // while (condition) {
// // //     repeated action;
// // // }

// // let counter = 1;
// // while (counter < 5){
// //     console.log("Checking While Loop");
// //     counter++;
// // }

// // //for ... of
// // //this is a concise version of for loop

// // let techStack = ["html", "css", "js", "node.js", "git"];

// // //we can use the length of the array as our condition, so the for loop will run for 5 times, in this case
// // //index 2 --> js (index starts from 0)
// // for (let language of techStack) {
// //     console.log(language);
// // }

// // //forEach()  -->> an array method that performs action for each item in an array

// // let me = ["Saad", "Rangara", "Min", "Rang"];

// // me.forEach(
// //     function(member){
// //         //this is anonymous function --> we only this once without any "name"
// //         console.log(member);
// //     }
// // );

// // let food = ["Pasta", "Burger", "Ceisp", "Icecream", "Pizza"];
// // // can use a <= 5 as condition aswell as <
// // for (let a = 0; a < food.length; a++){
// //     console.log(food);
// // }

// for (let s = 10; s > 8; s--) {
//     console.log("Shade, s");
// }

// for (let s = 0; s < 8; s++) {
//     console.log("Shade, s");
// }

// let a = 10;
// while ( a <= 20) {
//     console.log(a);
//     a++;
// }

// const Hobbies = ["Gaming", "Cricket", "Carrom", "Chess", "Eunning"];
// for (let j = 0; j < Hobbies.length; j++) {
//     console.log(Hobbies[j]);
// }

// const Animals = ["Monkey", "Lion", "Jaguar", "Camel", "Bengali Tiger"];
// for (let Animal of Animals) {
//     console.log(Animals);
// }

// const Numbers = [2, 4, 6, 8, 10, Infinity];
// for (let number of Numbers) {
//     console.log(Numbers);
// }

// let me = ["Saad", "Rangara", "Is", "LEGEND"];

// me.forEach(
//     function(member){
//         console.log(member);
//     }
// );

const images = [
    {
        image: `https://images.unsplash.com/photo-1624668456438-275609251df9?q=80&w=2050&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
        thumbnail: `https://images.unsplash.com/photo-1624668456438-275609251df9?q=80&w=2050&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
        alt: `A beautiful crane about to take flight in the snow, taken in Tsurui, Hokkaido, Japan`,
    },{
        image: `https://images.unsplash.com/photo-1604608684575-0478ddb56d48?q=80&w=2033&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
        thumbnail: `https://images.unsplash.com/photo-1604608684575-0478ddb56d48?q=80&w=2033&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
        alt: `A lynx licking its paw in the snow`
    },{
        image: `https://images.unsplash.com/photo-1612957514614-9c5bc5ba245f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
        thumbnail: `https://images.unsplash.com/photo-1612957514614-9c5bc5ba245f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
        alt: `A brown dog standing at attention in the snow, warm light filtering behind it.`
    },{
        image: `https://images.unsplash.com/photo-1597732081142-329f64f5962f?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
        thumbnail: `https://images.unsplash.com/photo-1597732081142-329f64f5962f?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
        alt: `A brown dog standing at attention in the snow, warm light filtering behind it.`
    },{
        image: `https://images.unsplash.com/photo-1463436755683-3f805a9d1192?q=80&w=2948&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
        thumbnail: `https://images.unsplash.com/photo-1463436755683-3f805a9d1192?q=80&w=2948&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
        alt: `A brown dog standing at attention in the snow, warm light filtering behind it.`
    }
]


let thumbContainer = document.getElementById('thumb-container')
let currentImageIndex = 0
const displayElem = document.getElementById('display')

// async
function init() {
    // await fetchImages()
    console.log(images)
    updateDisplayImage(images[currentImageIndex])
    createThumbnails()
}


function createThumbnails() {
    for (let image of images) {
        let thumbImg = document.createElement('img')

        thumbImg.setAttribute('src', image.image)
        thumbImg.setAttribute('alt', image.alt)
        thumbImg.setAttribute('tabindex', '0')
        thumbImg.classList.add('thumb-image')
        thumbContainer.appendChild(thumbImg)
        thumbImg.addEventListener('click', function () {
            updateDisplayImage(image)
            document.getElementById('announcer').textContent = image.alt
        })
        thumbImg.addEventListener('keydown', function (event) {
            document.getElementById('announcer').textContent = image.alt
            if (event.key === 'Enter') updateDisplayImage(image)
            
        })
    }
}

function updateScrollBar(currentImage) {

    let thumbnails = thumbContainer.querySelectorAll('.thumb-image');
    let activeThumbnail;
    thumbnails.forEach(function (thumb) {
        if(thumb.getAttribute('src') === currentImage.thumbnail) {
            activeThumbnail = thumb;
        }
    });

    if (activeThumbnail) {
        // getBoundingClientRect returns a fancy object that tells us where our elements are on the page. 
        const thumbRect = activeThumbnail.getBoundingClientRect();
        const containerRect = thumbContainer.getBoundingClientRect();

        // Calculate the position to scroll to, centering the active thumbnail. I found this online!
        let scrollLeftPos = activeThumbnail.offsetLeft + thumbRect.width / 2 - containerRect.width / 2;

        thumbContainer.scrollTo({
            left: scrollLeftPos,
            behavior: 'smooth'
        });
    }
}


function updateDisplayImage(image) {
    let currentDisplayImage = displayElem.firstChild

    if (!currentDisplayImage) { 
        currentDisplayImage = document.createElement('img')
        displayElem.appendChild(currentDisplayImage)
    }
 
    currentDisplayImage.setAttribute('src', image.image)
    currentDisplayImage.setAttribute('alt', image.alt)
    updateScrollBar(image)
    document.getElementById('announcer').textContent = image.alt
}

next.addEventListener('click', function() { selectNextImage(1) })
prev.addEventListener('click', function() { selectNextImage(-1)})

thumbContainerHideButton.addEventListener('click', function() {
    thumbContainer.classList.toggle('hidden')
    if (thumbContainer.classList.contains('hidden')) {
        thumbContainerHideButton.classList.add('thumbContainerHideButton-thumbnailsHidden');
    } else {
        thumbContainerHideButton.classList.remove('thumbContainerHideButton-thumbnailsHidden');
    }
})



function selectNextImage(index) {
    currentImageIndex += index

    if (currentImageIndex >= images.length) currentImageIndex = 0
    if (currentImageIndex < 0) currentImageIndex = images.length - 1
    console.log(currentImageIndex)
    updateDisplayImage(images[currentImageIndex])
}

window.onload = init

// update our image depending on button press
// we have an array of indexes. We could say, something like 
// if there isn't a current Image yet (like onload) intitalize one (0). 
// if they press the next button, change the current image to index+1
// if they press the prev button, change the current image to index-1
// if the imageindex+1 would be greater then the length of the array, return 0 instead (so it goes back to the start of the images array)


// bunch of assessibility and additional events to listen for. 
// =========================================================
let touchstartX = 0;
let touchendX = 0;
// i got a bit distracted. This is also kinda bad (os normally has it's own behaviour for swiping.)
function handleGesture() {
    let threshold = 50
    if (touchendX < touchstartX - threshold) {
        console.log('swipedright');
        selectNextImage(1);
    }
    
    if (touchendX > touchstartX + threshold) {
        console.log('swiped left');
        selectNextImage(-1);
    }
}

displayElem.addEventListener('touchstart', e => {
    touchstartX = e.changedTouches[0].screenX;
});

displayElem.addEventListener('touchend', e => {
    touchendX = e.changedTouches[0].screenX;
    handleGesture();
});

window.addEventListener('keydown', handleArrowKeyPress);

function handleArrowKeyPress(event) {
    if (event.key === 'ArrowRight') {
        selectNextImage(1);
    } else if (event.key === 'ArrowLeft') {
        selectNextImage(-1);
    }
}