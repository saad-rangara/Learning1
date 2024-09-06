console.log("Hello");
console.log(document);

const myButton = document.querySelector("button");
console.log(myButton);

function handleClick(){
    console.log("Clicked");
}

myButton.addEventListener("click", handleClick);
