// Tombol toggle untuk menu mobile
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
const btnLogout = document.getElementById("btn-logout");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// Scroll ke bagian-bagian dan atur status aktif untuk tautan navigasi
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("nav ul li a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let atas = window.scrollY;
    let offset = sec.offsetTop - 100;
    let tinggi = sec.offsetHeight;
    let id = sec.getAttribute("id");
  });

  // Header menempel saat digulir
  let nav = document.querySelector("nav");

  nav.classList.toggle("sticky", window.scrollY > 100);

  // Hapus ikon toggle dan tutup menu mobile ketika mengklik tautan navbar
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

const urlParams = new URLSearchParams(window.location.search);
const artikelId = urlParams.get("id");
listDetailArtikel = document.getElementById("content");

async function getArtikelById(artikelId) {
  try {
    const response = await fetch(
      `https://652e2b79f9afa8ef4b28226a.mockapi.io/artikel/${artikelId}`
    );
    const artikel = await response.json();
    let cardDetailArtikel = `        
         <div class="content-text">
            <h1><a href="">${artikel.judul}</a></h1>
        
            <div class="content-img">
                <img src="assets/${artikel.image}" alt="" width="400px">
            </div>
            
            <p>${artikel.detail}</p>

            <div class="account">
                <div class="left">
                    <img src="image/Ellipse 2.png" alt="" width="25px">
                    <p class="name">${artikel.penulis}<br>${artikel.pekerjaan}</p>
                </div>
                <div class="right">
                    <div class="icon-account">
                        <a href="#"><i class='bx bxl-facebook-circle'></i></a>
                        <a href="#"><i class='bx bxl-google'></i></a>
                        <a href="#"><i class='bx bxl-instagram'></i></a>
                    </div>
                </div>
            </div>                     
        </div>
        `;
    listDetailArtikel.innerHTML += cardDetailArtikel;
  } catch (error) {
    console.error(error);
  }
}

getArtikelById(artikelId);

btnLogout.addEventListener("click", function () {
  localStorage.removeItem("user")
  alert("Anda berhasil logout!");
  window.location.href = "index.html"
});