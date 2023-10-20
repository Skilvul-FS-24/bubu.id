const btnLogin = document.getElementById("btn-login");
const btnDaftar = document.getElementById("btn-registrasi");
const btnUser = document.getElementById("btn-user");
const btnLogout = document.getElementById("btn-logout");

window.addEventListener("load", function () {
  const userLogin = JSON.parse(localStorage.getItem("user"));
  if (userLogin) {
    btnLogin.style.display = "none"
    btnDaftar.style.display = "none"
    btnUser.style.display = "inline"
    btnLogout.style.display = "inline"
  } else {
    btnUser.style.display = "none"
    btnLogout.style.display = "none"
    btnLogin.style.display = "inline"
    btnDaftar.style.display = "inline"
  }
});

btnLogout.addEventListener("click", function () {
  localStorage.removeItem("user")
  btnLogin.style.display = "inline"
  btnDaftar.style.display = "inline"
  btnUser.style.display = "none"
  btnLogout.style.display = "none"
  alert("Anda berhasil logout!");
});

const btnArtikel = document.getElementById("artikelLink")

btnArtikel.addEventListener("click", function () {
    const userLogin = JSON.parse(localStorage.getItem("user"));
    if(!userLogin){
      alert("Akses ditolak anda harus login")
      window.location.href = "index.html"
    }else{
        window.location.href = "list-artikel.html"
    }
})
