/*!
* Start Bootstrap - Shop Homepage v5.0.6 (https://startbootstrap.com/template/shop-homepage)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-homepage/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

$(document).ready(function(){
    let checkLogin = localStorage.getItem("idUser");
    if(checkLogin){
        $("#header").load("./page/header1.html");
    }else{
        $("#header").load("./page/header.html");
    }
})
function viewLogInPage() {
    window.location.href="./page/login.html";
}
function viewRegisterPage() {
    window.location.href="./page/register.html";
}
function showPage() {
   
}
showPage();