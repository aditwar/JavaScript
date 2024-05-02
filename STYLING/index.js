// STYLING CSS DIMANIPULASI
const buttons = document.getElementsByClassName('button');
undefined

// Kemudian ketik ini
for (const button of buttons) {
    console.log(button.children[0]);
  }

// Kemudian setelah yg diatas ini muncul semua button yg dimaksud lalu ketik ini untuk mengubah STYLING
for (const button of buttons) {
    button.children[0].style.borderRadius = '6px';
  }

// Ini merupakan styling dari CSS 'borderRadius' yang seharusnya border-radius, karena penggunaan di JS maka harus mengikuti aturan JS
