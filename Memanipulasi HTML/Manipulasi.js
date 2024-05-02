const gambar = document.getElementById('gambar');
undefined // Ini muncul otomatis
gambar // Ketik ini kemudian akan muncul TREE yang sesuai

// Kemudian Lakukan perubahan pada elemen tersebut sesuai keinginan dengan menentukan Attribute nya
gambar.setAttribute('width', 300);
gambar.setAttribute('height', 215);


// Ini untuk menangkap elemen yang tidak menggunakan Id, sehingga mengambil keseluruhan elemen Buttons
const buttons = document.querySelectorAll('.button');
undefined // Ini muncul otomatis
buttons // Ketik ini kemudian selesai

// Agar bisa menangkap elemen secara spesifik maka menggunakan button 3
const playButton = buttons[3];
undefined
playButton // Ketik ini

// Karena yang muncul termasuk elemen div MAKA menggunakan attribute children
const playButtonElement = playButton.children[0];

// Kemudian baru diubah dengan setAttribute
playButtonElement.setAttribute('type', 'submit'); // Tombol ini sudah berubah fungsi menjadi Submit



// Pada setAttribute diatas seharusnya dituliskan
gambar.setAttribute('width', '300'); // TETAPI KARENA DI JAVASCRIPT sudah ada Automatic Type sehingga dapat mengenenali itu angka asdfasdf