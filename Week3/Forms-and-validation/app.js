console.log("Hello");

// we want to select our forms
const form = document.querySelector("form");

// we are going add an event listener to our form

// event handler
function handleSubmit(event){
    event.preventDefault();
    //create an object to store data from input
    const formData = new FormData(form);

    const formValues = Object.fromEntries(formData);
    console.table(formValues);
}

// /event listener
form.addEventListener("submit", handleSubmit);