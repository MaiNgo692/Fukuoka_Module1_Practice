let fullname = document.getElementById("fullname");
console.log(fullname.lables);
let sex;

let group = document.getElementById("group");
let mail = document.getElementById("mail");
let telnumber = document.getElementById("telnumber");
let japanlevel = document.getElementById("japanlevel");
console.log("japanlevel", japanlevel.value);
let marks = document.getElementById("marks");
let btnSubmit = document.getElementById("submit");
let checkForm = true;

function checkSex() {
    if (document.getElementById('male').checked) {
        sex = document.getElementById('male').value;
        document.getElementById(`alert-sex`).classList.add("none-display");
    } else if (document.getElementById('female').checked) {
        sex = document.getElementById('female').value;
        document.getElementById(`alert-sex`).classList.add("none-display");
    } else {
        checkForm = false;
        document.getElementById(`alert-sex`).innerHTML = "「性別」を選んで。";
        document.getElementById(`alert-sex`).classList.remove("none-display");
    }
}
function checkJapanLevel() {
    if (japanlevel.value == "") {
        checkForm = false;
        document.getElementById(`alert-japanlevel`).innerHTML = "「日本語能力級」を選んで。";
        document.getElementById(`alert-japanlevel`).classList.remove("none-display");
    } else {
        document.getElementById(`alert-japanlevel`).classList.add("none-display");
    }
}
function validateInput() {
    console.log("check and add user");
    validateRequired(fullname);
    validateRequired(mail);
    validateRequired(telnumber);
    validateRequired(marks);
    checkEmail(mail);
    checkSex();
    checkJapanLevel();
    checkTel(telnumber);
    checkMarks(marks);
    if (checkForm) {
        addNewUser();
    }
}
function addNewUser() {
    let userList = JSON.parse(localStorage.getItem("userList")) || [];
    user = {
        fullname: fullname.value,
        sex: sex,
        group: group.value,
        mail: mail.value,
        telnumber: telnumber.value,
        japanlevel: japanlevel.value,
        marks: marks.value,
    }
    userList.push(user);
    localStorage.setItem("userList", JSON.stringify(userList));
    showUserList();
    document.getElementById("fullname").value = "";
    document.getElementById("group").value = "";
    document.getElementById("mail").value = "";
    document.getElementById("japanlevel").value = "";
    document.getElementById("telnumber").value = "";
    document.getElementById("marks").value = "";
}
function checkEmail(mail) {
    if (mail.value != "") {
        if (!mail.value.match(/[^\s@]+@[^\s@]+\.[^\s@]+/)) {
            checkForm = false;
            document.getElementById(`alert-${mail.id}`).innerHTML = "「メール」を正しいに入力して。";
            document.getElementById(`alert-${mail.id}`).classList.remove("none-display");
        } else {
            document.getElementById(`alert-${mail.id}`).classList.add("none-display");
        }
    }
}
function checkMarks(mark) {
    if (mark.value != "") {
        if (0 > mark.value || mark.value > 180) {
            checkForm = false;
            document.getElementById(`alert-${mark.id}`).innerHTML = "0 ～ 180 の「点数」を入力して。";
            document.getElementById(`alert-${mark.id}`).classList.remove("none-display");
        } else {
            document.getElementById(`alert-${mark.id}`).classList.add("none-display");
        }
    }
}
function checkTel(tel) {
    if (tel.value != "") {
        if (!tel.value.match(/^\d{2}(?:-\d{4}-\d{4}|\d{8}|\d-\d{3,4}-\d{4})$/)) {
            checkForm = false;
            document.getElementById(`alert-${telnumber.id}`).innerHTML = "「電話番号」を正しいに入力して";
            document.getElementById(`alert-${telnumber.id}`).classList.remove("none-display");
        } else {
            document.getElementById(`alert-${telnumber.id}`).classList.add("none-display");
        }
    }
}
function validateRequired(elementName) {
    let elId = elementName.id;
    let inputValue = elementName.value;
    let lables = document.getElementsByTagName('label');
    for (let i = 0; i < lables.length; i++) {
        if (lables[i].htmlFor == elId) {
            if (inputValue == "") {
                checkForm = false;
                document.getElementById(`alert-${elId}`).innerHTML = `「${lables[i].textContent}」を入力して。`;
                document.getElementById(`alert-${elId}`).classList.remove("none-display");
            } else {
                document.getElementById(`alert-${elId}`).classList.add("none-display");
            }
            break;
        }
    }
}
function showUserList() {
    let userList = JSON.parse(localStorage.getItem("userList")) || [];
    let text = "";

    for (let i = 0; i < userList.length; i++) {
        let getSex = userList[i].sex==1?'男':'女'
        text += `
        <tr>
            <td>${i + 1}</td>
            <td>${userList[i].fullname}</td>
            <td>${getSex}</td>
            <td>${userList[i].group}</td>
            <td>${userList[i].mail}</td>
            <td>${userList[i].telnumber}</td>
            <td>${userList[i].japanlevel}</td>
            <td>${userList[i].marks}</td>
            <td><a onclick="deleteUser(${i})">削除</a></td>
        </tr>
        `;
    }
    document.getElementById("show-userList").innerHTML = text;
}
showUserList();
function deleteUser(userId) {
    let userList = JSON.parse(localStorage.getItem("userList")) || [];
    if (confirm("削除しますか。") == true) {
        userList.splice(userId, 1);
        localStorage.setItem("userList", JSON.stringify(userList));
    }
    showUserList();
}