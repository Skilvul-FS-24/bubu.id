// Tombol toggle untuk menu mobile
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// Scroll ke bagian-bagian dan atur status aktif untuk tautan navigasi
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('nav ul li a');

window.onscroll = () => {
    sections.forEach(sec => {
        let atas = window.scrollY;
        let offset = sec.offsetTop - 100;
        let tinggi = sec.offsetHeight;
        let id = sec.getAttribute('id');
    });

    // Header menempel saat digulir
    let nav = document.querySelector('nav');

    nav.classList.toggle('sticky', window.scrollY > 100);

    // Hapus ikon toggle dan tutup menu mobile ketika mengklik tautan navbar
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}
