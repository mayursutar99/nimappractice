let a=50
let b=5
console.log("First Number: "+a)
console.log("First Number: "+b)
let c=1
console.log("1.Addition\n2.Subtraction\n3.Multiplication\n4.Division\n5.reminder")
console.log("Choice: "+c)
function add(a,b){
    return a+b;
}
function sub(a,b){
    return a-b;
}
function mul(a,b){
    return a*b;
}
function div(a,b){
    return a/b;
}
function rem(a,b){
    return a%b;
}
switch(c){
    case 1:
    console.log("Ans: "+add(a,b))
    break;
    case 2:
        console.log("Ans: "+sub(a,b));
    break;
    case 3:
        console.log("Ans: "+mul(a,b));
    break;
    case 5:
        console.log("Ans: "+div(a,b));
    break;
    case 5:
        console.log("Ans: "+rem(a,b));
    break;
    default:
        console.log("Wrong input");
}