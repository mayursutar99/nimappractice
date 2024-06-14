const link="http://api.github.com/users/mayursutar09";
async function a(){
    const user= await fetch(link);
    console.log(user);
    const responseData = await user.json();
    console.log(responseData);
}
a()
