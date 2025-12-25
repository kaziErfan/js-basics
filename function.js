// Closures
function abcd(){
    let a = 12;
    return function (){
        console.log(a);
    }
}
abcd()();


// Lexical Scoping

function bcad(){
    let b = 13;
    console.log(b);
    function cbad(){
        let c = 15;
         console.log(c);
        function dbac(){
            let d = 18;
             console.log(d);
        }
        dbac();
    }
    cbad();
}
bcad();


// IIFE

(function(){
    console.log(333);
})()

// Basic Test

// Return the total using rest parameter

function getScore (...scores){
    let total = 0;
    scores.forEach(function(val){
        total = total + val;
    });
    return total;
}
console.log(getScore(12, 14, 15, 16));


// Check age using early return value

function checkAge(age){
    if (age < 18) return "Too Young";
    return "Allowed"
}
// console.log(checkAge(19));
let aged = checkAge(16);
console.log(aged);


// Pass a function into another function and execute it

function hello (value){
    value();
}

hello(function(){
    console.log("Hi")
})


// Closure

function outer(){
    let countNum = 0;
    return function(){
        countNum++;
        console.log(countNum);
    }
}

const bare = outer();
bare();
bare();


// Price discount function using Higher Order Function

function discountCalculator(discount){
    return function(price){
        return price - price * (discount / 100);
    }
}

let discounter = discountCalculator(50);
let ten = discountCalculator(10);
let twenty = discountCalculator(20);

console.log(discounter(1200));
console.log(ten(1200));
console.log(twenty(1200));


// Closure Example
function ben10(){
    let ab = 0;
    return function(){
        ab++;
        return ab;
    };
}

let d = ben10();
console.log(d());
console.log(d());
console.log(d());

let e = ben10();
console.log(e());
console.log(e());

console.log(d());
