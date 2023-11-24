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
function filterProductByCatagory(type) {
    let result = productsNeedShow.filter((item) => {
        return item.catagory == type;
    });
    productsNeedShow = result;
    showProductList(productsNeedShow);
}
function filterProductByBrand(type) {
    let result = productsNeedShow.filter((item) => {
        return item.brand == type;
    });
    productsNeedShow = result;
    showProductList(productsNeedShow);
}
function filterProductByPrice(type) {
    let result;
    if (type == 10000001) {
        result = productsNeedShow.filter((item) => {
            return item.price >= type;
        });
    } else if (type == 3000000) {
        result = productsNeedShow.filter((item) => {
            return item.price <= type;
        });
    } else {
        result = productsNeedShow.filter(item => 
        item.price <= type && item.price >= 3000000
        );
    }
    productsNeedShow = result;
    showProductList(productsNeedShow);
}
function showIndextPage() {
    let idAdmin = JSON.parse(localStorage.getItem("idAdmin"));
    localStorage.setItem("idUser", idAdmin);
    window.location.href = "../index.html";
}
function showUserList(users) {
    document.getElementsByClassName('users')[0].classList.remove('d-none');
    document.getElementsByClassName('products')[0].classList.add('d-none');
    let text = '';
    for (let i = 0; i < users.length; i++) {
        let status = users[i].status == 1 ? 'Đang hoạt động' : 'Đang Khóa';
        let action = users[i].status == 1 ? 'Khóa' : 'Mở Khóa';
        text += `
                <tr>
                <th scope="row">${i + 1}</th>
                <td>${users[i].name}</td>
                <td>${users[i].email}</td>
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
    userName = document.getElementById("new-name");
    email = document.getElementById("new-email");
    password = document.getElementById("password");
    checkForm = true;
    validateRequired(userName);
    validateRequired(email);
    checkEmail(email)
    validateRequired(password);
    checkPassword(password);
    if (checkForm) {
        signUp();
        usersNeedShow = JSON.parse(localStorage.getItem('users')) || [];
        showUserList(usersNeedShow);
        userName.value = "";
        email.value = "";
        password.value = "";
    } else {
        showToast(InvalidMsg);
    }
}
function showProductList(products) {
    document.getElementsByClassName('products')[0].classList.remove('d-none');
    document.getElementsByClassName('users')[0].classList.add('d-none');
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
    filterProductCatagory = document.getElementById('filter-catagory');
    console.log("catagory", filterProductCatagory);
    filterProductCatagory.addEventListener("change", (event) => {
        filterProductByCatagory(event.target.value);
    })
    filterProductBrand = document.getElementById('filter-brand');
    filterProductBrand.addEventListener("change", (event) => {
        filterProductByBrand(event.target.value);
    })
    filterProductPrice = document.getElementById('filter-price');
    filterProductPrice.addEventListener("change", (event) => {
        filterProductByPrice(event.target.value);
    })
}
function changeStatusProduct(idProduct) {
    productsNeedShow[idProduct].status = productsNeedShow[idProduct].status == 0 ? 1 : 0;
    localStorage.setItem('products', JSON.stringify(productsNeedShow));
    showProductList(productsNeedShow);
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
function saveProduct(idProduct) {
    productsNeedShow[idProduct].name = document.getElementById('product-name').value;
    productsNeedShow[idProduct].img = document.getElementById('product-img').src;
    productsNeedShow[idProduct].catagory = document.getElementById('catagory').value;
    productsNeedShow[idProduct].brand = document.getElementById('brand').value;
    productsNeedShow[idProduct].price = document.getElementById('price').value;
    productsNeedShow[idProduct].quantity = document.getElementById('quantity').value;
    localStorage.setItem('products', JSON.stringify(productsNeedShow));
    showToast(successEditProductMsg);
    showProductList(productsNeedShow);
}
function deleteProduct(idProduct) {
    if (confirm('Bạn chắc chắn muốn xóa sản phẩm này?')) {
        productsNeedShow.splice(idProduct, 1)
        localStorage.setItem('products', JSON.stringify(productsNeedShow));
        showProductList(productsNeedShow);
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
}
function deleteUser(idUser) {
    if (confirm('Bạn có chắc muốn xóa người dùng này?')) {
        for (let i = 0; i < usersNeedShow.length; i++) {
            if (usersNeedShow[i].id == idUser) {
                usersNeedShow.splice(i, 1);
                break;
            }
        }
        localStorage.setItem('users', JSON.stringify(usersNeedShow));
        showUserList(usersNeedShow);
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
    // let users = JSON.parse(localStorage.getItem('users')) || [];
    let name = document.getElementById('name');
    let email = document.getElementById('email');
    for (let i = 0; i < usersNeedShow.length; i++) {
        if (usersNeedShow[i].id == idUser) {
            usersNeedShow[i].name = name.value;
            usersNeedShow[i].email = email.value;
            break;
        }
    }
    localStorage.setItem('users', JSON.stringify(usersNeedShow));
    showToast(successEditUserMsg);
    showUserList(usersNeedShow);
}
function previewFile() {
    var preview = document.getElementById('product-img');
    var file    = document.querySelector('input[type=file]').files[0];
    var reader  = new FileReader();
    reader.onloadend = function () {
      preview.src = reader.result;
    }
  
    if (file) {
      reader.readAsDataURL(file);
    } else {
      preview.src = "";
    }
  }