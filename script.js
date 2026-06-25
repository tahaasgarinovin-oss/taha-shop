function register(event){
    event.preventDefault();

    let u = document.getElementById("regUser").value;
    let p = document.getElementById("regPass").value;

    localStorage.setItem(u, p);

    document.getElementById("msg").textContent = "ثبت نام موفق بود!";
}

function login(event){
    event.preventDefault();

    let u = document.getElementById("loginUser").value;
    let p = document.getElementById("loginPass").value;

    let savedPass = localStorage.getItem(u);

    if(savedPass === p){
        window.location.href = "dashboard.html";
    } else {
        document.getElementById("msg").textContent = "اشتباهه!";
    }
}

function forgot(event){
    event.preventDefault();

    let u = document.getElementById("forgotUser").value;
    let newPass = document.getElementById("newPass").value;

    if(localStorage.getItem(u)){
        localStorage.setItem(u, newPass);
        document.getElementById("msg").textContent = "رمز تغییر کرد!";
    } else {
        document.getElementById("msg").textContent = "کاربر پیدا نشد!";
    }
}

function logout(){
    window.location.href = "login.html";
}