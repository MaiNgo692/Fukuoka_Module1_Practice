let editId;
let editProductId;
function showUserList() {
    document.getElementsByClassName('users')[0].classList.remove('d-none');
    document.getElementsByClassName('products')[0].classList.add('d-none');
    let users = JSON.parse(localStorage.getItem('users')) || [];
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
}

function showProductList() {
    document.getElementsByClassName('products')[0].classList.remove('d-none');
    document.getElementsByClassName('users')[0].classList.add('d-none');
    let products = JSON.parse(localStorage.getItem('products')) || [];
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
}
function changeStatusProduct(idProduct) {
    let products = JSON.parse(localStorage.getItem('products')) || [];
    products[idProduct].status = products[idProduct].status == 0 ? 1 : 0;
    localStorage.setItem('products', JSON.stringify(products));
    showProductList();
}
function editProduct(idProduct) {
    let products = JSON.parse(localStorage.getItem('products')) || [];
    document.getElementById('product-name').value = products[idProduct].name;
    document.getElementById('catagory').value = products[idProduct].catagory;
    document.getElementById('brand').value = products[idProduct].brand;
    document.getElementById('price').value = products[idProduct].price;
    document.getElementById('quantity').value = products[idProduct].quantity;
    editProductId = idProduct;
}
function saveProduct(idProduct) {
    let products = JSON.parse(localStorage.getItem('products')) || [];
    products[idProduct].name = document.getElementById('product-name').value;
    products[idProduct].catagory = document.getElementById('catagory').value;
    products[idProduct].brand = document.getElementById('brand').value;
    products[idProduct].price = document.getElementById('price').value;
    products[idProduct].quantity = document.getElementById('quantity').value;
    localStorage.setItem('products', JSON.stringify(products));
    showToast(successEditProductMsg);
    showProductList();
}
function deleteProduct(idProduct) {
    let products = JSON.parse(localStorage.getItem('products')) || [];
    if (confirm('Bạn chắc chắn muốn xóa sản phẩm này?')) {
        products.splice(idProduct, 1)
        localStorage.setItem('products', JSON.stringify(products));
        showProductList();
    }
}

function changeStatus(idUser) {
    let users = JSON.parse(localStorage.getItem('users')) || [];
    let user = users.filter((item) => {
        return item.id == idUser;
    });
    console.log(user);
    user[0].status = user[0].status == 1 ? '0' : '1';
    localStorage.setItem('users', JSON.stringify(users));
    showUserList();
}
function deleteUser(idUser) {
    let users = JSON.parse(localStorage.getItem('users')) || [];
    if (confirm('Bạn có chắc muốn xóa người dùng này?')) {
        for (let i = 0; i < users.length; i++) {
            if (users[i].id == idUser) {
                users.splice(i, 1);
                break;
            }
        }
        localStorage.setItem('users', JSON.stringify(users));
        showUserList();
    }
}
function editUser(idUser) {
    let users = JSON.parse(localStorage.getItem('users')) || [];
    let name = document.getElementById('name');
    let email = document.getElementById('email');
    for (let i = 0; i < users.length; i++) {
        if (users[i].id == idUser) {
            // users.splice(i, 1);
            name.value = users[i].name;
            email.value = users[i].email;
            editId = idUser;
            break;
        }
    }

}
function saveUser(idUser) {
    let users = JSON.parse(localStorage.getItem('users')) || [];
    let name = document.getElementById('name');
    let email = document.getElementById('email');
    for (let i = 0; i < users.length; i++) {
        if (users[i].id == idUser) {
            users[i].name = name.value;
            users[i].email = email.value;
            break;
        }
    }
    localStorage.setItem('users', JSON.stringify(users));
    showToast(successEditUserMsg);
    showUserList();
}