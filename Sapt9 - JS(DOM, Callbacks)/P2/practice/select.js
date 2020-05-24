//Selectati fiecare element cu metodele ajutatoare
// primul dupa id - getElementById
//al doilea si al 3lea cu getElementsByClassName
//cele 2 section cu getElementByTagName
//etc
// La fiecare selectie vom schimba background color-ul cu o culoare diferita pentru fiecare metoda
const elementDiv = document.getElementById('test');
elementDiv.style.backgroundColor = 'green';
console.log(elementDiv);

const elementClass = document.getElementsByClassName('test');
for (i = 0; i < elementClass.length; i++) {
    elementClass[i].style.backgroundColor = 'pink';
}
console.log(elementClass);

const elementTag = document.getElementsByTagName('section');
for (i = 0; i < elementTag.length; i++) {
    elementTag[i].style.backgroundColor = 'blue';
}
console.log(elementTag);

const queryElement = document.querySelector('#test-query');
queryElement.style.backgroundColor = 'red';
console.log(queryElement);

const queryAllElement = document.querySelectorAll('.test-query-all');
for (i = 0; i < queryAllElement.length; i++) {
    queryAllElement[i].style.backgroundColor = 'orange';
}
console.log(queryAllElement);