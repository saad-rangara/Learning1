// console.log("Hello")

//get data from the API

//the async / await keywords are used so our getfoxex() function returns the actual from fetch request, instead of giving us an immediate promise
//Our code usually run synchronically with our browser; our getfoxex() function runs at a pace of the fetch request
//If you ever get a promise, that seems you need some part of your code to run asynchronomically
// async function getFoxes() {
    //we use fetch to get the data from api. we need to write the url we want the data from
//     const response = await fetch("https://randomfox.ca/floof/");
//     console.log(response);

    //we translate our response into JSON
//     const data = await response.json();
//     console.log(data);

//     const wrangledData = data.image;
//     console.log(wrangledData);

//     return wrangledData;
// }


//create a function that matches the API data to an image element

// const foxContainer = document.getElementById("fox-container");

// function createFoxes(foxUrl){
//     const foxImage = document.createElement("img");
//     foxImage.src = foxUrl;
//     foxImage.alt = "Pics of Fox";
//     foxContainer.appendChild(foxImage);
// }

//we need a function to call getfoxes and createFoxes()

// async function addFoxesToThePage(){
    // getFoxes();
    // createFoxes(wrangledData);
//     const getFoxesData = await getFoxes();
//     createFoxes(getFoxesData);
// }

// addFoxesToThePage();

console.log("FETCH API");

async function getPost(){
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    console.log("SR:", response);
    const post = await response.json();
    console.log("SR Data;", post);
    
    return post;
}

const postContainer = document.getElementById("post-container");
function createPost(titleContent, bodyContent){
    const title = document.createElement("h2");
    const body = document.createElement("p");

    title.textContent = titleContent;
    body.textContent = bodyContent;

    postContainer.appendChild(title);
    postContainer.appendChild(body);
}

async function displayPost() {
    const postData = await post();
    postData.forEach ( function (post){
            createPost(post.title, post.body);
        });
}
displayPost();



// fetch("https://jsonplaceholder.typicode.com/photos")
// .then(function (response) {
//     console.log("SR:", response);
//     return response.json();
// })
// .then(function (json){
//     console.log("SR Data:", json)
// })

// async function getGitAPI() {
//     const response = await fetch("https://api.github.com/repos/saad-rangara/Image-Gallery-Week2");
//     console.log(response);
//     const data = await response.json();
//     console.log(data);

//     const wrangledData = data.stargazers_count;
//     console.log(wrangledData);

//     return wrangledData;
// }
// const gitContainer = document.getElementById("workshop");

// function createGIT(gitUrl){
//     const gitImage = document.createElement("img");
//     gitImage.src = gitUrl;
//     gitImage.alt = "Pics from GIT";
//     gitContainer.appendChild(gitImage);
// }
// async function addGIT(){
//     getGitAPI();
//     createGIT(wrangledData);
//     const getFGitData = await getGitAPI();
//     createGIT(getGitData);
// }

// addGIT();