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

let products=[
    {
        name: "Bếp Từ Đôi Bosch PPI8256MS" ,
        catagory:"Bếp Từ" ,
        img:"https://static.bepantoan.vn/userfiles/images/82560.jpeg",
        price:9980000,
        quantity: 50,
        status:0,
        brand:"Bosch",
    },
    {
        name: "Bếp Từ Đôi Kainer KA-828EU" ,
        catagory:"Bếp Từ" ,
        img:"https://static.bepantoan.vn/userfiles/images/828-EU%202.jpg",
        price:16800000,
        quantity: 50,
        status:0,
        brand:"Kainer",
    },
    {
        name: "Bếp Từ Đôi Kainer KA-6262EU" ,
        catagory:"Bếp Từ" ,
        img:"https://static.bepantoan.vn/userfiles/images/ka.jpg",
        price:16500000,
        quantity: 50,
        status:0,
        brand:"Kainer",
    },
    {
        name: "Bếp Từ Đôi Kainer KA-888EU" ,
        catagory:"Bếp Từ" ,
        img:"https://static.bepantoan.vn/userfiles/images/888-EU%202.jpg",
        price:13800000,
        quantity: 50,
        status:0,
        brand:"Kainer",
    },
    {
        name: "Bếp Từ Đức Bosch PUC631BB2E" ,
        catagory:"Bếp Từ" ,
        img:"https://static.bepantoan.vn/userfiles/images/product/large_bep-tu-bosch-puc631bb2ex500x500x4.jpg",
        price:10400000,
        quantity: 50,
        status:0,
        brand:"Bosch",
    },
    {
        name: "Máy Hút Mùi Kính Cong Kainer KA-270C" ,
        catagory:"Máy Hút Mùi" ,
        img:"https://static.bepantoan.vn/userfiles/images/k1.jpg",
        price:3800000,
        quantity: 50,
        status:0,
        brand:"Kainer",
    },
    {
        name: "Máy Hút Mùi Canzy CZ-7002G" ,
        catagory:"Máy Hút Mùi" ,
        img:"https://static.bepantoan.vn/userfiles/images/product/large_may-hut-mui-canzy-cz-7002gx500x500x4.jpg",
        price:2990000,
        quantity: 50,
        status:0,
        brand:"Canzy",
    },
    {
        name: "Máy Hút Mùi Canzy CZ-70TS" ,
        catagory:"Máy Hút Mùi" ,
        img:"https://static.bepantoan.vn/userfiles/images/may-hut-mui-canzy-cz-70ts-p8955.jpg",
        price:2860000,
        quantity: 50,
        status:0,
        brand:"Canzy",
    },
    {
        name: "Máy Hút Mùi Bosch DFT63AC50" ,
        catagory:"Máy Hút Mùi" ,
        img:"https://static.bepantoan.vn/userfiles/images/product/large_may-hut-mui-bosch-dft63ac50x500x500x4.jpg",
        price:6680000,
        quantity: 50,
        status:0,
        brand:"Bosch",
    },
    {
        name: "Máy Hút Mùi Âm Trần Canzy CZ 68D" ,
        catagory:"Máy Hút Mùi" ,
        img:"https://static.bepantoan.vn/userfiles/images/68d.jpg",
        price:6390000,
        quantity: 50,
        status:0,
        brand:"Canzy",
    },
    {
        name: "Máy Hút Mùi Chữ T Kainer KA-70T" ,
        catagory:"Máy Hút Mùi" ,
        img:"https://static.bepantoan.vn/userfiles/images/ka70t.jpg",
        price:5600000,
        quantity: 50,
        status:0,
        brand:"Kainer",
    },
    {
        name: "Máy Hút Mùi Bosch DWB77CM50" ,
        catagory:"Máy Hút Mùi" ,
        img:"https://static.bepantoan.vn/userfiles/images/product/MCSA02612101_DWB77CM50_ChimneyHood_Bosch_STP_defx500x500x4.jpg",
        price:16600000,
        quantity: 50,
        status:0,
        brand:"Bosch",
    },
    {
        name: "Máy Hút Mùi Cổ Điển Canzy CZ 506I" ,
        catagory:"Máy Hút Mùi" ,
        img:"https://static.bepantoan.vn/userfiles/images/506i.jpg",
        price:2690000,
        quantity: 50,
        status:0,
        brand:"Canzy",

    },
    {
        name: "Bếp Ga Âm Canzy CZ-862" ,
        catagory:"Bếp Ga" ,
        img:"https://static.bepantoan.vn/userfiles/images/Canzy%20CZ-862%201.jpg",
        price:3680000,
        quantity: 50,
        status:0,
        brand:"Canzy",

    },
    {
        name: "Bếp Ga Dương Canaval 338" ,
        catagory:"Bếp Ga" ,
        img:"https://static.bepantoan.vn/userfiles/images/z2118692225675_470f575354537b57e54f85e568a7e231.jpg",
        price:1680000,
        quantity: 50,
        status:0,
        brand:"Canaval",
    },
    {
        name: "Bếp Dương Hồng Ngoại Taka - 120D" ,
        catagory:"Bếp Ga" ,
        img:"https://static.bepantoan.vn/userfiles/images/120d.jpg",
        price:1350000,
        quantity: 50,
        status:0,
        brand:"Taka",
    },
    {
        name: "Bếp Ga 2 Lò Model CA6868" ,
        catagory:"Bếp Ga" ,
        img:"https://static.bepantoan.vn/userfiles/2022/06/09/ba2.png",
        price:"",
        quantity: 50,
        status:0,
        brand:"Canaval",
    },
    {
        name: "Lò Nướng Eurosun EOV65ME" ,
        catagory:"Thiết Bị Khác" ,
        img:"https://static.bepantoan.vn/userfiles/images/product/large_lo-nuong-eurosun-eov65mex500x500x4.png",
        price:10270000,
        quantity: 50,
        status:0,
        brand:"Eurosun",

    },
    {
        name: "Lò Vi Sóng Eurosun MWO-T25EUR" ,
        catagory:"Thiết Bị Khác" ,
        img:"https://static.bepantoan.vn/userfiles/images/product/e8x500x500x4.jpg",
        price:3630000,
        quantity: 50,
        status:0,
        brand:"Eurosun",

    },
    {
        name: "Lò Nướng Bosch HMH.HBF113BR0A" ,
        catagory:"Thiết Bị Khác" ,
        img:"https://static.bepantoan.vn/userfiles/images/product/MCSA02380996_HBF113BR0A_BuiltInOven_Bosch_STP_EVO_defx500x500x4.jpg",
        price:9825000,
        quantity: 50,
        status:0,
        brand:"Bosch",

    },
    {
        name: "Lò Nướng Canzy CZ 601M" ,
        catagory:"Thiết Bị Khác" ,
        img:"https://static.bepantoan.vn/userfiles/images/lo-nuong-canzy-CZ-601M.jpg",
        price:6889996,
        quantity: 50,
        status:0,
        brand:"Canzy",

    },
    {
        name: "Lò Nướng Bosch HBN531E1F" ,
        catagory:"Thiết Bị Khác" ,
        img:"https://static.bepantoan.vn/userfiles/images/product/large_lo-nuong-bosch-hbn531e1fx500x500x4.jpg",
        price:11640000,
        quantity: 50,
        status:0,
        brand:"Bosch",

    },
    {
        name: "Lò Nướng Bosch HBG675BB1" ,
        catagory:"Thiết Bị Khác" ,
        img:"https://static.bepantoan.vn/userfiles/images/product/large_lo-nuong-bosch-hbg675bb1x500x500x4.jpg",
        price:25937000,
        quantity: 50,
        status:0,
        brand:"Bosch",

    },
    {
        name: "Bộ Nồi Arber ABAN 05SMD" ,
        catagory:"Thiết Bị Khác" ,
        img:"https://static.bepantoan.vn/userfiles/images/bo-noi-chao-aber-5-mon-an-05smd.jpg",
        price:3050000,
        quantity: 50,
        status:0,
        brand:"Arber",

    },
    {
        name: "Bộ Nồi Arber ABAN 05SMDT" ,
        catagory:"Thiết Bị Khác" ,
        img:"https://static.bepantoan.vn/userfiles/images/an05smdt.jpg",
        price:2680000,
        quantity: 50,
        status:0,
        brand:"Arber",

    },
    {
        name: "Ấm Đun Từ Arber AB 03DT" ,
        catagory:"Thiết Bị Khác" ,
        img:"https://static.bepantoan.vn/userfiles/images/am-dun-nuoc-tu-arber-ab-03dt.jpg",
        price:1050000,
        quantity: 50,
        status:0,
        brand:"Arber",

    },
    {
        name: "Bộ Nồi Eurosun MC1608-PASSION" ,
        catagory:"Thiết Bị Khác" ,
        img:"https://static.bepantoan.vn/userfiles/images/1608.jpg",
        price:3800000,
        quantity: 50,
        status:0,
        brand:"Eurosun",

    },
    {
        name: "Nồi Luộc Gà MS1601-KINGS" ,
        catagory:"Thiết Bị Khác" ,
        img:"https://static.bepantoan.vn/userfiles/images/eu.png",
        price:1350000,
        quantity: 50,
        status:0,
        brand:"Eurosun",

    },
    {
        name: "Bộ Nồi Inox MC1801-LUXURY" ,
        catagory:"Thiết Bị Khác" ,
        img:"https://static.bepantoan.vn/userfiles/images/mc1801-luxury%202(1).png",
        price:4490000,
        quantity: 50,
        status:0,
        brand:"Eurosun",

    },
    {
        name: "Bộ Nồi Inox MC1702-HARMONY" ,
        catagory:"Thiết Bị Khác" ,
        img:"https://static.bepantoan.vn/userfiles/images/noi-tu-eurosun-mc1702-harmony.png",
        price:3300000,
        quantity: 50,
        status:0,
        brand:"Eurosun",
    },
]

