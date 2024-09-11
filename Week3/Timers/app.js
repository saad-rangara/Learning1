// console.log("Timing In Progress");

// //setTimeout() is a method
// //we need two arguments. task and the time in millisecond

// setTimeout(function() {
//     console.log("I repeat my set every second");
// }, 1000);

// //alternative way of writing
// function timeoutAction() {
//     console.log("Hey, I am outside the timeout method");
// }
// setTimeout(timeoutAction, 1000);


// setInterval(function() {
//     console.log("I repeat myself every 3 second");
// }, 3000);

// // we can combine setInterval and setTimeout to clearInterval() -> stop the interval

// const myInterval//this is variable
// = setInterval(function() {
//     console.log("I repeat myself every 3 second");
// }, 5000);

// function stopTheIntervalPlease() {
//     setTimeout(function() {
//         //we need to tell the clearInterval method to what interval we want to clear
//         clearInterval(myInterval);
//     }, 10000)
// }
// stopTheIntervalPlease();

// let timeout;

// function message() {
//     timeout = setTimeout(alertMe, 3000);
// }

// function alertMe() {
//     alert("Welcome to the TimersPlace");
// }

document.getElementById("actionButton").addEventListener("click", function() {
    // Get the message element
    const message = document.getElementById("message");

    // Show the message
    message.style.display = "block";

    // Set timeout to hide the message after 5 seconds
    setTimeout(function() {
        message.style.display = "none";
    }, 1000);
});

let timerInterval; // To store the interval ID
let imClocking = false; // To track whether the timer is running or not
let elapsedTime = 0; // To track elapsed time

document.getElementById("startStopButton").addEventListener("click", function() {
    const timerDisplay = document.getElementById("timer");

    // Check if the timer is already running
    if (!imClocking) {
        // Start the timer
        timerInterval = setInterval(function() {
            elapsedTime++;
            timerDisplay.textContent = elapsedTime;
        }, 1000);

        // Update button text to indicate stop action
        this.textContent = "Stop Timer";
        imClocking = true;
    } else {
        // Stop the timer
        clearInterval(timerInterval);

        // Update button text to indicate start action
        this.textContent = "Start Timer";
        imClocking = false;
    }
});