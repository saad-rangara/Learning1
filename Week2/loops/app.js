// // for (inialisation; Condition; afterthought){
// //     repeated action;
// // }

// for (let i = 0; i < 5; i++) {
//     console.log("HEELLOOO, Running FOR LOOP");
// }

// // while (condition) {
// //     repeated action;
// // }

// let counter = 1;
// while (counter < 5){
//     console.log("Checking While Loop");
//     counter++;
// }

// //for ... of
// //this is a concise version of for loop

// let techStack = ["html", "css", "js", "node.js", "git"];

// //we can use the length of the array as our condition, so the for loop will run for 5 times, in this case
// //index 2 --> js (index starts from 0)
// for (let language of techStack) {
//     console.log(language);
// }

// //forEach()  -->> an array method that performs action for each item in an array

// let me = ["Saad", "Rangara", "Min", "Rang"];

// me.forEach(
//     function(member){
//         //this is anonymous function --> we only this once without any "name"
//         console.log(member);
//     }
// );

// let food = ["Pasta", "Burger", "Ceisp", "Icecream", "Pizza"];
// // can use a <= 5 as condition aswell as <
// for (let a = 0; a < food.length; a++){
//     console.log(food);
// }

for (let s = 10; s > 8; s--) {
    console.log("Shade, s");
}

for (let s = 0; s < 8; s++) {
    console.log("Shade, s");
}

let a = 10;
while ( a <= 20) {
    console.log(a);
    a++;
}

const Hobbies = ["Gaming", "Cricket", "Carrom", "Chess", "Eunning"];
for (let j = 0; j < Hobbies.length; j++) {
    console.log(Hobbies[j]);
}

const Animals = ["Monkey", "Lion", "Jaguar", "Camel", "Bengali Tiger"];
for (let Animal of Animals) {
    console.log(Animals);
}

const Numbers = [2, 4, 6, 8, 10, Infinity];
for (let number of Numbers) {
    console.log(Numbers);
}

let me = ["Saad", "Rangara", "Is", "LEGEND"];

me.forEach(
    function(member){
        console.log(member);
    }
);