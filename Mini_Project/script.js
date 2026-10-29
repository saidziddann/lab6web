const form = document.getElementById("formWorkshop");
const inputNama = document.getElementById("nama");
const inputEmail = document.getElementById("email");
const inputSesi = document.getElementById("sesi");
const inputAlasan = document.getElementById("alasan");
const charCount = document.getElementById("charCount");
const pesanNotifikasi = document.getElementById("pesanNotifikasi");

// 1. Fitur Penghitung Karakter Secara Langsung menggunakan event 'input'
inputAlasan.addEventListener("input", function () {
  const panjang = this.value.length;
  charCount.textContent = `${panjang}/200 karakter`;

  if (panjang > 200) {
    charCount.style.color = "red";
  } else {
    charCount.style.color = "#777";
  }
});

// 2. Validasi & Pesan Sukses/Error menggunakan event 'submit'
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Mencegah reload halaman saat submit

  // Reset teks error sebelumnya
  document.getElementById("errorNama").textContent = "";
  document.getElementById("errorEmail").textContent = "";
  document.getElementById("errorSesi").textContent = "";
  pesanNotifikasi.innerHTML = "";
  pesanNotifikasi.className = "";

  let isValid = true;

  // Validasi Nama
  (function () {
    const inputNama = document.querySelector(
      'input[placeholder="Masukkan nama Anda"]',
    );
    const formDaftar = inputNama.closest("form");

    const pesanNama = document.createElement("small");
    pesanNama.style.color = "red";
    inputNama.insertAdjacentElement("afterend", pesanNama);

    formDaftar.addEventListener(
      "submit",
      function (event) {
        if (inputNama.value.trim().length < 3) {
          event.preventDefault();
          event.stopImmediatePropagation();
          pesanNama.textContent = "Nama minimal terdiri dari tiga karakter.";
          inputNama.focus();
        } else {
          pesanNama.textContent = "";
        }
      },
      true,
    );
  })();

  // Validasi Email
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (inputEmail.value.trim() === "") {
    document.getElementById("errorEmail").textContent = "Email wajib diisi.";
    isValid = false;
  } else if (!emailPattern.test(inputEmail.value)) {
    document.getElementById("errorEmail").textContent =
      "Format email tidak valid.";
    isValid = false;
  }

  // Validasi Pilihan Sesi
  if (inputSesi.value === "") {
    document.getElementById("errorSesi").textContent =
      "Silakan pilih sesi workshop.";
    isValid = false;
  }

  // Validasi panjang textarea
  if (inputAlasan.value.length > 200) {
    isValid = false;
  }

  // Tampilkan notifikasi berdasarkan hasil validasi
  if (isValid) {
    pesanNotifikasi.textContent =
      "Pendaftaran berhasil! Terima kasih telah mendaftar.";
    pesanNotifikasi.className = "alert alert-success";
    form.reset(); // Kosongkan form jika berhasil
    charCount.textContent = "0/200 karakter"; // Reset hitungan karakter
  } else {
    pesanNotifikasi.textContent =
      "Pendaftaran gagal. Periksa kembali form Anda.";
    pesanNotifikasi.className = "alert alert-error";
  }
});

// 3. Tombol Reset untuk membersihkan input dan error menggunakan event 'reset'
form.addEventListener("reset", function () {
  document.getElementById("errorNama").textContent = "";
  document.getElementById("errorEmail").textContent = "";
  document.getElementById("errorSesi").textContent = "";
  pesanNotifikasi.innerHTML = "";
  pesanNotifikasi.className = "";
  charCount.textContent = "0/200 karakter";
  charCount.style.color = "#777";
});
