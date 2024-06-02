const divs = document.getElementsByTagName('div');

for (let el of divs){ // Penerapan berdasarkan child div
    el.addEventListener('click', function(){
        alert('ELEMENT ', + el.getAttribute('id').toUpperCase());
    },true); // Event Listener yang memberikan parameter BOOLEAN KHUSUS sehingga akan memberikan urutan sebaliknya
}