function get(){
    const obj ={
        name:'test',
       
    }
}
const mayur={
    name:'shubham',
    age:20,
    sex:'male',
    get2: function(){
        console.log(this.name);
    },
    x:()=>{
        console.log(this);
    }
}

let mayursutar = Object.create(mayur);
mayursutar.name = "mayur"
mayursutar.location="pune"
console.log(mayursutar.age)
mayursutar.get2();
get();
const students ={
    name:'shubham',
    age:30,
    sex:'male',
    x:function(){
        console.log(this);
    }
}
students.x();
const students2 = {
    name:'Mayur',
    age:50,
    sex:'male',
}
students.x.call(students2);

