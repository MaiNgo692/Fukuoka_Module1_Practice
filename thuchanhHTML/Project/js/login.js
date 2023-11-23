function signIn() {
    let users = JSON.parse(localStorage.getItem("users"))||[];
    let email= document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let idAdmin = JSON.parse(localStorage.getItem("idAdmin"));

    for (let i = 0; i < users.length; i++) {
        if(users[i].email == email && users[i].password==password){
            if(users[i].id == idAdmin){
                window.location.href="./admin.html";
            }else{
                localStorage.setItem("idUser",users[i].id);
                window.location.href="../index.html";
            }
            
        }
    }
}