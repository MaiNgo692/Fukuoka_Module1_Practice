let editId;
let editProductId;
let sortUser;
let sortProduct;
let filterProductCatagory;
let filterProductBrand;
let filterProductPrice;
let users = JSON.parse(localStorage.getItem('users')) || [];
let products = JSON.parse(localStorage.getItem('products')) || [];
let productsNeedShow = products;
let usersNeedShow = users;
$(document).ready(function () {
    showUserList(users);
})

function sortUserFun(type) {
    let users = JSON.parse(localStorage.getItem('users')) || [];
    switch (type) {
        case 'name':
            result = users.sort((a, b) => {
                return a.name.localeCompare(b.name);
            })
            break;
        case 'email':
            result = users.sort((a, b) => {
                return a.email.localeCompare(b.email);
            })
            break;
        default:
            result = users
            break;
    }
    usersNeedShow = result
    showUserList(usersNeedShow);
}
function sortProductFun(type) {
    let products = JSON.parse(localStorage.getItem('products')) || [];
    switch (type) {
        case 'name':
            result = products.sort((a, b) => {
                return a.name.localeCompare(b.name);
            })
            break;
        case 'catagory':
            result = products.sort((a, b) => {
                return a.catagory.localeCompare(b.catagory);
            })
            break;
        case 'brand':
            result = products.sort((a, b) => {
                return a.brand.localeCompare(b.brand);
            })
            break;
        case 'price':
            result = products.sort((a, b) => {
                return a.price - b.price;
            })
            break;
        case 'quantity':
            result = products.sort((a, b) => {
                return a.quantity - b.quantity;
            })
            break;
        default:
            result = products;
            break;
    }
    productsNeedShow = result;
    showProductList(productsNeedShow);
}
function filterProduct() {
    let catagory = document.getElementById("filter-catagory").value;
    let brand = document.getElementById("filter-brand").value;
    let price = document.getElementById("filter-price").value;
    let products = JSON.parse(localStorage.getItem('products'));
    let result = products;
    if (catagory) {
        result = result.filter(item => item.catagory == catagory);
    }
    if (brand) {
        result = result.filter(item => item.brand == brand);
    }
    if (price) {
        if (price == 10000001) {
            result = result.filter((item) => {
                return item.price >= price;
            });
        } else if (price == 3000000) {
            result = result.filter((item) => {
                return item.price <= price;
            });
        } else {
            result = result.filter((item) => {
                return item.price <= price && item.price >= 3000000;
            });
        }
    }
    console.log(result);
    showProductList(result);
}


