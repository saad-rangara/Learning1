console.log("LocalStorage");

const myVeryImportantData = {
    favoriteFood : "Pizza",
    names : ["Saad", "Rangara"],
    sweets : "hazelnut",
    randomNumbers : [2,4,6,8],
    superImportant : "CHAI",
};
//prepare data to send over to local storage
const stringifiedData = JSON.stringify(myVeryImportantData);
console.log(stringifiedData);
//STEP 2 put the data into local storage
//setItem needs 2 arguments, 1 is key, 2 is value

localStorage.setItem("myVeryImportantData", stringifiedData);

//read data from local storage
//STEP1:  Retrieve the data
//getItem needs 1 argument and its KEY
const retrieveData = localStorage.getItem("myVeryImportantData");
console.log(retrieveData);

//STEP2: Translate(Parse) the data
const myOriginalData = JSON.parse(retrieveData);
console.log(myOriginalData);

const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    const formData = new FormData(form);
    const colour = formData.get("colour");
    
    localStorage.setItem("colour", colour);
});

const colour = localStorage.getItem("colour");

if (colour) {
    const input = document.querySelector("input");
    input.value = colour;
}

const forms = document.querySelector("form");

function savePreferences(event) {
    event.preventDefault();
    const formData = new FormData(forms);
    const colour = formData.get("colour");

  // preferences is now an object, it might contain other preferences...
    const preferences = {
    colour,
};

  // so when we save it, we stringify it
localStorage.setItem("preferences", JSON.stringify(preferences));
}

forms.addEventListener("submit", savePreferences);

const preferences = JSON.parse(localStorage.getItem("preferences"));

if (preferences) {
    const input = document.querySelector("input");
    input.value = preferences.colour;
}

function loadPreferences() {
    // load the prefs
    const preferences = JSON.parse(localStorage.getItem("preferences"));

    // if we have some prefs
    if (preferences) {
      // set the form value
        const input = document.querySelector("input");
        input.value = preferences.colour || "#000000"; // || is the "or" operator, it will use the value on the left if it's truthy, otherwise it will use the value on the right as a default value if colour isn't saved

      // set the body color to the user colour preference (intentional US / UK spelling difference...)
    const body = document.querySelector("body");
    body.style.color = preferences.colour || "#000000";
    }
}

function clearPreferences(event) {
    event.preventDefault();
    localStorage.removeItem("preferences");
}