const track = document.querySelector('.carousel-track');
const slides = document.querySelectorAll('.carousel-img');
let index = 0;

document.querySelector('.next').addEventListener('click', () => {
  index = (index + 1) % slides.length;
  updateSlide();
});

document.querySelector('.prev').addEventListener('click', () => {
  index = (index - 1 + slides.length) % slides.length;
  updateSlide();
});

function updateSlide() {
  track.style.transform = `translateX(-${index * 100}vw)`;
}

function track() {
  const resi = document.getElementById('resi').value;
  if (!resi.match(/^[A-Z]{4}\d{7}$/)) {
    alert('Format nomor resi tidak valid.\nContoh: XXU1234567');
  } else {
    alert(`Nomor resi "${resi}" dilacak! (Fitur backend belum tersedia)`);
  }
}

function validateForm() {
  const nama = document.getElementById("nama").value.trim();
  const email = document.getElementById("email").value.trim();
  const hp = document.getElementById("hp").value.trim();
  const pesan = document.getElementById("pesan").value.trim();

  if (!nama || !email || !hp || !pesan) {
    alert("Semua kolom harus diisi!");
    return false;
  }

  alert("Terima kasih, pesan Anda telah dikirim.");
  return true;
}
