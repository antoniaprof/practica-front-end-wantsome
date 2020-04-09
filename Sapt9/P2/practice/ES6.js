// PRIORITY: Variable assignment > function declaration > variable declaration

x = 'firstFirstValue';

function x() {
  console.log("something");
}

var x = 'firstValue';
var x = 'secondValue';


console.log(x);

// I - Secventa de declaratii 

// 1. hoisting - declara x - var x este mutat sus - hoisted
// 2. hoisting - declara x cu valoarea functiei de tip named
// 3. nu mai are de facut hoisting, trece la executie - asignarea de valori
// 4. asigneaza lui x valoarea 'firstFirstValue'
// 5. asigneaza lui x valoarea 'firstValue'
// 6. asigneaza lui x valoarea 'secondValue'

// II - INCEPE EXECUTIA

//stop using var

// global scope

const PI = 3.14;

function uniqueFunction () {
  let myUniqueVar = '';
  let conditionalVar = true;

  // function scope

  if (conditionalVar) {
    // block scope
    let onlyIfVariable = false;  
  }

  console.log(myUniqueVar);
}

function thisIsAClojure() {
    // functie parinte obligatorie
    let thisIsAParentScopedValue = 5;
  
    // functie copil obligatorie
    function child() {
      thisIsAParentScopedValue++;
      return thisIsAParentScopedValue;
    }
  
    return child;
  }
  
  const returnedFn = thisIsAClojure();
  console.log(returnedFn()); // 6
  console.log(returnedFn()); // 7
  console.log(returnedFn()); // 8
  
  const returnedFn2 = thisIsAClojure();
  console.log("2: " + returnedFn2());

  sum(multiply(10,20), multiply(5, 6));

// pasul 1: apel multiply(10,20) si apel multiply(5, 6)
// cele doua returneaza 200 si 30
// pasul 2: sum(200, 30) - se executa, adica se face apel
// returneaza 230

let checkStringPlusFormat = str => {
    const characters = str.split(""); // impart string-ul intr-un array litere ca sa il pot itera
    for (let i = 1; i < characters.length - 1; i += 2) { // avand in vedere ca un string corect e de forma +a+a+a+, inseamna ca trebuie sa merg din 2 in 2 incepand cu pozitia 1 din array
      console.log(`Ma aflu la pozitia ${i}, characters[i-1] este '${characters[i-1]}', characters[i] este '${characters[i]}',  characters[i+1] este '${characters[i+1]}'`);
  
      if (!str.match(/[a-z]/i)) { // daca pe pozitia curenta nu se afla o litera, oprim executia
        return false;
      }
  
      if (characters[i - 1] === "+" && characters[i + 1] === "+") { // pentru fiecare pozitie, daca inainte si dupa avem +, mergem mai departe
        console.log(`----> Caracterul '${characters[i]}' de pe pozitia ${i} a indeplinit conditia de a avea '+' inainte si dupa, deci continuam cu urmatorul caracter \n\n\n`);
        continue;
      } else {
        console.log(`----> Caracterul '${characters[i]}' de pe pozitia ${i} nu a indeplinit conditia de a avea + inainte si dupa, deci oprim continuarea executiei \n\n\n`);
        return false; // daca conditia anterioara nu s-a indeplinit, adica nu avem + inainte si dupa pozitia curenta, returnam direct fals si iesim din functie, nu mai are rost sa continuam 
      }
    }
  
  
    console.log(`Toate caracterele au indeplinit conditia de a avea '+' inainte si dupa, deci string-ul este formatat corect`)
    // daca for-ul s-a terminat, inseamna ca toate caracterele au trecut conditia din for, inseamna ca string-ul e corect, deci putem returna true
    return true;
  }
  
  const firstTest = checkStringPlusFormat('++a+a+');
  console.log(firstTest);
  
  const secondTest = checkStringPlusFormat('+adsdsdsds+a+a+');
  console.log(secondTest);
  
  const thirdTest = checkStringPlusFormat('+#+a+a+');
  console.log(thirdTest);