const divs = document.getElementsByTagName('div');

for (let el of divs){
    el.addEventListener('click', function(){
        alert('ELEMENT', + el.getAttribute('id').toUpperCase());
    });
}