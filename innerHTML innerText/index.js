// Menangkap elemen link dicoding dulu
const dicoding = document.getElementById('dicodingLink');
dicoding // Ketik ini maka muncul
undefined // Muncul otomatis
dicoding.innerHTML='<i>Belajar Programming di Dicoding</i>'; // Ketik ini 
// Maka link dari dicodingLink tadi berubah menjadi Belajar JavaScript


// MANIPULASI STYLE
const buttons = document.getElementsByClassName('button');
buttons // Ketik ini maka muncul
undefined // Muncul otomatis lalu ketik berikut

/* Ini untuk menangkap elemen spesifik dari 1 button diantara button yg lain jadi tidak semua
dan button ini merupakan anak yg pertama [0]
*/
for (const button of buttons) {
    console.log(button.children[0]);
  }
// Setelah ini muncul berbagai elemen spesifik sesuai keinginan
undefined

// Setelah itu ketik ini untuk mengubah elemen yg dimaksud
for (const button of buttons) {
    button.children[0].style.borderRadius = '6px';
    }

/* Ini merupakan elemen STYLING CSS yang seharusnya border-radius,
tetapi krn JavaScript maka ini berubah menjadi borderRadius ( istilahnya camelCase)
*/