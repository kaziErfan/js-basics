// Closures
function abcd(){
    let a = 12;
    return function (){
        console.log(a);
    }
}
abcd()();