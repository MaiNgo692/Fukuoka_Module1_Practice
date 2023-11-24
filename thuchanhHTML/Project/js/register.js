function uuId() {
    return Math.floor(Math.random()*11234455667);
}

// localStorage.removeItem("users");
let toastBox = document.getElementById("toastBox");
let checkForm = true;
function validateInput() {  
checkForm = true;
let userName= document.getElementById("userName");
let email= document.getElementById("email");
let password= document.getElementById("password");
let confirmPassword= document.getElementById("confirmPassword");
    validateRequired(userName);
    validateRequired(email);
    checkEmail(email);
    validateRequired(password);
    checkPassword(password);
    validateRequired(confirmPassword);
    checkConfirmPassword(confirmPassword,password);
    console.log(checkForm);
    if(checkForm){
        signUp();
        userName.value="";
        email.value="";
        password.value="";
        confirmPassword.value="";
        
    }else{
        showToast(InvalidMsg);
    }
}
function checkEmail(mail) {
    let users = JSON.parse(localStorage.getItem("users"))||[];
    if (mail.value != "") {
        if (!mail.value.match(/[^\s@]+@[^\s@]+\.[^\s@]+/)) {
            checkForm = false;
            document.getElementById(`alert-${mail.id}`).innerHTML = "Hãy nhập địa chỉ email của bạn!";
            document.getElementById(`alert-${mail.id}`).classList.remove("none-display");

        } else {
           const find = users.filter((item)=>{
                return item.email == mail.value;
            });
            if(find.length !=0){
                checkForm = false;
                document.getElementById(`alert-${mail.id}`).innerHTML = "Email này đã được đăng ký!";
            document.getElementById(`alert-${mail.id}`).classList.remove("none-display");

            }
        }
    }
}

function checkConfirmPassword(confirmPassword,password) {
    if (confirmPassword.value != "") {
        if (confirmPassword.value != password.value) {
            checkForm = false;
            document.getElementById(`alert-${confirmPassword.id}`).innerHTML = "Hãy nhập trùng với password!";
            document.getElementById(`alert-${confirmPassword.id}`).classList.remove("none-display");

        } else {
            document.getElementById(`alert-${confirmPassword.id}`).classList.add("none-display");
        }
    }
}
function checkPassword(password) {
    if (password.value != "") {
        if (!password.value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/)) {
            checkForm = false;
            document.getElementById(`alert-${password.id}`).innerHTML = "Hãy nhập pass 8 ký tự số, chữ hoa, chữ thường!";
            document.getElementById(`alert-${password.id}`).classList.remove("none-display");
        } else {
            document.getElementById(`alert-${password.id}`).classList.add("none-display");
        }
    }
}
 function signUp() {
    let users = JSON.parse(localStorage.getItem("users"))||[];
    let obj ={
        name: userName.value,
        email: email.value,
        password: password.value,
        id: uuId(),
        status:1,
        cart:[],
    }
    users.push(obj);
    localStorage.setItem("users",JSON.stringify(users));
    showToast(successMsg);
    // setTimeout(()=>{
    //     window.location.href="./login.html";
    // },3000)
    
 }
 function validateRequired(elementName) {
    let elId = elementName.id;
    let inputValue = elementName.value;
    let lables = document.getElementsByTagName('label');
    for (let i = 0; i < lables.length; i++) {
        if (lables[i].htmlFor == elId) {
            if (inputValue == "") {
                checkForm = false;
                document.getElementById(`alert-${elId}`).innerHTML = `「${lables[i].textContent}」là trường bắt buộc!`;
                document.getElementById(`alert-${elId}`).classList.remove("none-display");
            } else {
                document.getElementById(`alert-${elId}`).classList.add("none-display");
            }
            break;
        }
    }
}
 