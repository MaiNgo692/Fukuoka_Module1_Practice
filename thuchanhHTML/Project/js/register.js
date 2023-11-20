function uuId() {
    return Math.floor(Math.random()*11234455667);
}
 function signUp() {
    let users = JSON.parse(localStorage.getItem("users"))||[];
    let userName= document.getElementById("userName").value;
    let email= document.getElementById("email").value;
    let password= document.getElementById("password").value;
    let confirmPassword= document.getElementById("confirmPassword").value;
    
    let obj ={
        name: userName,
        email: email,
        password: password,
        id: uuId(),
        status:1,
        role:"user",
        cart:[],
    }
    let find = users.filter((item)=>{
        return item.email == email;
    });
    if(find.length !=0){
        alert("email đã được đăng ký");
        return;
    }
    users.push(obj);
    localStorage.setItem("users",JSON.stringify(users));
    window.location.href="./login.html";

 }