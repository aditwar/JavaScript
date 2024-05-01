// Mencari TREE secara umum
const head = document.head;
undefined // Akan muncul seperti ini di browser
head // Tulis ini kemudian akan secara otomatis keluar STRUKTUR TREE head pada browser itu

// Mencari TREE secara spesific
const gambar = document.getElementById("gambarUtama");

// Atau sesuai dengan Namanya (Initial)
const gambar = document.getElementByName("button");



// Mendapatkan elemen paling pertama yang menerapkan nilai "button" pada atribut class
document.querySelector(".button");

// Atau jika ingin semua bagian yang memiliki atribut class
document.querySelectorAll(".button");

//melakukan looping terhadap elemen-elemennya, yakni melalui sintaks looping for of
for (let item of buttons) {
    console.log(item);
  }