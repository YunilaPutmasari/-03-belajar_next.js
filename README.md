Nama : Yunila Putmasari
Kelas : 3B
NIM : 2241720062

### Persiapan Lingkungan
1. Pastikan Node.js dan npm sudah terinstal di komputer Anda. Anda dapat memeriksanya dengan
<img src ='img/1.png'>
menjalankan perintah berikut di terminal atau command prompt:
2. Buat direktori baru untuk proyek Next.js Anda
3. Inisialisasi proyek Next.js dengan menjalankan perintah berikut: Perhatikan bahwa App Router belum digunakan
4. Jalankan aplikasi Next.js dengan perintah:
<img src ='img/2.png'>
Aplikasi akan terbuka di browser pada alamat http://localhost:3000.

### Membuat Halaman dengan Server-Side Rendering (SSR)
1. Buka file pages/index.tsx di text editor Anda.
2. Ganti kode di dalamnya dengan kode berikut untuk membuat halaman sederhana:
<img src ='img/3.png'>
3. Simpan file dan lihat perubahan di browser. Anda akan melihat halaman utama dengan teks
"Selamat Datang di Website Saya!".
<img src ='img/4.png'>

### Menggunakan Static Site Generation (SSG)
1. Buat file baru di direktori pages dengan nama blog.js.
2. Tambahkan kode berikut untuk membuat halaman blog dengan SSG:
<img src ='img/5.png'>
3. Simpan file dan buka http://localhost:3000/blog di browser. Anda akan melihat daftar post yang
diambil dari API eksternal.
<img src ='img/6.png'>


###  Menggunakan Dynamic Routes
1. Buat direktori baru di pages dengan nama blog.
2. Buat file di dalam direktori blog dengan nama [slug].js
<img src ='img/7.png'>
3. Tambahkan kode berikut untuk membuat halaman dinamis berdasarkan slug:
4. Simpan file dan buka http://localhost:3000/blog/contoh-post di browser. Anda akan melihat
halaman yang menampilkan slug dari URL.
<img src ='img/8.png'>


### Menggunakan API Routes
1. Pastikan terdapat direktori di pages dengan nama api.
2. Buat file di dalam direktori api dengan nama products.js.
3. Tambahkan kode berikut untuk membuat API route yang mengembalikan daftar produk:
<img src ='img/9.png'>
4. Buat file baru di pages dengan nama products.js untuk menampilkan daftar produk:
<img src ='img/11.png'>
5. Simpan file dan buka http://localhost:3000/products di browser. Anda akan melihat daftar produk yang diambil dari API route.
<img src ='img/10.png'>
 
### Menggunakan Link Component
1. Buka file pages/index.tsx dan tambahkan modif dengan kode berikut untuk membuat link ke
halaman lain:
<img src ='img/11.png'>
2. Buat file baru di pages dengan nama about.js untuk halaman "Tentang Kami":
<img src ='img/15.png'>
3. Simpan file dan buka http://localhost:3000 di browser. Klik link "Tentang Kami" untuk navigasi
ke halaman tentang.
<img src ='img/13.png'>
<img src ='img/14.png'>


### Tugas
1. Buat halaman baru dengan menggunakan Static Site Generation (SSG) yang menampilkan daftar
<img src ='img/16.png'>
<img src ='img/17.png'>
pengguna dari API https://jsonplaceholder.typicode.com/users.
2. Implementasikan Dynamic Routes untuk menampilkan detail pengguna berdasarkan ID.
<img src ='img/18.png'>
<img src ='img/19.png'>
3. Buat API route yang mengembalikan data cuaca dari API eksternal (misalnya,
OpenWeatherMap) dan tampilkan data tersebut di halaman front-end.
<img src ='img/20.png'>
<img src ='img/21.png'>
<img src ='img/22.png'>