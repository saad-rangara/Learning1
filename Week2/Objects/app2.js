// let city = {
//     cityname : "Leicester",
//     cityPopulation: 23400,
//     cityClours: ["Black", "White"],
//     cityTCompany: {
//         Staff: ["Saad", "Rangara", "Matser"],
//         locations: ["Leicester", "Derby", "Hinckley"],
//     },
//     greetVisitor: function(){
//         console.log("Hello, Coders!")
//     },
//     greetSVisitor(svisitor){
//         console.log(`Hello ${svisitor}`);
//     },
// };
// console.log(city.cityClours[0]);
// console.log(city.cityTCompany.locations[0]);
// console.log(city.greetVisitor());

// console.log(city.greetSVisitor("Saad"));

// console.log(city.greetSVisitor(city.cityTCompany.Staff[1]));

let myCar = {
    Make: "BMW",
    Discripton: {
        model: ["IX-1000" , "5 Series", "X6 M-Sport"],
        color: ["orangegold" , "MetallicSilver", "Black", "Blue"],
        year: 2030,
        Dealer: {
            dealer1: ["Sandiclife.", "Sturgess."],
            location: ["Leicester", "Manchester", "London"],
        },
    },
    greetSVisitor(svisitor){
        console.log(`Hello ${svisitor}`);
    },
}
let meChoose = `Make of the car is ${myCar.Make}.Choose Dealer: ${myCar.Discripton.Dealer.dealer1[0]} Choose Colour of the Car= ${myCar.Discripton.color[1]}. Choose location for delivery ${myCar.Discripton.Dealer.location[0]}}`
console.log(meChoose);
console.log(myCar.greetSVisitor("Saad"));

let myBook = {
    Cover: "Rebel",
    Discripton: {
        Based: ["Sci-Fi" , "Horror", "Real life stories"],
        Rating: ["10" , "18", "U?", "PG"],
        Release: 2030,
        Stores: {
            Stores: ["WHSmith.", "Tesco", "ASDA"],
            location: ["Hull", "Scotland", "Cornwal"],
        },
    },
    greetBuyer(buyer){
        console.log(`Hello ${buyer}`);
    },
}
let myTag = `I wrote my book "${myBook.Cover}" on basis of: ${myBook.Discripton.Based[2]},${myBook.Discripton.Based[0]},${myBook.Discripton.Based[1]}. You can buy from: ${myBook.Discripton.Stores[0]}`
console.log(myTag);
console.log(myCar.greetSVisitor("I hope you will enjoy reading and recommend to your friends"));

