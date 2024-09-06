// let staff = ["Saad", "Rangara","Mike", "Tom"];
// let location = ["Leicester", "Derby", "Birmingham"];

// let Saad = {
//     key: "value",
//     location: "Leicester",
// };

// let memberOfStaff = {
//     staffName: "Min",
//     staffLocation: "Leicester",
//     staffRole: "Admin",
//     startingYear: 2024,
// };

// Saad.location;
// console.log(Saad.location);
//  console.log(Saad.key);

// let myCarMake = ["BMW", "AUDI", "SKODA", "VW", "TOYOTA", "NISSAN", "LEXUS"];
// // let myCarModel = ["2Sr", "A6", "Superb", "Arteon", "BZX", "Arya", "LX"];
// // let myCarColor = ["Black", "Red", "Green", "Golden"];

// let BMW = {
//     Location : "LEICESTER",
//     Color : "Black",
//     Model : "2Sr",
//     Year : 2120,
// };
// BMW.Color
// console.log(BMW.Year);

let car = {
    make: "BMW",
    model: "2 Series",
    color: "Black",
    year: "2030",
};

// Create a string detailing the car's make, model, and color
let myAdvertise = `For Sale: ${car.color} ${car.make} ${car.model} ${car.year}`;

// Log the string to the console
console.log(myAdvertise);

let myBook = {
    title: "Nobody's Land",
    author: "Saad Rangara",
    release: "2024",
};

let myRelease = `Book Release: ${myBook.title} ${myBook.author} ${myBook.release}`;
console.log(myRelease);

let myPost = {
    title: "Web Development for Begineers",
        author: {
            name:"Saad Rangara",
            release: 2024,
        },
        tags: ["JavaScript", "Programming", "Web Development"],
        content: "This book contains everything which can make easier to learn and understand",
};
let mytBook = `Welcome to Coding: ${myPost.title}, Written by: ${myPost.author.name} ${myPost.content}, where you'll learn: ${myPost.tags[2]}`;
console.log(mytBook);