localStorage.setItem("products",JSON.stringify(products));
localStorage.setItem("idAdmin",'9819107065');
let totalItem = 3;
let totalPage = Math.ceil(products.length / totalItem);
let start;
let end;
let curentPage = 1;
function startEnd(curentPage) {
    start = (curentPage - 1) * totalItem;
    end = curentPage * totalItem;
}
startEnd(1);
function getTotalPage(params) {
    totalPage = Math.ceil(params.length / totalItem);
}


function viewLogInPage() {
    window.location.href="./page/login.html";
}
function viewRegisterPage() {
    window.location.href="./page/register.html";
}
let showProduct;
let pages;
window.onload = (function () {
    showProduct = document.getElementById("show-product");
    showProducts(products);
    pages = document.getElementsByClassName("pagination")[0];
    pageListShow();
});
function showProducts(products) {
    const VND = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
      });
    let text="";
   for (let i = 0; i < products.length; i++) {
    if (i >= start && i < end) {
        text +=`
        <div class="col  mb-5 shadow p-3 bg-body rounded">
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
                            <div class="text-center"><a class="btn btn-outline-primary mt-auto" href="#">Add to cart</a></div>
                        </div>
                    </div>
                </div>
        `;
   }}
   console.log(showProduct);
    showProduct.innerHTML=text;
}
function pageListShow() {
    let text = "";
    for (let i = 1; i <= totalPage; i++) {
        text +=
            `
            <li class="page-item" onclick = showPage(${i})>${i}</li>
        `
    }
    pages.innerHTML =
        `
        <span class="material-symbols-outlined" onclick = prePage()>
        arrow_back_ios
        </span>
      ${text}
      <span class="material-symbols-outlined" onclick = nextPage()>
      arrow_forward_ios
      </span>
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
    showProducts(products);
}       