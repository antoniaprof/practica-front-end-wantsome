/* 
1. Creati o pagina HTML care sa includa un buton; Intr-un fisier index.js separat 
definiti o functie buttonEventHandler al carei cod sa porneasca o fereastra
de tip alerta in care se va afisa textul "Ai apasat pe buton.". Specificati prin 
intermediul onclick atasat elementului buton un event listener care sa declanseze
functia buttonEventHandler atunci cand se apasa pe buton.
*/

/*
2. Adaugati un nou element de tip text input. Specificati o noua functie textInputEventHandler.
care afiseaza o alta alerta cu textul ("Textul din input a fost schimbat"). Specificati
un event listener care sa corespunda actiunii descrise in textul afisat de alerta.
*/

/*
3. Adaugati un nou element de tip paragraf care sa contina textul "Sunt un cameleon.".
Definiti o noua functie cameleonEventHandler care schimba random culoarea paragrafului
atunci cand user-ul apasa orice tasta.
Hint: folositi addEventListener
*/



const buttonEventHandler = () => {
    alert('Ai apasat un buton!');
}

let textInput = document.querySelector('input');
const textInputEventHandler = () => {
    alert('Textul din input a fost schimbat!');
}
textInput.onkeydown = textInputEventHandler;

let paragraph = document.createElement('p');
let body = document.querySelector('body');
body.appendChild(paragraph);
paragraph.textContent = 'Sunt un cameleon';


const changeColor = () => {
    let colors = ['blue', 'green', 'red', 'yellow', 'pink'];
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    paragraph.style.color = randomColor;
}
document.addEventListener('keydown', changeColor);

