/**
 * ============================================================
 * TUGAS MANDIRI — PEMROGRAMAN INTERNET (JAVASCRIPT DASAR)
 * Program Studi : Pendidikan Sistem dan Teknologi Informasi
 * Universitas   : Universitas Pendidikan Indonesia
 * Study Case    : Sistem Poin & Keanggotaan Member Kedai Kopi
 * Berkas        : app.js (STARTER CODE MAHASISWA)
 * ============================================================
 *
 * PETUNJUK PENGERJAAN:
 * 1. Buka file index.html di browser (klik dua kali atau via Live Server).
 * 2. Buka tab Developer Tools dengan menekan tombol F12 -> pilih tab "Console".
 * 3. Kerjakan tugas ini secara bertahap dari AKTIVITAS 1 sampai AKTIVITAS 6
 *    dengan melengkapi bagian bertanda "// TODO:".
 * 4. Simpan progres pekerjaanmu dengan melakukan minimal 3 kali Git Commit
 *    sesuai panduan di PANDUAN_TUGAS_MANDIRI.md.
 * ============================================================
 */


// ============================================================
// AKTIVITAS 1: Setup Berkas & Integrasi JavaScript Eksternal
// ============================================================
// Menampilkan judul sistem ke tab Console (F12)
// TODO 1: Tulis satu baris console.log() untuk memastikan file app.js sudah terhubung!
// Contoh output: "Skrip app.js berhasil terhubung!"

console.log("=== SISTEM POIN MEMBER KEDAI KOPI ===");
console.log("Skrip app.js berhasil terhubung!");


// ============================================================
// AKTIVITAS 2: Variabel & Dialog Interaktif
// ============================================================

// ---- BAGIAN 2A: VARIABEL IDENTITAS KEDAI KOPI ----
// TODO 2A:
// 1. Buat konstanta "NAMA_KEDAI" bertipe string (misal: "Kopi PSTI Kampus").
// 2. Buat variabel "namaKasir" (misal: "Kak Eko") dan "shiftKerja" menggunakan "let".
// 3. Cetak nilai NAMA_KEDAI, namaKasir, dan shiftKerja ke Console menggunakan console.log().


const NAMA_KEDAI = "Kopi Kapal Ngawi";
let NAMA_KASIR = "Mas Rusdi";
let SHIFT_KERJA = "Mas Rusdi = 08.00-16.00";
alert("Selamat datang di kedai Kopi Kapal Ngawi");
let NAMA_PELANGGAN = prompt("Siapa nama kamu?", "Tulis nama kamu di sini");
if (NAMA_PELANGGAN) {
    alert("Hai , " + NAMA_PELANGGAN + " Selamat datang!!");
}

else {
    alert("Anda tidak memasukan nama");
}
console.log("Nama kedai : " + NAMA_KEDAI);
console.log("Nama kasir : " + NAMA_KASIR);
console.log("Shift kerja : " + SHIFT_KERJA);


// ---- DEMO PERBEDAAN LET vs CONST ----
// TODO 2B:
// Ubah (re-assign) nilai variabel "namaKasir" dengan nama kasir lain,
// lalu cetak ke Console untuk membuktikan bahwa variabel "let" nilainya dapat diubah.

NAMA_KASIR = "Mas Reza";
console.log(NAMA_KASIR);


// ---- BAGIAN 2B: INPUT INTERAKTIF & PENGANDAIAN DASAR ----
// TODO 2C:
// 1. Tampilkan pop-up salam pembuka selamat datang menggunakan alert().
// 2. Tampilkan dialog prompt() untuk meminta nama pengunjung, simpan hasilnya ke variabel "namaPelanggan".
// 3. Gunakan percabangan "if - else":
//    - JIKA namaPelanggan ada isinya: tampilkan alert sapaan dan log ke console.
//    - JIKA namaPelanggan kosong / klik Cancel: beri nilai default "Pelanggan Setia" dan tampilkan alert pemberitahuan.


alert("Terima kasih sudah berkunjung ke kedai Kopi Kapal Ngawi");
NAMA_PELANGGAN = prompt("Masukin nama kamu kalau udh member ngawi");
if (NAMA_PELANGGAN) {
    alert("Terima kasih " + NAMA_PELANGGAN + " sudah jadi member ngawi");
    console.log("Hai " + NAMA_PELANGGAN );
}

else{
alert("Kamu lupa masukin nama kamu. kami panggil Pelanggan Setia");
NAMA_PELANGGAN = "Pelanggan Setia";
console.log("Pelanggan Setia " + NAMA_PELANGGAN);
}


// ============================================================
// AKTIVITAS 3: Operasi Aritmatika — Akumulasi Poin Transaksi
// ============================================================
// Catatan: Gunakan bilangan bulat (integer murni tanpa desimal/float).

// TODO 3:
// 1. Buat 3 variabel poin transaksi: "poinKopi", "poinMakanan", dan "poinMerchandise"
//    (isi dengan angka bulat bebas, misal: 45, 35, 20).
// 2. Buat variabel "totalPoin" yang menjumlahkan ketiga variabel poin di atas.
// 3. Cetak rincian perolehan poin dan totalPoin ke Console menggunakan console.log().


let POIN_KOPI = 40;
let POIN_MAKANAN = 40;
let POIN_MERCHANDISE = 20;

let TOTAL_POIN = POIN_KOPI + POIN_MAKANAN + POIN_MERCHANDISE;

console.log("=== Total Nilai " + NAMA_PELANGGAN + " ===")
console.log("POIN kopi " + POIN_KOPI);
console.log("POIN makanan " + POIN_MAKANAN);
console.log("Poin merchandise " + POIN_MERCHANDISE);


