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


// ============================================================
// AKTIVITAS 4: Percabangan if-else — Penentuan Tier Membership
// ============================================================

// TODO 4:
// 1. Buat variabel "tierMember" dan "benefit" bertipe string kosong ("").
// 2. Gunakan percabangan "if - else if - else" berdasarkan nilai "totalPoin":
//    - totalPoin >= 100 : tierMember = "Platinum", benefit = "Diskon 20% + Gratis 1 Minuman Signature"
//    - totalPoin >= 70  : tierMember = "Gold", benefit = "Diskon 10% di setiap transaksi"
//    - totalPoin >= 40  : tierMember = "Silver", benefit = "Diskon 5% untuk menu minuman"
//    - selain itu       : tierMember = "Bronze", benefit = "Member Reguler (kumpulkan poin untuk naik tier)"
// 3. Cetak hasil tierMember dan benefit ke Console.
// 4. Tampilkan ringkasan hasil member (nama, total poin, tier, benefit) via dialog alert().


let TIER_MEMBER = "";
let BENEFIT = "";

if (TOTAL_POIN >= 100) {
    TIER_MEMBER = "Platinum";
    BENEFIT = "Diskon 20% + Geratis 1 Minuman Signature";
}
else if (TOTAL_POIN >= 70) {
    TIER_MEMBER = "Gold";
    BENEFIT = "Diskon 10% di setiap transaksi";
}
else if (TOTAL_POIN >= 40) {
    TIER_MEMBER = "Silver";
    BENEFIT = "Diskon 5% untuk menu minuman";
}
else {
    TIER_MEMBER = "Bronze";
    BENEFIT = "Member baru belum ada benefit";
}

console.log("Kamu sekarang tier : " + TIER_MEMBER + " Keuntungan : " +BENEFIT);
alert("Terima kasih " + NAMA_PELANGGAN + " kamu punya poin : " + TOTAL_POIN + ", tier kamu : " + TIER_MEMBER + ", kamu punya benefit : " + BENEFIT);

// ============================================================
// AKTIVITAS 5: Function — Membuat Fungsi yang Bisa Dipakai Ulang
// ============================================================

// TODO 5A:
// Buat fungsi "hitungTotalPoin(p1, p2, p3)" yang menerima 3 parameter nilai poin,
// menjumlahkannya, dan mengembalikan (return) nilai total penjumlahannya.


function HITUNG_TOTAL_POIN(p1, p2, p3) {
    let JUMLAH = p1 + p2 + p3;
    return JUMLAH 
}


// TODO 5B:
// Buat fungsi "tentukanTierMember(poin)" yang menerima 1 parameter nilai poin,
// dan mengembalikan (return) string nama tier beserta keterangannya.


function TENTUKAN_TIER(TIER_MEMBER) {
    if (TIER_MEMBER >= 100) return "Platinum - Pelanggan terhormat";
    if (TIER_MEMBER >= 70) return "Gold - Pelanggan prioritas";
    if (TIER_MEMBER >= 40) return "Silver - Pelanggan setia"
    return "Bronze - Pelanggan pemula";
}


// TODO 5C:
// Buktikan bahwa fungsi di atas bisa dipakai ulang (reusable):
// 1. Hitung total poin dan tentukan tier untuk simulasi Pelanggan B (misal poin: 35, 25, 20).
// 2. Hitung total poin dan tentukan tier untuk simulasi Pelanggan C (misal poin: 15, 10, 5).
// 3. Cetak data Pelanggan B dan C ke tab Console.


let POIN_PELANGGAN_A = HITUNG_TOTAL_POIN(30, 40, 30);

let TIER_MEMBER_PELANGGAN_A = TENTUKAN_TIER(POIN_PELANGGAN_A);

console.log("=== TIER MEMBER PELANGGAN A");
console.log("Total poin kamu adalah " + POIN_PELANGGAN_A);
console.log(" Tier kamu adalah " + TIER_MEMBER_PELANGGAN_A);

let POIN_PELANGGAN_B = HITUNG_TOTAL_POIN(20, 20, 30);

let TIER_MEMBER_PELANGGAN_B = TENTUKAN_TIER(POIN_PELANGGAN_B);

console.log("=== TIER MEMBER PELANGGAN B");
console.log("Total poin kamu adalah " + POIN_PELANGGAN_B);
console.log(" Tier kamu adalah " + TIER_MEMBER_PELANGGAN_B);

let POIN_PELANGGAN_C = HITUNG_TOTAL_POIN(10, 20, 30);

let TIER_MEMBER_PELANGGAN_C = TENTUKAN_TIER(POIN_PELANGGAN_C);

console.log("=== TIER MEMBER PELANGGAN C");
console.log("Total poin kamu adalah " + POIN_PELANGGAN_C);
console.log(" Tier kamu adalah " + TIER_MEMBER_PELANGGAN_C);


let POIN_PELANGGAN_D = HITUNG_TOTAL_POIN(0, 0, 0);

let TIER_MEMBER_PELANGGAN_D = TENTUKAN_TIER(POIN_PELANGGAN_D);

console.log("=== TIER MEMBER PELANGGAN D");
console.log("Total poin kamu adalah " + POIN_PELANGGAN_D);
console.log(" Tier kamu adalah " + TIER_MEMBER_PELANGGAN_D);

