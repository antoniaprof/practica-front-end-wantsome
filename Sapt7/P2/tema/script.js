// Tema

// scriem o functie named care accepta ca parametru un string
// declaram o variabila reversedString goala in care vom depozita valoarea stringului reversed
// declaram o variabila index cu valoarea lungimea stringului argument-1
// pentru valoarea variabilei index mai mare sau egala cu 0
// valoarea index se decrementeaza cu 1
// variabila reversedString va fi egala cu reversdString concatenata cu valoarea lui index
// se afiseaza reversedString

function reverseAString(value) {
  var reversedString = '';
  for (var i = value.length - 1; i >= 0; i--) {
    reversedString = reversedString + value.charAt(i);
  };
  return reversedString;
};
console.log(reverseAString('mirror'));

// declaram o functie named care accepta ca parametru un nr
// declaram o variabila factorial cu valoarea initiala 1
// declaram o variabila index a carei valoare initiala va fi 1
// pentru valoarea lui index mai mica sau egala cu argumentul
// se incrementeaza valoarea lui index cu 1
// variabila factorial va fi egala cu factorial inmultita cu valoarea lui index
// se afiseaza factorial

function factorialOperation(number) {
  var factorial = 1;
  for (i = 1; i <= number; i++) {
    factorial *= i;
  };
  return factorial;
};
console.log(factorialOperation(7));

// declaram o functie named care accepta ca parametru doua stringuri(string1, string2)
// din string1 extragem de la ultima litera o lungime egala cu string2
// comparam pe cele doua
// daca sunt egale afisam 'string 1 se termina cu string2'

function compareStringsEnd(string1, string2) {
  var string2Len = -string2.length;
  if (string1.substr(string2Len) == string2) {
    return string1 + ' is ending with ' + string2;
  };
  return string1 + ' is not ending with ' + string2;
};
console.log(compareStringsEnd('vreau la mama', 'mama'))

// scriem o functie named (conditionalFn) care accepta ca parametru un nr
// daca restul impartirii argumentului la 2 este 0, functia va returna 'adevarat'
// scriem o functie named care accepta ca parametru un array si o functie de adevar (conditionalFn)
// declaram o variabila index a carei valoare e 0
// cat timp index mai mic decat lungimea arrayului si elementul selectat din array nu indeplineste conditia, trecem la urmatorul element
// se incrementeaza valoare lui index cu 1
// functia afiseaza primul element al arrayului care indeplineste conditia

function conditionalFn(number) {
  return number % 2 === 0;
}

function firstevenElement(array, conditionalFn) {
  var i = 0;
  while (i < array.length && !conditionalFn(array[i])) {
    i++;
  };
  return array[i];
};
console.log(firstevenElement([5, 6, 10, 3], conditionalFn));



// scriem  o functie named care accepta ca parametri un array si o valoare
// declaram o variabila empty string (elements)
// declaram o variabila index cu valoarea initiala 0
// cat timp elementul arrayului corespunzator valorii lui index nu este egal cu valoarea argument
//  il salvam in variabila de tip string
// incrementan valoarea lui index cu 1
// afisam variabila elements

function printToElement(array, value) {
  var elements = '';
  var i = 0;
  while (i < array.length && !(array[i] === value)) {
    elements = elements + ' ' + array[i];
    i++;
  };
  return elements;
};
console.log(printToElement([1, 2, 6, 7, 3], 3))

// declaram o functie named care accepta ca parametri 2 stringuri
// luam fiecare caracter din primul string si il comparam cu fiecare caracter din al doilea string :
// declaram variabila index cu valoarea initiala 0
// declaram variabila included cu valoarea initiala true
// cat timp valoarea lui index e mai mica decat lungimea primului string 
// si valoarea lui included este true
// declaram variabila j a carei valoare initiala este 0
// cat timp j este mai mica decat lungimea celui de-al doilea string 
// si caracterul corespunzator pozitiei index (string2) nu este egal cu 
// caracterul corespunzator pozitiei j (string1)
// incrementam valoarea lui j cu 1
// daca j este egala cu valoarea lungimii stringului 
// caracterul nu a fost gasit, deci valoarea lui included va fi false
// incrementam valoarea lui index cu 1
// daca valoarea lui included este true afisam ca
// primul string il contine pe cel de-al doilea
// altfel, afisam ca nu il contine

function compare2Strings(string1, string2) {
  var i = 0;
  var included = true;
  while (i < string2.length && included) {
    var j = 0
    while (j < string1.length && (string2.charAt(i) !== string1.charAt(j))) {
      j++;
    }
    if (j == string1.length) {
      included = false;
    }
    i++;
  };
  if (included) {
    return string2 + ' is included in ' + string1
  };
  return string2 + ' is not included in ' + string1
};
console.log(compare2Strings('nimic', 'mi'))

// scriem o functie named care accepta ca parametru un array
// declaram o variabila index cu valoarea initiala 0
// pentru valoarea lui index mai mica decat lungimea arrayului, incrementam index cu 1
// daca elementul arrayului corespunzator pozitiei index este  false, null, 0, "", undefined, NaN
// 'sarim' peste ea si afisam urmatorul element

function removeFalse(array) {
  var result = [];
  for (i = 0; i < array.length; i++) {
    if (!array[i]) {
      continue;
    }
    result.push(array[i]);
  }
  return result;
}

console.log(
  removeFalse([0, 1, '', NaN, 0 / 0, undefined, 2, 'ilinca', null, false])
);


// scriem o functie care accepta ca parametru un string si un numar
// declaram o variabila index cu valoarea 1
// cat timp index este mai mic decat numarul
// afisam stringul
// incrementam index cu 1

function repeatAString(string, number) {
  var finalString = '';
  var i = 1;
  while (i <= number) {
    finalString += string; 
    i++;
  };
  return finalString;
};
console.log(repeatAString('homework', 15))