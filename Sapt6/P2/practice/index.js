//daca firstP e mai mare - afiseaza firstP e mai mare
//daca secondP e mai mic - afiseaza secondP e mai mic*/


function greatestNrBetween(firstP, secondP) {
    if (firstP > secondP) {
        console.log('numarul mai mare dintre ' + firstP + ' si ' + secondP + ' este ' + firstP);
    } else {
        console.log('numarul mai mare dintre ' + firstP + ' si ' + secondP + ' este ' + secondP);
    }
}
console.log(greatestNrBetween(5, 10));

var helloWorldInLang = function (lang) {
    if (lang === 'en') {
        console.log('Hello world!');
    }
    else if (lang === 'de') {
        console.log('Hallo Welt!');
    }
    else if (lang === 'es') {
        console.log('Hola Mundo!')
    }
    else {
        console.log('en');
    }
}
console.log(helloWorldInLang(en));

var helloWorld = function (lang) {
    switch (lang) {
        case 'en':
            console.log('Hello world!');
            break;
        case 'de':
            console.log('Hallo Welt!');
            break;
        case 'es':
            console.log('Hola Mundo!')
            break;
        default:
            console.log('Hello World!');

    }
}

function pluralizeWord(number, name) {
    switch (true) {
        case number > 1 && name === 'goose':
            console.log(number + ' ' + 'geese');
            break;
        case number > 1 && name === 'sheep':
            console.log(number + ' ' + 'sheep');
            break;
        case number === 1:
            console.log(number + ' ' + name);
            break;
        case number > 1:
            console.log(number + ' ' + name + 's');
            break;
        default:
            console.log('no animals selected');
    }
}
pluralizeWord(2, 'dog');


function numbers(points) {
    if (points > 90) {
        console.log('AA');
    }
    else if (points > 80 && points < 90) {
        console.log('AB');
    } else if (points > 70 && points < 80) {
        console.log('BB');
    } else if (points > 60 && points < 70) {
        console.log('BC');
    }
    else if (points > 50 && points < 60) {
        console.log('CC');
    } else if (points > 40 && points < 50) {
        console.log('CD');
    } else if (points > 30 && points < 40) {
        console.log('DD');
    } else (points <= 30) {
        console.log('FF');
    }
}
console.log(numbers(50));

var is_weekend = function (date1) {
    var dateN = new Date(date1);

    if (dateN.getDay() == 6 || dateN.getDay() == 0) {
        return "weekend";
    }
}

console.log(is_weekend('Nov 15, 2014'));
console.log(is_weekend('Nov 16, 2014'));
console.log(is_weekend('Nov 17, 2014'));