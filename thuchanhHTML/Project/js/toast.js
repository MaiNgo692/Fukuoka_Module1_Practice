
let successMsg = 'Đăng ký thành công!';
let errorMsg = 'Please fix the error!';
let InvalidMsg = 'Hãy check lại các validate các trường!';
let successEditProductMsg = 'Sửa thành công sản phẩm!';
let successEditUserMsg = 'Sửa thành công thông tin người dùng!';
function showToast(msg) {
    let toastBox;
    // window.onload = (function () {
        toastBox = document.getElementById('toastBox');
        console.log(toastBox);
    // })
    let toast = document.createElement('div');
    toast.classList.add('toast');
    toast.innerHTML= msg;
    toastBox.appendChild(toast);
    
    if(msg.includes('error')){
        toast.classList.add('error');
    }
    if(msg.includes('Invalid')){
        toast.classList.add('invalid');
    }
    setTimeout(()=>{
        toast.remove();
    },3000)
 }



