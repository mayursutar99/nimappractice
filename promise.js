const link="http://api.github.com/users/mayursutar09"
const user=fetch(link);
console.log(user);

user.then(response=>{
    caonsole.log(response);
    return response.json();
}).then(data=>{
    console.log(data);
}).catch(error=>{
    console.log(error);
})