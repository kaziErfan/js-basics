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