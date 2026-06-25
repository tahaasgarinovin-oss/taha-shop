function register(event){
    event.preventDefault();

    let u = document.getElementById("regUser").value;
    let p = document.getElementById("regPass").value;

    localStorage.setItem(u, p);

    document.getElementById("msg").textContent = "ثبت نام موفق بود!";
}

function login(event){
    event.preventDefault();

    let u = document.getElementById("username").value;
    let p = document.getElementById("password").value;

    let saved = localStorage.getItem(u);

    if(saved === p){
        window.location.href = "shop.html";
    } else {
        document.getElementById("msg").textContent = "نام کاربری یا رمز اشتباه است!";
    }
}

function forgot(event){
    event.preventDefault();

    let u = document.getElementById("forgotUser").value;
    let p = document.getElementById("newPass").value;

    if(localStorage.getItem(u)){
        localStorage.setItem(u,p);
        document.getElementById("msg").textContent = "رمز تغییر کرد!";
    } else {
        document.getElementById("msg").textContent = "کاربر پیدا نشد!";
    }
}

function logout(){
    window.location.href = "index.html";
}

function filter(type){
    let items = document.querySelectorAll(".item");

    items.forEach(i => {
        if(type === "all" || i.classList.contains(type)){
            i.style.display = "block";
        } else {
            i.style.display = "none";
        }
    });
}
