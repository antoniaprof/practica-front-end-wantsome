//Ex1: Creati un array care sa aiba length-ul 5. Demonstrati ca length-ul este 5.

var myArray = [1, 2, 3, 4, 5];
var result = myArray.length;
console.log(result);

//Ex2: Din cele 2 arrayuri de mai jos, folositi o metoda sa avem unul singur
var array1 = ['Car', 'Vehicle'];
var array2 = ['House', 'Job'];
var array3 = array1.concat(array2);
console.log(array3);

//Ex3: Creati 2 variabile, una care sa dea true si una care sa dea false atunci cand folosim metoda isArray()
var myArray = [1, 2, 3, 4, 5];
var nonArray = 12345;
var result2 = Array.isArray(nonArray);
console.log(result2);

//Ex4: Folositi o metoda pe arrayuri avand in vedere variabila de mai jos, sa obtinem rezultatul "one and two and three and four and five" 
// fara sa modificati variabila initiala
var numbers = ['one', 'two', 'three', 'four', 'five'];
var result3 = numbers.join(' and ');
console.log(result3);

///Ex5: Adaugati 2 elemente noi in arrayul de mai jos */
var cars = ['Tesla', 'Dacia'];
var result4 = cars.push('Mercedes', 'BMW');
console.log(cars);

//Ex6: Avand rezultatul de la exercitiul anterior, scoateti ultimul element intrat.*/
var result5 = cars.pop();
console.log(cars);

//Ex7: Avand rezultatul exercitiului anterior, adaugati elementul 'Dodge' la inceputul arrayului
var result6 = cars.unshift('Dodge');
console.log(cars);

//Ex8: Avand rezultatul exercitiului anterior, inversati ordinea elementelor din array
var result7 = cars.reverse();
console.log(cars);

//Ex9: Avand in vedere rezultatul anterior Folositi o metoda pe arrayuri care sa inlocuiasca incepand de la elementul 'Tesla' si sa adauge alte 2 elemente noi - splice();
var result8 = cars.splice(2, 2, 'BMW', 'HYUNDAI');
console.log(cars);

//Ex10: Sortati urmatorul array de la mic la mare si de la mare la mic 
var arrayNumbers = [1, 5, 20, 30, 100];
var arrayNumbers2 = arrayNumbers.sort(function (a, b) {
    return a - b;
});
console.log(arrayNumbers2);

var arrayNumbers = [1, 5, 20, 30, 100];
var arrayNumbers3 = arrayNumbers.sort(function (a, b) {
    return b - a;
});
console.log(arrayNumbers3);

//Ex11 : Aveti urmatorul array - folositi o functie care sa ia arrayul ca argument si sa-l returneze ordonat
var fruitsArray = ["Apple", "Lemon", "Banana", "Orange", "Bere", "Mici"];
function fruits(value) {
    return value.sort()
};
console.log(fruits(fruitsArray));
