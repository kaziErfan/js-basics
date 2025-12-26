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


// Use .filter() to keep numbers greater than 10
let filNum = [5, 7, 8, 9, 10, 13, 15, 14, 12, 20];
let newFil = filNum.filter(function(x){
    return x > 10;
});

console.log(newFil);


// use .reduce() to find the sum of this array
let sumOf = [ 10, 20, 30];

let resultOf = sumOf.reduce(function(acc, value){
    return acc + value;
}, 0);

console.log(resultOf);


// use .find() to get the first number less than 10 in an array

let findNum = [12, 14, 15, 3, 5, 4, 12, 10, 17];
let newNum = findNum.find(function(y){
    return y < 10;
});

console.log(newNum);


// use .some() to check if any student has scored below 35

let marks = [33, 45, 68, 70, 77, 20, 25, 85, 95, 82, 90];
let checkMarks = marks.some((mark) => {
    return mark < 35;
}, );

console.log(checkMarks);
