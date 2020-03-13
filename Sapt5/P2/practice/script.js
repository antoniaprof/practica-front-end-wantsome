//Ex1
//Scrieti o functie multiplyByTen care atunci cand o apelam cu console.log(multiplyByTen(6)) sa avem 60 rezultat.

function multiplyByten(value) {
    return value * 10;
  }
  multiplyByten(6)
  console.log(multiplyByten(6));
  
  
  //Ex2
  //Scrieti o functie myNameIs care sa ia un singur parametru si cand o apelam cu numele nostru sa returneze "Numele meu este ___"
  
  function myNameIs(numeleMeu) {
    return "Numele meu este "+ numeleMeu;
  }
  myNameIs("Antonia");
  console.log(myNameIs("Antonia"));
  
  //Ex3 
  //Scrieti o functie care sa transforme un numar in string.
  
  function transform(number) {
    return number.toString();
  }
  var res = transform(56);
  // console.log(typeof res);
  
  //Ex4 
  //Scrieti o functie care sa returneze patratul numarului pe care-l dam ca si argument.
  
  function squareNumber(numberValue) {
    return numberValue*numberValue;
  }
  squareNumber(4);
  console.log(squareNumber(4));
  
  //Ex5
  //Scrieti o functie numita aflaViitorul care sa aiba 4 parametrii -  numele jobului, compania, in cati ani, si cati bani - ar trebui sa returnam "Eu voi fi job in x ani la compania y si voi face z bani pe ora"
  //Chemati/invocati/apelati acea functie de 3 ori cu diferite argumente.
  
  function aflaViitorul(jobName, company, years, money) {
    return "Eu voi fi "+ jobName + " in " + years + " ani la compania " + company + " si voi face " + money + " pe ora";
  }
  aflaViitorul("programator", "Google", "2", "unlimited");
  console.log(aflaViitorul("programator", "Google", "2", "unlimited"));
  
  
  //Ex6
  //Scrieti o functie care sa calculeze cati ani are o pisica in ani pisicesti avand in vedere ca 1 an de om = 7 ani de pisica.
  // functia are 1 singur parametru - deci va accepta 1 singur argument.
  // Rezultatul trebuie sa fie "Pisica mea are xx ani in ani pisicesti"
  //BONUS - adaugati un alt parametru care reprezinta varsta noastra si obtinem la final varsta pisciii relatata la varsta noastra.
  
  function catAge(catYears, humanYears) {
    return "pisica mea are " + catYears*7 + " de ani in ani omemesti iar eu am "+humanYears/7+" in ani pisicesti";
  }
  catAge(3, 26);
  console.log(catAge(3, 26));
  
  
  //Ex7
  // Vreau sa scriu o functie ce sa calculeze pentru urmatorii X ani cate cani de cafea voi bea
  // Functia accepta ca parametrii years si coffePerDay.
  // Rezultatul va fi "In urmatorii X ani voi bea in total Y cani de cafea"
  
  function coffee(years, coffeePerDay) {
    return "In urmatorii "+years+" ani voi bea in total "+coffeePerDay*365*years+" cani de cafea"
  }
  coffee(5, 3);
  console.log(coffee(5, 3));
  
  //EX8 BONUS 
  // Faceti 2 functii una calculateCelsiusToFarenheit() si una calculateFarenheitToCelsius() unde sa facem conversia dintre celsius si farenhite.
  // rezultatul trebuie sa fie "X grade Celsius reprezinta Y grade Farenhite"
  // folositi https://www.mathsisfun.com/temperature-conversion.html ca si referinta pentru calcul.
  
  function calculateCelsiusToFarenheit(celsiusValue) {
    return celsiusValue + " grade Celsius reprezinta " + (celsiusValue/5 * 9 + 32) +" grade Farenheit";
  }
  calculateCelsiusToFarenheit(20);
  console.log(calculateCelsiusToFarenheit(20));
  
  function calculateFarenheitToCelsius(FahrenheitValue) {
    return FahrenheitValue + " grade Fahrenheit reprezinta " + ((FahrenheitValue - 32)*9/5) +" grade Celsius";
  }
  calculateFarenheitToCelsius(20);
  console.log(calculateFarenheitToCelsius(20));




//Ex1 : La ce index intalnim cuvantul 'trece', dar cuvantul 'javascript'? Scrieti si metodele folosite.
var str = "Daca te simti bine, nu te ingrijora, trece!";
//Raspuns: 
var index1 = str.indexOf("trece");
console.log(index1);
var index2 = str.indexOf("javascript");
console.log(index2);

// Ex2.0: Returnati stringul Kiwi folosind metoda slice() cu indexi pozitivi si apoi negativi.
  var fruits = "Apple, Lemon, Plum, Kiwi";
  var oneFruit = fruits.slice(19, 24);
  console.log(oneFruit);
  var anotherFruit = fruits.slice(-1, -4);
  console.log(anotherFruit);

// Ex 2.1: Returnati toate fructele incepand de la 'Lemon'.
  var allFruits = fruits.slice(6, 24);
  console.log(allFruits);

// Ex 3: Returnati stringul 'Plum' folosind metoda substr()
   var moreFruits = "Apple, Lemon, Plum, Kiwi";
   var otherFruits = moreFruits.substr(13, 5);
  console.log(otherFruits);


// Ex 4: Inlocuiti 'Mia Kalifa' cu numele vostru folosind o metoda pe stringuri
// bonus: Inlocuiti "Sasha" cu numele vostru in tot stringul de mai jos.
   var replaceName = "Eu sunt Mia Kalifa, doctor docent in matematica";
   var replace = replaceName.replace("Mia Kalifa", "Antonia");
   console.log(replace);

   var bonusName = "Sasha este o persoana de nota 10, Sasha invata javascript(mai nou)"
   var bonus = bonusName.replace(/Sasha/g, "Antonia");
    console.log(bonus);
   
   
// Ex5: Vreau ca toate literele sa fie intai cu caractere mici si apoi cu caractere mari
   var text = "24 de orE intr-o zi, 24 de beRi intr-o lAda. Vreo coincidenta?"
   var lowercase = text.toLowerCase();
   console.log(lowercase);
    var uppercase = text.toUpperCase();
    console.log(uppercase);
   
// Ex6: Vreau sa am la final un singur string cu toate celalte stringuri (indentati calumea, cu spatii unde e nevoie)
   var text1 = "Când ai un";
   var text2 = "ciocan";
   var text3 = "in mana toate lucrurile ti se par";
   var text4 = "cuie";
   var text0 = " ";
   var text5 = text1.concat(text0, text2, text0, text3, text0, text4);
  console.log(text5);

// Ex7: Vreau sa stiu intai ce litera se afla pentru indexul 6, apoi ce unicode are aceasta litera, si apoi vreau sa o accesez cu 'property access'
  var word = "Mamaliga";
  var letter = word.charAt(6);
 console.log(letter);
  var code =word.charCodeAt(6);
  console.log(code);

 
// Ex8: Vreau sa am o noua variabla care sa cotina un array format din toate stringurile de mai jos care sunt despartite de '|'
  var cars = "Toyota|Mazda|Tesla|Hyundai|Dacia";
  var car = cars.split("|");
   console.log(car);
  
//Big BONUS 
// Se dau variabilele de mai jos, vreau sa ajung la rezultatul "NU EXISTA INTREBARI PROASTE" fara sa modific valorile celor 2 variabile;
  var firstWord = 'Nu exista';
  var secondWord = 'raspunsuri proaste';
  var thirdWord = firstWord.concat(" ", secondWord.replace("raspunsuri", "intrebari")).toUpperCase();
  console.log(thirdWord);