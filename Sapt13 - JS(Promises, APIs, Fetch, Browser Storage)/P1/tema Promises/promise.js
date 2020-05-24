// 1. Creati o functie care primeste un numar ca si argument si returneaza un Promise care testeaza daca valoarea este
// mai mica sau mai mare decat 10 - se va face reject / resolve in functie de valoarea de adevar a conditiei de
// comparatie.
// Apelati functia si folositi consumatorii then si catch pentru a trata ambele cazuri

const promiseEx1 = number => {
  return new Promise((resolve, reject) => {
    if (number < 10) {
      resolve(number);
    } else {
      reject(number);
    }
  })
}

promiseEx1(5)
.then(result => console.log(`Numarul este ${result} si este mai mic decat 10`))
.catch(result => console.log(`Numarul este ${result} si este mai mare decat 10`));
promiseEx1(78)
.then(result => console.log(`Numarul este ${result} si este mai mic decat 10`))
.catch(result => console.log(`Numarul este ${result} si este mai mare decat 10`));

//   4. Creati doua functii care folosesc Promises pentru a putea face o inlantuire (Promise chain). Prima functie,
// capitalizeWords(), va primi ca si argument un array de cuvinte si va aplica o operatiune de capitalize pe acestea.
// A doua functie, sortWords(), va primi ca si argument rezultatul primului Promise si va sorta cuvintele in ordine
// alfabetica. In cazul in care array-ul initial contine un element cu o valoare diferita de tipul string, se va face reject.


const capitalizeWords = array => {
    return new Promise((resolve, reject) => {
      if(array.forEach(item => typeof item === string)){
        resolve(array.map(item => item.toUpperCase()))
      } else {
        reject('Nu e ok')
      }
    })
  } 
  
  
  console.log(capitalizeWords(['all', 'sjsjd', 'dajbdjka']))
//   avem de facut 2 promise
//   in then la promise capitalize apelam  promise sortWords
// pt ex API https://api.exchangeratesapi.io/latest?base=EUR
