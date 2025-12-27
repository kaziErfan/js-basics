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
let info3 = Object.assign({}, info);
console.log(info3);

