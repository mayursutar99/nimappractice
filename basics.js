const b=0;
var c=10;
let a=[1,2,3,4,5]
let str="mayur";
console.log(str);
console.log("for each")
a.forEach(element => {
    console.log(element)
});
for(let i=1;i<=5;i++){
    console.log(i);
}
let k=1;
while(k<=5){
    console.log(k);
    k++;
}
console.log("do while")
do{
    console.log(k);
    k++;
}
while(k<=5)
for(i in a){
    console.log(i)
}
for(i of a){
    console.log(i)
}
let temp=6;

if(temp===6){
    console.log(true);
}else if(temp==7){
    console.log("true but with ==")
}else{
    console.log(false);
}

(temp===7)?console.log("true"):console.log("False");

function greet(){
    console.log("Hello")
}
setTimeout(greet, 2000);