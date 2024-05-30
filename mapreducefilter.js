let a=[34,67,89]
a.forEach((value)=>{
    console.log(value)
})
let b=a.map((value)=>{
    return value+1
})
console.log(b)

let c=a.reduce((ele,ele2)=>{
    return ele+ele2;
})
console.log(c)