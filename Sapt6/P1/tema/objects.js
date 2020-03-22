// Ex1
// Creati un obiect "car"
// Adaugati proprietatea name si valoarea Tesla
// Adaugati proprietatea wheels si valoarea 4
let car = {
  name: 'Tesla',
  wheels: 4,
};

// Schimbati valoarea name sa fie Mercedes
car.name = 'Mercedes';
console.log(car);

// Stergeti proprietatea name
delete car.name;
console.log(car);

//Ex2
// Creati un obiect cu 4 proprietati
let table = {
  color: 'brown',
  height: '60cm',
  material: 'WOOD',
  legs: 4
};

// Stocati "key"-urile intr-o variabila noua
var tableKeys = Object.keys(table);

// intr-o alta variabila vreau sa am toate key-urile cu litere mari
var stringTableKeys = tableKeys.join(' ');
var upperCaseTableKeys = stringTableKeys.toUpperCase();
console.log(upperCaseTableKeys);

// Stocati valorile intr-o variabila noua
var tableValues = Object.values(table);

// intr-o alta variabila vreau sa am toate valorile cu litere mici
var stringTableValues = tableValues.join(' ');
var lowerCaseTableValues = stringTableValues.toLowerCase();
console.log(lowerCaseTableValues);

// vreau la final sa ma rezultatul un singur string care sa contina o fraza de genul "proprietatea1 proprietatea2 proprietatea3 proprietatea4 reprezinta ceva"
console.log(stringTableValues + ' are a table properties');

//Ex3
// Creati un obiect  cu 3 proprietati si una dintre ele sa reprezinte o  metoda
// Metoda din obiect vreau sa returneze sau sa printeze (console.log()) prima valoare impreuna cu a doua valoare.
let house = {
  walls: 'white',
  roof: 'red',
  design: function () {
    console.log(this.walls + ' ' + this.roof);
  }
}
house.design();

//Ex4 
// Creati un obiect cu cateva proprietati
let garden = {
  trees: 10,
  flowers: 'pink',
  grass: 'green'
}

// "Copiati" obiectul printr-o metoda specifica obiectelor(vedeti pe google) si stocati-l intr-o alta variabila
let park = Object.assign({}, garden);

// Pe obiectul nou adaugam 2 noi proprietati
park.bench = 5;
park.fence = 'blue';

// Avem obiectul de mai jos, folosind o metoda pe obiecte faceti "merge" intre cele 2 obiecte si salvati-l sub un nume nou.
myHouse = {
  rooms: 3,
  zone: "Bucium",
  animals: 1
}
let neighborhood = Object.assign({}, myHouse, park);
console.log(neighborhood);

// Ex5 
// Creati un obiect care sa contina un alt obiect in interiorul lui cu 2 proprietati
let cookie = {
  frosting: {
    color: 'pink',
    taste: 'strawberry'
  }
};

// Accesati proprietatile acelui obiect si stocati key-le intr-o variabila separata.
var frostingColor = cookie.frosting.color;
var frostingTaste = cookie.frosting.taste;
var frostingKeys = Object.keys(cookie.frosting);
console.log(frostingKeys);

// transformati arrayul intr-un singur string care sa rezulte "proprietatea1 si proprietatea2 apartin obiectului x"
console.log(frostingKeys[0] + ' and ' + frostingKeys[1] + ' belong to object frosting');

//Ex6
// Avem obiectul : 
myObject = {
  name: "John",
  surname: "Applegate"
}
//Adaugati o metoda care sa sorteze cele 2 valori ale numelui.
var myObjectValues = Object.values(myObject);
console.log(myObjectValues.sort());

//Ex7 
//Faceti o functie constructor
function Girl(name, age, eye) {
  this.firstName = name.toUpperCase();
  this.age = age.toUpperCase();
  this.eyeColor = eye.toUpperCase();
}

// Cu functia constructor creati 3 obiecte cu valori diferite
var Ana = new Girl('Ana', 'twenty', 'green');
var Ioana = new Girl('Ioana', 'thirty', 'blue');
var Elena = new Girl('Elena', 'eight', 'brown');
console.log(Ana);

// Pentru toate valorile din acele obiecte transformati-le in litere mari.



