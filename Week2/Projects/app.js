console.log("Week2");
console.log(document);

let images = [
    {
        src:"https://images.unsplash.com/photo-1700197742784-d11e41543b99?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YW5pbWFsJTIwYmVhdXR5fGVufDB8fDB8fHww",
        alt: "tiger looking at me",
        width:300,
        height:400,
    },
    {
        src: "https://plus.unsplash.com/premium_photo-1694453109154-3c459850503f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGFuaW1hbCUyMGJlYXV0eXxlbnwwfHwwfHx8MA%3D%3D",
        alt: "husky",
        width:300,
        width:400,
    },
    {
        src:"https://images.unsplash.com/photo-1717934431931-e6c5479f685d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGFuaW1hbCUyMGJlYXV0eXxlbnwwfHwwfHx8MA%3D%3D",
        alt: "eagle flying",
        width:300,
        height:400,
    },
    {
        src:"https://plus.unsplash.com/premium_photo-1693160054879-4a822f244336?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGFuaW1hbCUyMGJlYXV0eXxlbnwwfHwwfHx8MA%3D%3D",
        alt: "flock of sheep",
        width:300,
        height:400,
    }
]

function createThumbnails(thumbnailContainer){
    thumbnailContainer.forEach(function (thumbnail, index) {
        createLargeImage(thumbnail,[index])
    });
}

function createLargeImage(largeImage){}