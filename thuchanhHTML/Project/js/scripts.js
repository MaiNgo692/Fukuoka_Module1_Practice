/*!
* Start Bootstrap - Shop Homepage v5.0.6 (https://startbootstrap.com/template/shop-homepage)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-homepage/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

$(document).ready(function () {
    let checkLogin = localStorage.getItem("idUser");
    if (checkLogin) {
        $("#header").load("./page/header1.html",function(){
            showCartQuantity();
        });
        
    } else {
        $("#header").load("./page/header.html");
        
    }
    $("#footer").load("./page/footer.html");
    $("#silder").load("./page/silder.html",function(){
        showSlides();
    });
})
let catagorys = ["Máy Hút Mùi","Bếp Từ","Bếp Ga","Thiết Bị Nhà Bếp Khác"];
localStorage.setItem("catagorys",JSON.stringify(catagorys));
let brands =["Kainer","Canzy","Bosch","Canaval","Taka","Eurosun","Arber"];
localStorage.setItem("brands",JSON.stringify(brands));
let products = [
    {
        name: "Máy Hút Mùi Kính Cong Kainer KA-270C",
        catagory: "Máy Hút Mùi",
        img: "https://static.bepantoan.vn/userfiles/images/k1.jpg",
        price: 3800000,
        quantity: 50,
        status: 0,
        brand: "Kainer",
    },
    {
        name: "Máy Hút Mùi Canzy CZ-7002G",
        catagory: "Máy Hút Mùi",
        img: "https://static.bepantoan.vn/userfiles/images/product/large_may-hut-mui-canzy-cz-7002gx500x500x4.jpg",
        price: 2990000,
        quantity: 50,
        status: 0,
        brand: "Canzy",
    },
    {
        name: "Máy Hút Mùi Canzy CZ-70TS",
        catagory: "Máy Hút Mùi",
        img: "https://static.bepantoan.vn/userfiles/images/may-hut-mui-canzy-cz-70ts-p8955.jpg",
        price: 2860000,
        quantity: 50,
        status: 0,
        brand: "Canzy",
    },
    {
        name: "Máy Hút Mùi Bosch DFT63AC50",
        catagory: "Máy Hút Mùi",
        img: "https://static.bepantoan.vn/userfiles/images/product/large_may-hut-mui-bosch-dft63ac50x500x500x4.jpg",
        price: 6680000,
        quantity: 50,
        status: 0,
        brand: "Bosch",
    },
    {
        name: "Máy Hút Mùi Âm Trần Canzy CZ 68D",
        catagory: "Máy Hút Mùi",
        img: "https://static.bepantoan.vn/userfiles/images/68d.jpg",
        price: 6390000,
        quantity: 50,
        status: 0,
        brand: "Canzy",
    },
    {
        name: "Máy Hút Mùi Chữ T Kainer KA-70T",
        catagory: "Máy Hút Mùi",
        img: "https://static.bepantoan.vn/userfiles/images/ka70t.jpg",
        price: 5600000,
        quantity: 50,
        status: 0,
        brand: "Kainer",
    },
    {
        name: "Máy Hút Mùi Bosch DWB77CM50",
        catagory: "Máy Hút Mùi",
        img: "https://static.bepantoan.vn/userfiles/images/product/MCSA02612101_DWB77CM50_ChimneyHood_Bosch_STP_defx500x500x4.jpg",
        price: 16600000,
        quantity: 50,
        status: 0,
        brand: "Bosch",
    },
    {
        name: "Máy Hút Mùi Cổ Điển Canzy CZ 506I",
        catagory: "Máy Hút Mùi",
        img: "https://static.bepantoan.vn/userfiles/images/506i.jpg",
        price: 2690000,
        quantity: 50,
        status: 0,
        brand: "Canzy",

    },
    {
        name: "Bếp Từ Đôi Bosch PPI8256MS",
        catagory: "Bếp Từ",
        img: "https://static.bepantoan.vn/userfiles/images/82560.jpeg",
        price: 9980000,
        quantity: 50,
        status: 0,
        brand: "Bosch",
    },
    {
        name: "Bếp Từ Đôi Kainer KA-828EU",
        catagory: "Bếp Từ",
        img: "https://static.bepantoan.vn/userfiles/images/828-EU%202.jpg",
        price: 16800000,
        quantity: 50,
        status: 0,
        brand: "Kainer",
    },
    {
        name: "Bếp Từ Đôi Kainer KA-6262EU",
        catagory: "Bếp Từ",
        img: "https://static.bepantoan.vn/userfiles/images/ka.jpg",
        price: 16500000,
        quantity: 50,
        status: 0,
        brand: "Kainer",
    },
    {
        name: "Bếp Từ Đôi Kainer KA-888EU",
        catagory: "Bếp Từ",
        img: "https://static.bepantoan.vn/userfiles/images/888-EU%202.jpg",
        price: 13800000,
        quantity: 50,
        status: 0,
        brand: "Kainer",
    },
    {
        name: "Bếp Từ Đức Bosch PUC631BB2E",
        catagory: "Bếp Từ",
        img: "https://static.bepantoan.vn/userfiles/images/product/large_bep-tu-bosch-puc631bb2ex500x500x4.jpg",
        price: 10400000,
        quantity: 50,
        status: 0,
        brand: "Bosch",
    },
    
    {
        name: "Bếp Ga Âm Canzy CZ-862",
        catagory: "Bếp Ga",
        img: "https://static.bepantoan.vn/userfiles/images/Canzy%20CZ-862%201.jpg",
        price: 3680000,
        quantity: 50,
        status: 0,
        brand: "Canzy",

    },
    {
        name: "Bếp Ga Dương Canaval 338",
        catagory: "Bếp Ga",
        img: "https://static.bepantoan.vn/userfiles/images/z2118692225675_470f575354537b57e54f85e568a7e231.jpg",
        price: 1680000,
        quantity: 50,
        status: 0,
        brand: "Canaval",
    },
    {
        name: "Bếp Dương Hồng Ngoại Taka - 120D",
        catagory: "Bếp Ga",
        img: "https://static.bepantoan.vn/userfiles/images/120d.jpg",
        price: 1350000,
        quantity: 50,
        status: 0,
        brand: "Taka",
    },
    {
        name: "Bếp Ga 2 Lò Model CA6868",
        catagory: "Bếp Ga",
        img: "https://static.bepantoan.vn/userfiles/2022/06/09/ba2.png",
        price: "",
        quantity: 50,
        status: 0,
        brand: "Canaval",
    },
    {
        name: "Lò Nướng Eurosun EOV65ME",
        catagory: "Thiết Bị Nhà Bếp Khác",
        img: "https://static.bepantoan.vn/userfiles/images/product/large_lo-nuong-eurosun-eov65mex500x500x4.png",
        price: 10270000,
        quantity: 50,
        status: 0,
        brand: "Eurosun",

    },
    {
        name: "Lò Vi Sóng Eurosun MWO-T25EUR",
        catagory: "Thiết Bị Nhà Bếp Khác",
        img: "https://static.bepantoan.vn/userfiles/images/product/e8x500x500x4.jpg",
        price: 3630000,
        quantity: 50,
        status: 0,
        brand: "Eurosun",

    },
    {
        name: "Lò Nướng Bosch HMH.HBF113BR0A",
        catagory: "Thiết Bị Nhà Bếp Khác",
        img: "https://static.bepantoan.vn/userfiles/images/product/MCSA02380996_HBF113BR0A_BuiltInOven_Bosch_STP_EVO_defx500x500x4.jpg",
        price: 9825000,
        quantity: 50,
        status: 0,
        brand: "Bosch",

    },
    {
        name: "Lò Nướng Canzy CZ 601M",
        catagory: "Thiết Bị Nhà Bếp Khác",
        img: "https://static.bepantoan.vn/userfiles/images/lo-nuong-canzy-CZ-601M.jpg",
        price: 6889996,
        quantity: 50,
        status: 0,
        brand: "Canzy",

    },
    {
        name: "Lò Nướng Bosch HBN531E1F",
        catagory: "Thiết Bị Nhà Bếp Khác",
        img: "https://static.bepantoan.vn/userfiles/images/product/large_lo-nuong-bosch-hbn531e1fx500x500x4.jpg",
        price: 11640000,
        quantity: 50,
        status: 0,
        brand: "Bosch",

    },
    {
        name: "Lò Nướng Bosch HBG675BB1",
        catagory: "Thiết Bị Nhà Bếp Khác",
        img: "https://static.bepantoan.vn/userfiles/images/product/large_lo-nuong-bosch-hbg675bb1x500x500x4.jpg",
        price: 25937000,
        quantity: 50,
        status: 0,
        brand: "Bosch",

    },
    {
        name: "Bộ Nồi Arber ABAN 05SMD",
        catagory: "Thiết Bị Nhà Bếp Khác",
        img: "https://static.bepantoan.vn/userfiles/images/bo-noi-chao-aber-5-mon-an-05smd.jpg",
        price: 3050000,
        quantity: 50,
        status: 0,
        brand: "Arber",

    },
    {
        name: "Bộ Nồi Arber ABAN 05SMDT",
        catagory: "Thiết Bị Nhà Bếp Khác",
        img: "https://static.bepantoan.vn/userfiles/images/an05smdt.jpg",
        price: 2680000,
        quantity: 50,
        status: 0,
        brand: "Arber",

    },
    {
        name: "Ấm Đun Từ Arber AB 03DT",
        catagory: "Thiết Bị Nhà Bếp Khác",
        img: "https://static.bepantoan.vn/userfiles/images/am-dun-nuoc-tu-arber-ab-03dt.jpg",
        price: 1050000,
        quantity: 50,
        status: 0,
        brand: "Arber",

    },
    {
        name: "Bộ Nồi Eurosun MC1608-PASSION",
        catagory: "Thiết Bị Nhà Bếp Khác",
        img: "https://static.bepantoan.vn/userfiles/images/1608.jpg",
        price: 3800000,
        quantity: 50,
        status: 0,
        brand: "Eurosun",

    },
    {
        name: "Nồi Luộc Gà MS1601-KINGS",
        catagory: "Thiết Bị Nhà Bếp Khác",
        img: "https://static.bepantoan.vn/userfiles/images/eu.png",
        price: 1350000,
        quantity: 50,
        status: 0,
        brand: "Eurosun",

    },
    {
        name: "Bộ Nồi Inox MC1801-LUXURY",
        catagory: "Thiết Bị Nhà Bếp Khác",
        img: "https://static.bepantoan.vn/userfiles/images/mc1801-luxury%202(1).png",
        price: 4490000,
        quantity: 50,
        status: 0,
        brand: "Eurosun",

    },
    {
        name: "Bộ Nồi Inox MC1702-HARMONY",
        catagory: "Thiết Bị Nhà Bếp Khác",
        img: "https://static.bepantoan.vn/userfiles/images/noi-tu-eurosun-mc1702-harmony.png",
        price: 3300000,
        quantity: 50,
        status: 0,
        brand: "Eurosun",
    },
]

// localStorage.setItem("products", JSON.stringify(products));

let totalItem = 9;
let totalPage = Math.ceil(products.length / totalItem);
let start;
let end;
let curentPage = 1;
let productsNeedShow;
function startEnd(curentPage) {
    start = (curentPage - 1) * totalItem;
    end = curentPage * totalItem;
}
startEnd(1);
function getTotalPage(params) {
    totalPage = Math.ceil(params.length / totalItem);
}

function viewLogInPage() {
    localStorage.removeItem('idUser');
    window.location.href = "./page/login.html";
}
function viewRegisterPage() {
    window.location.href = "./page/register.html";
}
let showProduct;
let pages;

window.onload = (function () {
    showProduct = document.getElementById("show-product");
    productsNeedShow = products
    showProducts(productsNeedShow);
    pages = document.getElementsByClassName("pagination")[0];
    pageListShow();
});
function showProducts(products) {
    const VND = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
    });
    let text = "";
    for (let i = 0; i < products.length; i++) {
        if (i >= start && i < end) {
            text += `
        <div class="col  mb-5 shadow p-3 bg-body mx-1 rounded">
                    <div class="card h-100">
                        <!-- Product image-->
                        <img class="card-img h-50" src="${products[i].img}" alt="..." />
                        <!-- Product details-->
                        <div class="card-body p-4">
                            <div class="text-center">
                                <!-- Product name-->
                                <h5 class="fw-bolder">${products[i].name}</h5>
                                <!-- Product price-->
                                ${VND.format(products[i].price)}
                            </div>
                        </div>
                        <!-- Product actions-->
                        <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                            <div class="text-center"><a class="btn btn-outline-primary mt-auto" href="#" onclick="addToCart(${i})">Add to cart</a></div>
                        </div>
                    </div>
                </div>
        `;
        }
    }
    console.log(showProduct);
    showProduct.innerHTML = text;
}
function sortProduct(type) {
    let navList = document.getElementsByClassName('nav-link');
    for (let i = 0; i < navList.length; i++) {
        if(navList[i].textContent == type){
            navList[i].classList.add('link-secondary');
            navList[i].classList.remove('link-dark');
        }else{
            navList[i].classList.add('link-dark');
            navList[i].classList.remove('link-secondary');
        }
    }
    let result;
    let products = JSON.parse(localStorage.getItem("products")) || [];
    let text;
    if(type=='Trang chủ'){
        result = products;
        text = `
    <select class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3 rounded"  name="filter-catagory" id="filter-catagory">
        <option value="" selected>Lọc theo Catagory</option>
        <option value="Bếp Ga">Bếp Ga</option>
        <option value="Bếp Từ">Bếp Từ</option>
        <option value="Máy Hút Mùi">Máy Hút Mùi</option>
        <option value="Thiết Bị Nhà Bếp Khác">Thiết Bị Nhà Bếp Khác</option>
    </select>        
    <select class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3 rounded"  name="filter-brand" id="filter-brand">
        <option value="" selected>Lọc theo Brand</option>
        <option value="Bosch">Bosch</option>
        <option value="Kainer">Kainer</option>
        <option value="Canzy">Canzy</option>
        <option value="Canaval">Canaval</option>
        <option value="Taka">Taka</option>
        <option value="Eurosun">Eurosun</option>
        <option value="Arber">Arber</option>
    </select>
    <select class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3 rounded"  name="filter-price" id="filter-price">
        <option value="" selected>Lọc theo Price</option>
        <option value="3000000">0 &lt = 3M</option>
        <option value="10000000">3M ~ 10M </option>
        <option value="10000001">&gt 10M</option>
    </select>
    <button class="btn btn-primary col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" onclick="filterProduct(0)">Lọc</button>
    <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
        <input type="search" class="form-control" placeholder="Search..." aria-label="Search" oninput="searchProduct()" id="search">
    </form>`;
        document.getElementById('product-action').innerHTML = text;
    }else{
        text = `     
    <select class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3 rounded"  name="filter-brand" id="filter-brand">
        <option value="" selected>Lọc theo Brand</option>
        <option value="Bosch">Bosch</option>
        <option value="Kainer">Kainer</option>
        <option value="Canzy">Canzy</option>
        <option value="Canaval">Canaval</option>
        <option value="Taka">Taka</option>
        <option value="Eurosun">Eurosun</option>
        <option value="Arber">Arber</option>
    </select>
    <select class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3 rounded"  name="filter-price" id="filter-price">
        <option value="" selected>Lọc theo Price</option>
        <option value="3000000">0 &lt = 3M</option>
        <option value="10000000">3M ~ 10M </option>
        <option value="10000001">&gt 10M</option>
    </select>
    <button class="btn btn-primary col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" onclick="filterProduct(1)">Lọc</button>
    <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
        <input type="search" class="form-control" placeholder="Search..." aria-label="Search" oninput="searchProduct()" id="search">
    </form>`;
        document.getElementById('product-action').innerHTML = text;
        result = products.filter((item)=>{
            return item.catagory == type;
        });
    }   
    if(result.length !=0){
        productsNeedShow = result;
        getTotalPage(result);
        pageListShow();
        showProducts(result);
    }else{
        let text = document.createElement('p');
        text.classList.add('text-warning');
        text.innerHTML= "Không thấy sản phẩm nào!";
        showProduct.innerHTML= "";
        showProduct.appendChild(text);
    }
    // productsNeedShow = result;
    // getTotalPage(result);
    // pageListShow();
    // showProducts(result);
}
function filterProduct(select) {
    let catagory;
    let brand = document.getElementById("filter-brand").value;
    let price = document.getElementById("filter-price").value;
    let products = JSON.parse(localStorage.getItem("products")) || [];
    let result;
    if(select){
        result= productsNeedShow;
    }else{
        catagory= document.getElementById("filter-catagory").value;
        result= products;
    }
    if(catagory){
        result= result.filter(item => item.catagory == catagory);
    }
    if(brand){
        result= result.filter(item => item.brand == brand);
    }
    if(price){
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
    
    if(result.length !=0){
        productsNeedShow = result;
        getTotalPage(result);
        pageListShow();
        showProducts(result);
    }else{
        let text = document.createElement('p');
        text.classList.add('text-warning');
        text.innerHTML= "Không thấy sản phẩm nào!";
        showProduct.innerHTML= "";
        showProduct.appendChild(text);
    }
}   
function searchProduct() {
    let searchInput = document.getElementById("search").value;
    console.log(searchInput);
    let result = productsNeedShow.filter(item=>{
        return item.name.toUpperCase().includes(searchInput.toUpperCase())
    });
    if(result.length !=0){
        productsNeedShow = result;
        getTotalPage(result);
        pageListShow();
        showProducts(result);
    }else{
        let text = document.createElement('p');
        text.classList.add('text-warning');
        text.innerHTML= "Không thấy sản phẩm nào!";
        showProduct.innerHTML= "";
        showProduct.appendChild(text);
    }
}
function addToCart(idProduct) {
    let products = JSON.parse(localStorage.getItem("products")) || [];
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let idUser = JSON.parse(localStorage.getItem("idUser")) || [];
    if (idUser.length == 0) {
        showToast(errorMissLogInMsg);
    } else {
        let user = users.filter((item) => {
            return item.id == idUser;
        });
        let cart = user[0].cart;
        let productInCart = cart.filter((item) => {
            return item.name == products[idProduct].name;
        });
        console.log('product in Cart', productInCart);
        if (productInCart.length !=0 &&
            products[idProduct].status == 0 &&
            products[idProduct].quantity >= 1) {
            productInCart[0].quantity = productInCart[0].quantity + 1;
        } else if (products[idProduct].status == 0 &&
            products[idProduct].quantity >= 1) {
            const addProduct = { ...products[idProduct], quantity: 1 };
            cart.push(addProduct);
        }
        products[idProduct].quantity = products[idProduct].quantity - 1;
        localStorage.setItem('users', JSON.stringify(users));
        localStorage.getItem('products', JSON.stringify(products));
        showCartQuantity();
        showToast(successAddCartMsg);
    }
}
function showCartQuantity() {
    let viewCart = document.getElementById('cart-total');
    console.log("cart:",viewCart);
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let idUser = JSON.parse(localStorage.getItem("idUser")) || [];
    let user = users.filter((item) => {
        return item.id == idUser;
    });
    
    if (user.length != 0) {
        viewCart.textContent = user[0].cart.length;
    }
}

function pageListShow() {
    let text = "";
    for (let i = 1; i <= totalPage; i++) {
        text +=
            `
            <li class="page-item " onclick = showPage(${i})><a class="page-link " href="javascript: void(0)">${i}</a></li>
        `
    }
    pages.innerHTML =
        `
        <a class="page-link rounded-start" href="javascript: void(0)" aria-label="Previous" onclick = prePage()>
        <span aria-hidden="true" >&laquo;</span>
      </a>
        ${text}
        <a class="page-link rounded-end" href="javascript: void(0)" aria-label="Next"  onclick = nextPage()>
        <span aria-hidden="true">&raquo;</span>
      </a>
    `;
    document.getElementsByClassName("page-item")[0].classList.add("text-danger");

}

function prePage() {
    curentPage--;
    if (curentPage <= 1) {
        curentPage = 1;
    }
    showPage(curentPage);

}
function nextPage() {
    curentPage++;
    if (curentPage >= totalPage) {
        curentPage = totalPage;
    }
    showPage(curentPage);
}
function showPage(curent) {
    curentPage = curent;
    let pageItem = document.getElementsByClassName("page-item");
    for (let i = 0; i < pageItem.length; i++) {
        if (i == curent - 1) {
            pageItem[i].classList.add("text-danger");
        } else {
            pageItem[i].classList.remove("text-danger");
        }
    }
    startEnd(curent);
    showProducts(productsNeedShow);
}       