// script.js
const judul = document.getElementById("judul");
const pesan = document.getElementById("pesan");
judul.textContent = "Belajar JavaScript DOM";
pesan.textContent = "Konten berhasil diubah oleh JavaScript.";

const tombol = document.getElementById("tombolAksi");
tombol.addEventListener("click", function () {
  pesan.textContent = "Tombol diklik pada " + new Date().toLocaleTimeString();
});

const tombolGaya = document.getElementById("tombolGaya");
const teksGaya = document.getElementById("teksGaya");
tombolGaya.addEventListener("click", function () {
  teksGaya.classList.toggle("highlight");
  teksGaya.classList.toggle("teks-besar");
});

const namaInput = document.getElementById("namaInput");
const jumlahKarakter = document.getElementById("jumlahKarakter");
namaInput.addEventListener("input", function () {
  jumlahKarakter.textContent = namaInput.value.length;
});

// ---------- To-do list + Soal 1: tombol hapus ----------
const inputTugas = document.getElementById("inputTugas");
const tambahTugas = document.getElementById("tambahTugas");
const daftarTugas = document.getElementById("daftarTugas");
const pesanTugas = document.getElementById("pesanTugas");

function buatTombolSelesai(item) {
  const selesai = document.createElement("button");
  selesai.type = "button";
  selesai.textContent = "Tandai selesai";
  selesai.addEventListener("click", function () {
    item.classList.toggle("selesai");
    selesai.textContent = item.classList.contains("selesai")
      ? "Batalkan selesai"
      : "Tandai selesai";
  });
  return selesai;
}

function buatTombolHapus() {
  const hapus = document.createElement("button");
  hapus.type = "button";
  hapus.className = "btn-hapus";
  hapus.textContent = "Hapus";
  return hapus;
}

tambahTugas.addEventListener("click", function () {
  const teks = inputTugas.value.trim();
  if (teks === "") {
    pesanTugas.textContent = "Tulis tugas terlebih dahulu.";
    return;
  }
  const item = document.createElement("li");
  const label = document.createElement("span");
  label.textContent = teks + " ";
  item.append(label, buatTombolSelesai(item), buatTombolHapus());
  daftarTugas.appendChild(item);
  inputTugas.value = "";
  pesanTugas.textContent = "Tugas ditambahkan.";
  inputTugas.focus();
});

// Event delegation: satu listener untuk semua tombol hapus
// (termasuk item yang ditambahkan belakangan)
daftarTugas.addEventListener("click", function (event) {
  if (event.target.classList.contains("btn-hapus")) {
    event.target.closest("li").remove();
    pesanTugas.textContent = "Tugas dihapus.";
  }
});

// ---------- Soal 4: sembunyikan / tampilkan paragraf via class CSS ----------
const paragrafRahasia = document.getElementById("paragrafRahasia");
const btnToggleParagraf = document.getElementById("btnToggleParagraf");
btnToggleParagraf.addEventListener("click", function () {
  paragrafRahasia.classList.toggle("sembunyi");
  btnToggleParagraf.textContent = paragrafRahasia.classList.contains("sembunyi")
    ? "Tampilkan"
    : "Sembunyikan";
});
