// obj key accessing using for in loop

let obj = {
    name: "Tamim",
    age: 26,
    email: "test@test.com",
};

for(let key in obj){
    console.log(key, ":", obj[key]);
};

console.log(Object.keys(obj));
console.log(Object.entries(obj));


// Copying Object using spread operator
let info = {
    name: "Erfan",
    age: 27,
    email: "erfan@gmail.com",
};

console.log(info);

let info2 = {...info};
console.log(info2);

// Alternative to spread operator - Object.assign
let info3 = Object.assign({price:Infinity}, info); //It can also add an property to the info object
console.log(info3);


// Deep Cloning
let information = {
    name: "Erfan",
    age: 26,
    email: "erfan@gmail.com",
    address: {
        city: "Chattogram",
    },
};

let information2 = JSON.parse(JSON.stringify(information));
console.log(information2);


// Optional Chaining
console.log(information?.adresses?.city);

// Computer Properties
let role = "admin";

let collect = {
    name: "Erfan",
    age: 26,
    email: "erfan8@gmail.com",
    address:{
        city: "Chattogram",
    },
    [role]: "Erfan",
};
console.log(collect);
  
// Given a dynamic value. let key = "age". How will we access user[key]?
let key = "age";
const user = {
    age: 26,
};
console.log(user[key]);


// From the object below, print the latitude

const locations = {
    city: "Chittagong",
    coordinates : {
        lat: 24.2,
        lng: 77.4,
    },
};

console.log(locations.coordinates.lat);

// What will happen if coordinates is missing? How can you prevent errors?
// Ans: Using Optional Chaining
console.log(locations?.coordinatess?.lat)

// Destructure the city and latitude from the location object above
let {city} = locations;
let {lat} = locations.coordinates;
console.log(city, lat);