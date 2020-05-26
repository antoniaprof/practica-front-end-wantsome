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
    };
  });
};

promiseEx1(5)
  .then(result => console.log(`Numarul este ${result} si este mai mic decat 10`))
  .catch(result => console.log(`Numarul este ${result} si este mai mare decat 10`));
promiseEx1(78)
  .then(result => console.log(`Numarul este ${result} si este mai mic decat 10`))
  .catch(result => console.log(`Numarul este ${result} si este mai mare decat 10`));

// 2. Creati o functie care primeste un string ca si argument si returneaza un Promise care testeaza daca acesta contine
// sau nu cuvantul “promise” - se va face reject / resolve in functie de valoarea de adevar a conditiei specificate.
// Apelati functia si folositi consumatorii then si catch pentru a trata ambele cazuri.

const checkForPromise = string => {
  return new Promise((resolve, reject) => {
    if (/promise/.test(string)) {
      resolve();
    } else {
      reject();
    };
  });
};

checkForPromise('promise me something')
  .then(() => console.log('Textul introdus contine cuvantul promise'))
  .catch(() => console.log('Textul introdus nu contine cuvantul promise'));

checkForPromise('something')
  .then(() => console.log('Textul introdus contine cuvantul promise'))
  .catch(() => console.log('Textul introdus nu contine cuvantul promise'));

// 3. Creati o functie care primeste un singur parametru si returneaza un Promise. Folosind setTimeout, dupa 500ms,
// acest Promise fie va face resolve, fie va face reject, in functie de urmatoarele cazuri: daca input-ul este un string,
// Promise-ul se va rezolva cu rezultatul avand valoarea string-ului uppercased; daca input-ul nu este un string,
// Promise-ul va face reject cu rezultatul avand valoarea string-ului fara nicio modificare.
// Apelati functia si folositi consumatorii then si catch pentru a trata ambele cazuri.

checkIfString = value => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof value === 'string') {
        resolve(value.toUpperCase());
      } else {
        reject(value);
      };
    }, 500);
  });
};

checkIfString('yey!!')
  .then(result => console.log(result))
  .catch(error => console.log(error));

checkIfString(5347)
  .then(result => console.log(result))
  .catch(error => console.log(error));

//   4. Creati doua functii care folosesc Promises pentru a putea face o inlantuire (Promise chain). Prima functie,
// capitalizeWords(), va primi ca si argument un array de cuvinte si va aplica o operatiune de capitalize pe acestea.
// A doua functie, sortWords(), va primi ca si argument rezultatul primului Promise si va sorta cuvintele in ordine
// alfabetica. In cazul in care array-ul initial contine un element cu o valoare diferita de tipul string, se va face reject.

const capitalizeWords = array => {
  return new Promise((resolve, reject) => {
    if (array.every(item => typeof item === 'string')) {
      resolve(array.map(item => item.toUpperCase()));
    } else {
      reject('Wrong input!');
    };
  });
};

capitalizeWords(['bianca', 'elena', 'maria', 'alina', 'veronica'])
  .then(sortWords = result => console.log(result.sort()))
  .catch(error => console.log(error));

capitalizeWords(['bianca', 9930, 32, 21])
  .then(sortWords = result => console.log(result.sort()))
  .catch(error => console.log(error));

// Implementati functionalitatea anterior prezentata si folositi-o pentru a apela mai multe API-uri externe, la alegere 
// (cel putin 3 )

const getAPI = url => {
  return new Promise((resolve, reject) => {
    let request = new XMLHttpRequest();
    request.open('GET', url);
    request.onload = () => {
      if (request.status === 200) {
        resolve(JSON.parse(request.response));
      } else {
        reject(Error(request.statusText));
      };
    };
    request.onerror = () => {
      reject(Error("Network Error"));
    };
    request.send();
  });
};

getAPI('https://api.exchangeratesapi.io/latest?base=EUR')
  .then(result => console.log('Succes!', result))
  .catch(error => console.log('Failed!', error));

getAPI('https://community-open-weather-map.p.rapidapi.com/weather')
  .then(result => console.log('Succes!', result))
  .catch(error => console.log('Failed!', error));

getAPI('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=DEMO_KEY')
  .then(result => console.log('Succes!', result))
  .catch(error => console.log('Failed!', error));

getAPI('https://api.osf.io/v2/')
  .then(result => console.log('Succes!', result))
  .catch(error => console.log('Failed!', error));