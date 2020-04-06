//Implementati toate exercitiile folosind sintaxa ES6
//Toate denumirile de variabile si functii trebuie sa fie in EN
//Folositi nume sugestive si aveti grija la indentare


// 1. Implementati o functie care accepta ca parametru o valoare numerica si returneaza suma numerelor de la 1 pana la valoarea specificata


const sum1 = (number) => {
    return number * (number - 1) / 2;
}
console.log(sum1(56))

const sum2 = (number) => {
    let result = 0;
    for (i = 0; i < number; i++) {
        result += i;
    }
    return result;
}
console.log(sum2(56))

// 2. Implementati o functie care accepta ca parametru un string si returneaza cel mai lung cuvant din acel string.
const findLongestWord = (string) => {
    let stringToArray = string.split(' ');
    let longestWord = '';
    for (i = 0; i < stringToArray.length; i++) {
        if (stringToArray[i].length > longestWord.length) {
            longestWord = stringToArray[i];
        }
    }
    return longestWord;
}
console.log(findLongestWord('longest word is thisssssss'))

// 3. Implementati o functie care accepta ca parametru un string si ii face 'reverse'

const reverseString = (string) => {
    let stringToArray = string.split('');
    return stringToArray.reverse().join('');
}
console.log(reverseString('reverse a string'))

// 4. Implementati o functie care accepta ca parametru un string si inlocuieste fiecare litera din acesta cu urmatoarea litera din alfabet

const replaceLetter = (string) => {
    let string1 = '';
    for (i = 0; i < string.length; i++) {
        if (string.charCodeAt(i) === 32) {
            string1 += String.fromCharCode(string.charCodeAt(i));
        } else {
            string1 += String.fromCharCode(string.charCodeAt(i) + 1);
        }
    }
    return string1;
}
console.log(replaceLetter('abcd ABCD aBcD'))

// 5. Implementati o functie convertToTime care accepta ca parametru o valoare numerica si o converteste la numarul de ore si minute corespunzatoare.
// Exemplu: input: 64  ->  output: 1:4

const convertToTime = (number) => {
    let hours = Math.floor(number / 60);
    let minutes = number % 60;
    return `${hours}:${minutes}`;
}
console.log(convertToTime(123))

// 6. Implementati o functie care accepta ca parametru un string si returneaza string-ul cu toate literele ordonate alfabetic

const alphabeticalOrder = (string) => {
    let stringToArray = string.split('');
    return stringToArray.sort().join('');
}
console.log(alphabeticalOrder('alphabetical'))


// 7. Implementati o functie care accepta ca parametru un string si verifica daca inainte si dupa fiecare litera din cadrul sau se afla caracterul '+'
// Exemplu: input: "+a+b+c+"   ->   output: true
// Exemply: input: "+ab+c+d+"  ->   output: false

const checkIfSum = (string) => {
    let result = '';
    for (i = 1; i < string.length; i += 2) {
        if (string.charCodeAt(i - 1) === 43 && string.charCodeAt(i + 1) === 43) {
            result = true;
        } else {
            result = false;
        }
    }
    return result;
}
console.log(checkIfSum('+ab+c+'))