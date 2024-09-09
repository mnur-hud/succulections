// Ambil elemen hamburger menu dan menu utama
const hamburgerMenu = document.querySelector('.hamburger');
const mainMenu = document.querySelector('.navigasi');
const menuLinks = document.querySelectorAll('.navigasi li a');
menuLinks.forEach((link) => {
  link.addEventListener('click', function () {
    // Tutup menu utama ketika salah satu link diklik (jika diperlukan)
    mainMenu.classList.remove('open');
    // Hapus class 'open' dari hamburger menu
    hamburgerMenu.classList.remove('open');
  });
});
// Tambahkan event listener untuk hamburger menu
hamburgerMenu.addEventListener('click', function () {
  // Toggle class 'open' pada hamburger menu
  this.classList.toggle('open');
  // Toggle class 'open' pada menu utama
  mainMenu.classList.toggle('open');
});

// Tambahkan event listener untuk mengklik area di luar menu utama untuk menutupnya (opsional)
document.addEventListener('click', function (event) {
  const targetElement = event.target;
  if (!targetElement.closest('.navigasi') && !targetElement.closest('.hamburger')) {
    mainMenu.classList.remove('open');
    hamburgerMenu.classList.remove('open');
  }
});
document.querySelector('.main-image').addEventListener('click', function () {
  this.classList.toggle('clicked');
});

let mybutton = document.getElementById('keatas');

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 900 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = 'block';
  } else {
    mybutton.style.display = 'none';
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
