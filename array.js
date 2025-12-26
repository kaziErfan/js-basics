// sort alphabetically and reverse an array

let names = ["Mira", "Jenny", "Zara", "Sonia"];
console.log(names.sort(). reverse());

// Use .map() to square each number of an array

let numSquare = [ 1, 2, 3, 4, 5, 6];
let numResult = numSquare.map(function(val){
    return val * val;
});

console.log(numResult);

// Using reduce to square each number of an array
let arr = [3, 5, 6];
let ans = arr.reduce((accumulator, vale) => {
    accumulator.push(vale ** 2);
    return accumulator;
}, []);
 
console.log(ans);
