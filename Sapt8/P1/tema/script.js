//Vreau sa am o functie care sa-mi calculeze suma dintre 2 numere daca ele sunt diferite iar daca sunt egale sa-mi imulteasca suma lor cu 5
//ex myFunction(10, 5) - output 15 // myFunction(10,10) - output 100

const myFunction = (number1, number2) => {
  if (number1 === number2) {
    return (number1 + number2) * 5;
  }
  return number1 + number2;
}
console.log(myFunction(2, 4));

//Ex2
//Vreau sa am o functie care sa returneze true daca ambele numere sunt egale cu 30 sau daca suma lor este egala cu 30
//ex testFunction(30, 30) - true 
//testFunction(15,15) - true
//testFunction(10, 15) - false


const testFunction = (number1, number2) => number1 === 30 && number2 === 30 || number1 + number2 === 30;
console.log(testFunction(20, 5));



//Ex3
//Vreau sa am o functie care sa verifice un string si daca stringul incepe cu 'JS' sa returneze acel string iar daca nu incepe sa-l adauge
//checkString('JSisAwsome') - JSisAwsome
//checkString('isEasy') - JSisEasy
//checkString(null) - JS

const checkString = text => {
  if (text.slice(0, 2) === 'JS') {
    return text;
  }

  return `JS ${text}`;
}
console.log(checkString('is awesome'));

//Ex4
//Scrieti o functie care sa scoata literele/cifrele duplicate dintr-un string/number
//removeDuplicates('aabcdeef') - 'abcdef'
//removeDuplicates(122334) - 1234
const removeDuplicates = param => {
  let noDuplicates = '';
  for (i = 0; i < param.length; i++) {
    if (noDuplicates.indexOf(param[i]) == -1) {
      noDuplicates += param[i];
    }
  }
  return noDuplicates;
}
console.log(removeDuplicates('njnjlnnnnkklnuigyggggjvhvtuvgvghvgjnkkk'));

//Ex5
// Gasiti cel mai lung string intr-o fraza
//findLongestString('Wantsome is Awsomeeee today') - output 'Awsomeeee'

const findLongestString = string => {
  let stringToArray = string.split(' ');
  let longestWord = '';
  for (i = 0; i < stringToArray.length; i++) {
    if (stringToArray[i].length > longestWord.length) {
      longestWord = stringToArray[i];
    }
  }
  return longestWord;
}
console.log(findLongestString('Wantsomeeeeeeeeee is Awsomeeee today'));

//Ex6
//Scrieti o functie care sa aiba output-ul asta
// *  
// * *  
// * * *  
// * * * *  
// * * * * *  

const hostFn = () => {
  var a = '';

  const stars = () => {
    a += '*'
    return a;
  }
  return stars;
}
let fn = hostFn();
console.log(fn());
console.log(fn());
console.log(fn());
console.log(fn());
console.log(fn());
console.log(fn());


//ex7
const extractNegativeNumbers = numbers => {
  let negativeNumbers = [];
  for (i = 0; i < numbers.length; i++) {
    if (numbers[i] < 0) {
      negativeNumbers.push(numbers[i]);
    }
  }
  return negativeNumbers;
}
console.log(extractNegativeNumbers([1, 2, -5, 4, -6, 0, -3, -5, -100]));

//ex8
//Avem o functie cu 2 numere si un operator, vrem sa obtinem rezultatul in functie de operator - "add", "substract", "multiply", "divide"
//ex calculate(2, 5, "add") => 7
//calculate(10, 8, "substract") => 2

const calculate = (number1, number2, operation) => {
  let result = 'Try an operation'
  if (operation === 'add') {
    result = number1 + number2;
  } else if (operation === 'substract') {
    result = number1 - number2;
  } else if (operation === 'multiply') {
    result = number1 * number2;
  } else if (operation === 'divide') {
    result = number1 / number2;
  }
  return result;
}
console.log(calculate(10, 8, "substract"));
console.log(calculate(2, 50, "multiply"));

//Ex9
// Vreau sa am o functie care sa verifice daca numarul dat este divizibl cu 3, 5 sau ambele si sa printeze "THREE", "FIVE", "BOTH" iar daca nu este cu niciunul sa returneze numarul
// isDiv(15) => "BOTH"
// isDiv(9)=> "THREE"
// isDiv(7)=> 7

const isDiv = number => {
  if (number % 3 === 0 && number % 5 === 0) {
    return 'both';
  } else if (number % 3 === 0) {
    return 'three';
  } else if (number % 5 === 0) {
    return 'five'
  }
  return number;
}
console.log(isDiv(9));

//Master exercises
//Ex9 
// Vreau sa pot afisa data si ziua sub urmatorul format:
// Azi este : Luni. 
// Ora este : 20 PM : 30 : 38

const printDate = () => {
  let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  let date = new Date();
  let day = date.getDay();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();
  for (i = 0; i < days.length; i++) {
    if (day === i) {
      if (hour <= 12) {
        return 'Today is : ' + days[i] + '.' + '\n' + 'The hour is : ' + hour + 'AM' + ':' + minute + ':' + second
      }
      return 'Today is : ' + days[i] + '.' + '\n' + 'The hour is : ' + hour + ' PM' + ':' + minute + ':' + second
    }
  }
}
console.log(printDate());

//ex10
// ATM-urile iti dau voie sa folosesti pin-uri din 4 sau 6 cifre. Faceti o functie care sa returneze true daca pin-ul e corect si false daca e gresit
// validPin("1234") => true
// validPin("12345") => false
// validPin("z23f") => false

const validPin = pin => {
  if (pin.length !== 4 && pin.length !== 6) {
    return false;
  }
  for (i = 0; i < pin.length; i++) {
    if (pin.charCodeAt(i) < 48 || pin.charCodeAt(i) > 57) {
      return false;
    }
  }
  return true;
}
console.log(validPin('1ffv78'));

//ex11 
//Folosind regex vreau sa scot toate vocalele dintr-un string
// removeVowels("Hey I am developer") => "Hy m dvlpr"

const removeVowels = string => {
  return string.replace(/[a,e,i,o,u]/ig, '');
}
console.log(removeVowels("Hey I am a developer"));

//ex12
//Vreau sa am o functie care sa verifice daca un numar este patrat
// isSquareNumber(-1) => false
// isSquareNumber(25) => true
// isSquareNumber(3) => false

const isSquareNumber = number => {
  if (Math.sqrt(number) % 1 == 0) {
    return true;
  }
  return false;
}
console.log(isSquareNumber(25));

//ex13
// Vreau sa am o functie care sa verifice daca un cuvant este o anagrama- daca toate literele din primul string se regasesc in al doilea
// isAnagram("School master", "The class room") => true
// isAnagram("silent", "listen") => true

const isAnagram = (stringA, stringB) => {
  stringA = stringA.replace(/[' ']/g, '').toLowerCase();
  stringB = stringB.replace(/[' ']/g, '').toLowerCase();
  return stringA.split('').sort().join('') === stringB.split('').sort().join('');
}

console.log(isAnagram("School master", "The class room"));