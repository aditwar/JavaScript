/* Menambahkan elemen appendChild untuk menambahkan atau menyisipkan sebuah child elemen
ke bagian akhir dari sebuah elemen
*/

// Ini untuk menangkap elemen "li"
const newElement = document.createElement('li'); // createElemen untuk membuat elemen baru
undefined
newElement.innerText = 'Selamat menikmati!'; // Ini untuk menambahkan text

// Ini untuk menangkap elemen Id daftar
const daftar = document.getElementById('daftar');
undefined
daftar.appendChild(newElement); // Ini untuk menambahkan elemen baru ke bagian terakhir dari list



// Itu merupakan cara menambahkan ke bagian terakhir list, kalau bagian ter awal ini dia
