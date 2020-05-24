// scriem o functie named 
// declaram o variabila index a carei valori initiale este 0
// pentru valoarea lui index este mai mica sau egala cu 20, incrementam index cu 1
// daca index impartit la 2 da rest 0, afisam 'valoarea lui index este para'
// altfel afisam 'valoarea lui index este impara'

function evenNumber() {
    for (i = 0; i <= 20; i++) {
        if (i % 2 === 0) {
            console.log(i + ' is an even number')
        } else {
            console.log(i + ' is not an even number')
        };
    };
};
evenNumber();

// scriem o functie named 
// declaram o variabila index a carei valori initiale este 0
// cat timp valoarea lui index este mai mica sau egala cu 20
// daca index impartit la 2 da rest 0, afisam 'valoarea lui index este para'
// altfel afisam 'valoarea lui index este impara'
// incrementam index cu 1

function evenNumber() {
    var i = 0;
    while (i <= 20) {
        if (i % 2 === 0) {
            console.log(i + ' is an even number')
        } else {
            console.log(i + ' is not an even number')
        };
        i++;
    };
};
evenNumber();

// scriem o functie named
// declaram o variabila index a carei valori initiale este 0
// pentru valoarea lui index mai mica sau egala cu 10, incrementam index cu 1
// afisam index multiplicat cu 9

function multiplyBy9() {
    for (i = 0; i <= 10; i++) {
        console.log(i * 9);
    };
};
multiplyBy9();

// scriem o functie named
// declaram o variabila index a carei valori initiale este 0
// cat timp valoarea lui index mai mica sau egala cu 10
// afisam index multiplicat cu 9
// incrementam index cu 1

function multiplyBy9() {
    var i = 0;
    while (i <= 10) {
        console.log(i * 9);
        i++;
    };
};
multiplyBy9();

// scriem o functie named 
// declaram o variabila index a carei valori initiale este 1
// pentru valoarea lui index mai mica sau egala cu 10, incrementam index cu 1
// declaram o variabila j a carei valoare initiala va fi egala cu 1
// pentru valoarea lui j mai mica sau egala cu 10, incrementam j cu 1
// declaram o variabila result care afiseaza i inmultit cu j este egal cu rezultatul inmultirii celor 2
// afisam result

function multiply() {
    for (i = 1; i <= 10; i++) {
        for (j = 1; j <= 10; j++) {
            var result = i + "*" + j + '=' + i * j;
            console.log(result.concat('\n'));
        };
    };
};
multiply();

// scriem o functie named 
// declaram o variabila index a carei valori initiale este 1
// cat timp valoarea lui index este mai mica sau egala cu 10
// declaram o variabila j a carei valoare initiala va fi egala cu 1
// cat timp valoarea lui j mai mica sau egala cu 10
// declaram o variabila result care afiseaza i inmultit cu j este egal cu rezultatul inmultirii celor 2
// afisam result
//  incrementam j cu 1
// incrementam index cu 1

function multiply() {
    i = 1;
    while (i <= 10) {
        j = 1;
        while (j <= 10) {
            var result = i + "*" + j + '=' + i * j;
            console.log(result.concat('\n'));
            j++;
        };
        i++;
    };
};
multiply();

// scriem o functie named care primeste ca parametru un punctaj
// declaram o variabila letterGrade
// daca punctajul e mai mare sau egal cu 1 si mai mic sau egal cu 3
// valoarea leterGrade va fi E
//altfel, daca punctajul e mai mare decat 3 si mai mic sau egal cu 6
// valoarea leterGrade va fi D
//altfel, daca punctajul e 7 sau 8 
//valoarea leterGrade va fi B
//altfel, daca punctajul e 9
//valoarea leterGrade va fiA
//altfel, daca punctajul e 10
//valoarea leterGrade va fi A+
// afisam 'Calificativul corespunzator punctajului este valoarea varibilei letterGrade

var grade = function (points) {
    var letterGrade;
    if (points >= 1 && points <= 3) {
        letterGrade = 'E';
    } else if (points > 3 && points <= 6) {
        letterGrade = 'D';
    } else if (points == 7 || points == 8) {
        letterGrade = 'B';
    } else if (points == 9) {
        letterGrade = 'A';
    } else if (points == 10) {
        letterGrade = 'A+';
    };
    return 'Calificativul corespunzator punctajului ' + points + ' este ' + letterGrade;
}
console.log(grade(8));

// scriem o functie named
// declaram o variabila index a carei valoare initiala este 1
// pentru index mai mic sau egal cu 10
// afisam rezultatul functiei grade corespunzator valorii index

function verifyGrade() {
    for (i = 1; i <= 10; i++) {
        console.log(grade(i));
    };
}
verifyGrade();