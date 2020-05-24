//daca prima cifra a CNP e 1 sau 5 
//afiseaza Persoana verificata este de sexul M
//altfel, daca prima cifra a CNP e 2 sau 6 
// afiseaza Persoana verificata este de sexul F
//altfel 
//afiseaza mesaj de eroare

function verifySex(CNP) {
    if (CNP.charAt(0) == 1 || CNP.charAt(0) == 5) {
        return 'Persoana verificata este de sexul M';
    } else if (CNP.charAt(0) == 2 || CNP.charAt(0) == 6) {
        return 'Persoana verificata este de sexul F';
    } else {
        return 'Eroare';
    }
}

console.log(verifySex('2950812134145'));

// daca punctajul e mai mare sau egal cu 1 si mai mic sau egal cu 3
// afiseaza E
//altfel, daca punctajul e mai mare decat 3 si mai mic sau egal cu 6
// afiseaza D
//altfel, daca punctajul e 7 sau 8 
//afiseaza B
//altfel, daca punctajul e 9
//afiseaza A
//altfel, daca punctajul e 10
//afiseaza A+


var grade = function (points) {
    var calificativ;
    if (points >= 1 && points <= 3) {
        calificativ = 'E';
    } else if (points > 3 && points <= 6) {
        calificativ = 'D';
    } else if (points == 7 || points == 8) {
        calificativ = 'B';
    } else if (points == 9) {
        calificativ = 'A';
    } else if (points == 10) {
        calificativ = 'A+';
    }
    return 'Calificativul corespunzator punctajului ' + points + ' este ' + calificativ;
}
console.log(grade(8));

//se verifica tipul de masina 
//se afiseaza tara corespunzatoare tipului de masina
// daca tipul de masina nu e valid se afiseaza un mesaj de eroare
var car = function (type) {
    var country;
    if (type == 'Dacia') {
        country = 'Romania';
    } else if (type == 'Renault') {
        country = 'Finland';
    } else if (type == 'Fiat') {
        country = 'Poland';
    } else if (type == 'Volvo') {
        country = 'Sweden'
    } else if (type == 'Chevrolet') {
        country = 'USA'
    } else if (type == 'Nissan') {
        country = 'Japan';
    } else {
        return 'Unknown type!'
    }
    return 'Car ' + type + ' is made in ' + country + '.'
};
console.log(car('Nissan'));


var car = function (type) {
    var country;
    switch (type) {
        case 'Dacia':
            country = 'Romania';
            break;
        case 'Renault':
            country = 'Finland';
            break;
        case 'Fiat':
            country = 'Poland';
            break;
        case 'Volvo':
            country = 'Sweden';
            break;
        case 'Chevrolet':
            country = 'America';
            break;
        case 'Nissan':
            country = 'Japan';
            break;
        default:
            return 'Unknown type!';
    }
    return 'Car ' + type + ' is made in ' + country + '.';

};
console.log(car('Nissan'));

var car = function (type) {

    var carType = {
        'Dacia': 'Romania',
        'Renault': 'Finland',
        'Fiat': 'Poland',
        'Volvo': 'Sweden',
        'Chevrolet': 'America',
        'Nissan': 'Japan',
        'default': ' unknown type!'
    };

    return 'Car ' + type + ' is made in ' + (carType[type] || carType['default']) + ".";
}
console.log(car('Nissan'));