function showUserList(users) {
    document.getElementsByClassName('users')[0].classList.remove('d-none');
    document.getElementsByClassName('products')[0].classList.add('d-none');
    let navList = document.getElementsByClassName('nav-link');
    navList[0].classList.add('link-secondary');
    navList[0].classList.remove('link-dark');
    navList[1].classList.add('link-dark');
    navList[1].classList.remove('link-secondary');

    let text = '';
    for (let i = 0; i < users.length; i++) {
        let status = users[i].status == 1 ? 'Đang hoạt động' : 'Đang Khóa';
        let action = users[i].status == 1 ? 'Khóa' : 'Mở Khóa';
        let role = users[i].role == 0 ? 'User' : 'Admin';
        text += `
                <tr>
                <th scope="row">${i + 1}</th>
                <td>${users[i].name}</td>
                <td>${users[i].email}</td>
                <td>${role}</td>
                <td>${status}</td>
                <td><button onclick="changeStatus(${users[i].id})" class='btn text-primary'>${action}</button>
                    <button  data-bs-toggle="modal" data-bs-target="#modal-user" onclick="editUser(${users[i].id})" class='btn text-warning'>Sửa</button>
                    <button onclick="deleteUser(${users[i].id})" class='btn text-danger'>Xóa</button>
                </td>
              </tr>
                `;
    }
    document.getElementById('user-list').innerHTML = text;
    sortUser = document.getElementById('sort-user');
    sortUser.addEventListener("change", (event) => {
        sortUserFun(event.target.value);
    })
}
function addNewUser() {
    let myModal = document.getElementById('modal-addUser');
    userName = document.getElementById("new-name");
    email = document.getElementById("new-email");
    password = document.getElementById("password");
    role = document.getElementById("role");
    checkForm = true;
    validateRequired(userName);
    validateRequired(email);
    checkEmail(email)
    validateRequired(password);
    checkPassword(password);
    if (checkForm) {
        let users = JSON.parse(localStorage.getItem("users")) || [];
        let obj = {
            name: userName.value,
            email: email.value,
            password: password.value,
            id: uuId(),
            status: 1,
            role: role.value,
            cart: [],
            history: [],
        }
        users.push(obj);
        localStorage.setItem("users", JSON.stringify(users));
        usersNeedShow = JSON.parse(localStorage.getItem('users')) || [];
        userName.value = "";
        email.value = "";
        password.value = "";
        myModal.classList.remove("show");
        let backdrop = document.getElementsByClassName("modal-backdrop");
        backdrop[0].remove();
        showUserList(usersNeedShow);
        showToast(successAddUserMsg);
    } else {
        showToast(InvalidMsg);
    }
}
function addNewProduct() {
    let products = JSON.parse(localStorage.getItem('products')) || [];
    let nameProduct = document.getElementById('new-product-name');
    let imgProduct = document.getElementById('new-product-img');
    let catagoryProduct = document.getElementById('new-catagory');
    let brandProduct = document.getElementById('new-brand');
    let priceProduct = document.getElementById('new-price');
    let quantityProduct = document.getElementById('new-quantity');
    let myModal = document.getElementById('modal-new-product');
    checkForm = true;
    validateRequired(nameProduct.value);
    validateRequired(imgProduct.src);
    validateRequired(catagoryProduct.value);
    validateRequired(brandProduct.value);
    validateRequired(priceProduct.value);
    validateRequired(quantityProduct.value);
    let checkExistName = products.filter(item => item.name == nameProduct)
    if (checkForm && checkExistName.length == 0) {
        let newProduct = {
            name: nameProduct.value,
            catagory: catagoryProduct.value,
            img: imgProduct.src,
            price: priceProduct.value,
            quantity: quantityProduct.value,
            status: 0,
            brand: brandProduct.value,
        }
        nameProduct.value = "";
        imgProduct.src = "";
        catagoryProduct.value = "";
        brandProduct.value = "";
        priceProduct.value = "";
        quantityProduct.value = "";
        document.getElementById('new-img').value = "";
        products.push(newProduct);
        localStorage.setItem("products", JSON.stringify(products));
        myModal.classList.remove("show");
        let backdrop = document.getElementsByClassName("modal-backdrop");
        backdrop[0].remove();
        showProductList(products);
        showToast(successAddProductMsg);
    }
}
function showProductList(products) {
    document.getElementsByClassName('products')[0].classList.remove('d-none');
    document.getElementsByClassName('users')[0].classList.add('d-none');
    let navList = document.getElementsByClassName('nav-link');
    navList[1].classList.add('link-secondary');
    navList[1].classList.remove('link-dark');
    navList[0].classList.add('link-dark');
    navList[0].classList.remove('link-secondary');
    let text = '';
    const VND = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
    });
    for (let i = 0; i < products.length; i++) {
        let status = products[i].status == 0 ? 'Đang bán' : 'Đang không bán';
        let action = products[i].status == 0 ? 'Dừng bán' : 'Bán lại';
        text += `
                <tr>
                <th scope="row">${i + 1}</th>
                <td>${products[i].name}</td>
                <td><img src="${products[i].img}" alt=""></td>
                <td>${products[i].catagory}</td>
                <td>${products[i].brand}</td>
                <td>${VND.format(products[i].price)}</td>
                <td>${products[i].quantity}</td>
                <td>${status}</td>
                <td><button onclick="changeStatusProduct(${i})" class='btn text-primary'>${action}</button>
                    <button  data-bs-toggle="modal" data-bs-target="#modal-product" onclick="editProduct(${i})" class='btn text-warning'>Sửa</button>
                    <button onclick="deleteProduct(${i})" class='btn text-danger'>Xóa</button>
                </td>
              </tr>
                `;
    }
    document.getElementById('product-list').innerHTML = text;
    sortProduct = document.getElementById('sort-product');
    console.log(sortProduct);
    sortProduct.addEventListener("change", (event) => {
        sortProductFun(event.target.value);
    })

}
function changeStatusProduct(idProduct) {
    productsNeedShow[idProduct].status = productsNeedShow[idProduct].status == 0 ? 1 : 0;
    localStorage.setItem('products', JSON.stringify(productsNeedShow));
    showProductList(productsNeedShow);
    showToast(successUpdateStatusProductMsg);
}
function editProduct(idProduct) {
    document.getElementById('product-name').value = productsNeedShow[idProduct].name;
    document.getElementById('product-img').src = productsNeedShow[idProduct].img;
    document.getElementById('catagory').value = productsNeedShow[idProduct].catagory;
    document.getElementById('brand').value = productsNeedShow[idProduct].brand;
    document.getElementById('price').value = productsNeedShow[idProduct].price;
    document.getElementById('quantity').value = productsNeedShow[idProduct].quantity;
    editProductId = idProduct;
}
let checkEnterTime = 0;
setTimeout(function name(params) {
    checkEnterTime = 1;
}, 3000);
function search(select) {
    checkEnterTime = 0;
    if (checkEnterTime) {
        if (select) {
            searchProduct();
        }
        else {
            searchUser();
        }
    }
}
function searchProduct() {
    console.log("search");

    let searchInput = document.getElementById("search-product").value;
    let result = productsNeedShow.filter(item => {
        return item.name.toUpperCase().includes(searchInput.toUpperCase());
    })
    if (result.length != 0) {
        showProductList(result);
    } else {
        let text = document.createElement('p');
        text.classList.add('text-warning');
        text.innerHTML = "Không thấy sản phẩm nào!";
        document.getElementById('product-list').innerHTML = "";
        document.getElementById('product-list').appendChild(text);
    }
}
function searchUser() {
    console.log("search");
    let searchInput = document.getElementById("search-user").value;
    let result = usersNeedShow.filter(item => {
        return item.name.toUpperCase().includes(searchInput.toUpperCase());
    })
    if (result.length != 0) {
        showUserList(result);
    } else {
        let text = document.createElement('p');
        text.classList.add('text-warning');
        text.innerHTML = "Không thấy người dùng nào!";
        document.getElementById('user-list').innerHTML = "";
        document.getElementById('user-list').appendChild(text);
    }
}
function saveProduct(idProduct) {
    productsNeedShow[idProduct].name = document.getElementById('product-name').value;
    productsNeedShow[idProduct].img = document.getElementById('product-img').src;
    productsNeedShow[idProduct].catagory = document.getElementById('catagory').value;
    productsNeedShow[idProduct].brand = document.getElementById('brand').value;
    productsNeedShow[idProduct].price = document.getElementById('price').value;
    productsNeedShow[idProduct].quantity = document.getElementById('quantity').value;
    let myModal = document.getElementById('modal-product');
    localStorage.setItem('products', JSON.stringify(productsNeedShow));
    myModal.classList.remove("show");
    let backdrop = document.getElementsByClassName("modal-backdrop");
    backdrop[0].remove();
    showProductList(productsNeedShow);
    showToast(successEditProductMsg);
}
function deleteProduct(idProduct) {
    if (confirm('Bạn chắc chắn muốn xóa sản phẩm này?')) {
        productsNeedShow.splice(idProduct, 1)
        localStorage.setItem('products', JSON.stringify(productsNeedShow));
        showProductList(productsNeedShow);
        showToast(successDeleteProductMsg);
    }
}
function changeStatus(idUser) {
    let user = usersNeedShow.filter((item) => {
        return item.id == idUser;
    });
    console.log(user);
    user[0].status = user[0].status == 1 ? '0' : '1';
    localStorage.setItem('users', JSON.stringify(usersNeedShow));
    showUserList(usersNeedShow);
    showToast(successUpdateStatusUserMsg);
}
function deleteUser(idUser) {
    let idLogInUser = JSON.parse(localStorage.getItem("idUser"));
    if (confirm('Bạn có chắc muốn xóa người dùng này?')) {
        for (let i = 0; i < usersNeedShow.length; i++) {
            if (usersNeedShow[i].id == idUser) {
                if (idLogInUser != idUser) {
                    usersNeedShow.splice(i, 1);
                    localStorage.setItem('users', JSON.stringify(usersNeedShow));
                    showUserList(usersNeedShow);
                    showToast(successDeleteUserMsg);
                } else {
                    showToast(errorDeleteUserMsg);
                }
                break;
            }
        }

    }
}
function editUser(idUser) {
    let name = document.getElementById('name');
    let email = document.getElementById('email');
    for (let i = 0; i < usersNeedShow.length; i++) {
        if (usersNeedShow[i].id == idUser) {
            name.value = usersNeedShow[i].name;
            email.value = usersNeedShow[i].email;
            editId = idUser;
            break;
        }
    }

}
function saveUser(idUser) {
    let name = document.getElementById('name');
    let email = document.getElementById('email');
    for (let i = 0; i < usersNeedShow.length; i++) {
        if (usersNeedShow[i].id == idUser) {
            usersNeedShow[i].name = name.value;
            usersNeedShow[i].email = email.value;
            break;
        }
    }
    let myModal = document.getElementById('modal-user');
    localStorage.setItem('users', JSON.stringify(usersNeedShow));
    myModal.classList.remove("show");
    let backdrop = document.getElementsByClassName("modal-backdrop");
    backdrop[0].remove();
    showUserList(usersNeedShow);
    showToast(successEditUserMsg);
}
function previewFile(img, id) {
    var preview = document.getElementById(`${img}`);
    var file = document.querySelector(`input[id=${id}]`).files[0];
    var reader = new FileReader();
    reader.onloadend = function () {
        preview.src = reader.result;
    }

    if (file) {
        reader.readAsDataURL(file);
    } else {
        preview.src = "";
    }
}