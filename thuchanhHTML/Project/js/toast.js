
let successMsg = `<span class="material-symbols-outlined">check_circle</span> Đăng ký thành công!`;
let errorMsg = `<span class="material-symbols-outlined">error</span>Hãy sửa lỗi!`;
let InvalidMsg = `<span class="material-symbols-outlined">warning</span>Hãy check lại các validate các trường!`;
let successEditProductMsg = `<span class="material-symbols-outlined">check_circle</span> Sửa thành công sản phẩm!`;
let successAddProductMsg = `<span class="material-symbols-outlined">check_circle</span> Thêm thành công sản phẩm mới!`;
let successDeleteProductMsg= `<span class="material-symbols-outlined">check_circle</span> Xóa thành công sản phẩm mới!`;
let successUpdateStatusProductMsg = `<span class="material-symbols-outlined">check_circle</span> Cập nhật thành công trạng thái sản phẩm!`;
let successUpdateStatusUserMsg =`<span class="material-symbols-outlined">check_circle</span> Cập nhật thành công trạng thái người dùng!`;
let successAddUserMsg = `<span class="material-symbols-outlined">check_circle</span> Thêm thành công người dùng!`;
let successEditUserMsg = `<span class="material-symbols-outlined">check_circle</span> Sửa thành công thông tin người dùng!`;
let successDeleteUserMsg=`<span class="material-symbols-outlined">check_circle</span> Xóa thành công người dùng!`;
let successAddCartMsg = `<span class="material-symbols-outlined">check_circle</span>Bạn đã thêm vào giỏ 1 sản phẩm!`;
let errorMissLogInMsg = `<span class="material-symbols-outlined">error</span>Hãy đăng nhập để mua hàng!`;
function showToast(msg) {
    let toastBox;
    // window.onload = (function () {
        toastBox = document.getElementById('toastBox');
        console.log(toastBox);
    // })
    let toast = document.createElement('div');
    toast.classList.add('toast-show');
    toast.innerHTML= msg;
    toastBox.appendChild(toast);
    if(msg.includes('error')){
        toast.classList.add('text-danger');
    }
    if(msg.includes('warning')){
        toast.classList.add('text-warning');
    }
    if(msg.includes('check_circle')){
        toast.classList.add('text-success');
    }
    setTimeout(()=>{
        toast.remove();
    },3000)
 }



