//Folosind fetch() prima data returnam userii cu id-ul mai mare ca 5
//.then - returnam user names si city
//hint nu uitati sa transformati primul raspuns ca si json
const url = "https://jsonplaceholder.typicode.com/users";

fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json())
.then(data => data.map(user => console.log(user.id, user.name)));

fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json())
.then(data => console.log(data.filter(user => user.id > 5)));



//1. fetch some horror books
//2. save the ones that have more than 230 pages
//3. display the ones that have more than one author
let url1 = 'https://www.googleapis.com/books/v1/volumes?q=horror';
fetch(url1)
.then(response => response.json())
.then(data => console.log(data.items.map(book => book.volumeInfo)
.filter(book => book.pageCount > 230)
.filter(book => book.authors.length > 1 )));


//Ex1. 
//Setati 3 cookie-uri cu numele, profesia si varsta voastra
//Stocati-le in 3 variabile dupa si afisati-le in consola
//Setati 2 cookie-uri (cu ce valori vreti voi) care sa expire la un moment dat
// Stocati-le si pe astea in alte 2 variabile
// La final vrem sa vedem 5 cookie-uri in console.log

let nume = document.cookie = 'numele = Antonia';
let profesia = document.cookie = 'profesia = farmacist';
let varsta = document.cookie = 'varsta = 25';
let hobby = document.cookie = 'hobby = citit, expires= Thu, 1 Jan 2090 00:00:00 GMT';
let cookies = document.cookie = 'cookies = tiramisu ,  expires= Thu, 1 Jan 1970 00:00:00 GMT';

console.log(nume);
console.log(profesia);
console.log(varsta);
console.log(hobby);
console.log(cookies);

//Ex2. 
//Stocati in localStorage urmatoarele chei si valori ("width" "100px") ("height" "100px") ("background-color" "green")
//stocatile in 3 variabile diferite
// folositi-le pentru a construi un patrat cu ele

localStorage.setItem("width", "100px");
let width = localStorage.getItem("width");
localStorage.setItem("height", "100px");
let height = localStorage.getItem("height");
localStorage.setItem("background-color", "pink");
let bgColor = localStorage.getItem("background-color");

let square = document.querySelector('.square');
square.style.width = width;
square.style.height = height;
square.style.backgroundColor = bgColor;