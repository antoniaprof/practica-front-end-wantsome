//1 Adaugati un tag script pentru a face legatura
// intre fisierul js si html

//2
//adaugati un event listener pentru buton care apeleaza
// o functie postTheGossip cand este apasat

//3
// In aceasta functie luati toate valorile fieldurilor
// si faceti un story din ele
// ex "Xulescu este innebunit dupa bere neagra"


let button = document.querySelector('button');

 const postTheGossip = () => {
   let fields = document.querySelectorAll('input');
      alert(`${fields[0].value} este  ${fields[1].value} dupa ${fields[2].value}`); 
 }

button.onclick = postTheGossip;