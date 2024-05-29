//named functions
function add(a,b){
    return a+b;
}
console.log(add(4,5));

//arrow functions
const add2=(a,b)=>a+b;
console.log(add2(6,7));

// pure and impure
function div(a,b){
    return a/b;
}
let result=0;
function mul(a,b){
    result=a*b;
    return result;
}

//callback
function callback(data){
    console.log(data);
}
function fetchData(){
    setTimeout(()=>{
        const data="some data";
        callback(data);
    },1000);
}
fetchData(callback);

//higher order

function cal(callback){
    return callback(data);
}
//first class functions
var first=add
console.log(first(5,6));

//function expression and anonymous
const m=function(a,b){
    return a+b;
}
console.log(m(7,8));

//recursion
function fact(n){
    if(n===0 || n===1){
        console.log(n);
    }else{
        return n*fact(n-1);
    }
}
fact(5);

//generator 
function* generator() {
    yield 1;
    yield 2;
    yield 3;
}
for (const value of generator()) {
    console.log(value); 
}
