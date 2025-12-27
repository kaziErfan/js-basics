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