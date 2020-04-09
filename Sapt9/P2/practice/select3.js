// Adaugati un tag script la final
// Schimbati stilul body-ului sa aiba font-family "Arial, sans-serif"
// Schimbati fiecare span(name, fav-drink, born-place) cu informatiile despre voi
// Iterati prin fiecare "li" si puneti clasa "listitem". 
// Adaugati un tag style(in head) care seteaza o regula pentru .listitem sa aiba culoarea rosie
// Creati un element img si setati atributul src sa aiba o poza cu voi sau ceva random de pe net.
//  Puneti acest element(append) la pagina noastra

const font = document.querySelector('body').style.fontFamily = 'Impact,Charcoal,sans-serif';
const span = document.getElementsByTagName('span');
span[0].textContent = 'Antonia'
span[1].textContent = 'Cuba Libre'
span[2].textContent = 'Constanta'
const list = document.querySelectorAll('ul');
for (i=0; i<list.length; i++) {
  list[i].classList.add('listitem')
}
const image = document.createElement('img');
image.setAttribute('src', 'https://media.kaufland.com/images/PPIM/AP_Content_2708/std.lang.all/90/95/Asset_1019095.jpg')
const body = document.querySelector('body')
body.appendChild(image)