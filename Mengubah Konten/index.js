// Memanggil elemen ById
const links = document.getElementById('links');
links.innerHTML // Jika diketik ini maka menangkap semua konten dalam sebuah elemen beserta tag-tag HTML yang ada
links.innerText // Jika diketik ini maka hanya mengambil teks tanpa tag-tag HTML yang ada (Lebih singkat)


// INI PRAKTEKNYA MENGUBAH ELEMEN HTML sesuai keinginan (innerText)
const dicoding = document.getElementById('dicodingLink');
dicoding // Ketik ini maka muncul
undefined
dicoding.innerText="Belajar JavaScript";
// Maka link dari dicodingLink tadi berubah menjadi Belajar JavaScript

// SELANJUTNYA PRAKTEK innerHTML di foldernya yaa