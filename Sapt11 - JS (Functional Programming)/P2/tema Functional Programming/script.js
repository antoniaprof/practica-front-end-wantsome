//Returnati id, title, si 150x200 box art url pentru fiecare video
//hint aveti de folosit map,filter

let movieLists = [
    {
        name: "Instant Queue",
        videos: [
            {
                "id": 70111470,
                "title": "Die Hard",
                "boxarts": [
                    { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" },
                    { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/DieHard200.jpg" }
                ],
                "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": 4.0,
                "bookmark": []
            },
            {
                "id": 654356453,
                "title": "Bad Boys",
                "boxarts": [
                    { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg" },
                    { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg" }

                ],
                "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": 5.0,
                "bookmark": [{ id: 432534, time: 65876586 }]
            }
        ]
    },
    {
        name: "New Releases",
        videos: [
            {
                "id": 65432445,
                "title": "The Chamber",
                "boxarts": [
                    { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg" },
                    { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg" }
                ],
                "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": 4.0,
                "bookmark": []
            },
            {
                "id": 675465,
                "title": "Fracture",
                "boxarts": [
                    { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
                    { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
                    { width: 300, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" }
                ],
                "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": 5.0,
                "bookmark": [{ id: 432534, time: 65876586 }]
            }
        ]
    }
];

let myList = movieLists.flatMap(movie => movie.videos)
.flatMap(video => [video.id,video.title,video.boxarts.filter(box => box.width === 150)]);
console.log(myList);

// //ex.1.
// // Scrieti o functie care sa mute literele cu o litera mai incolo folosind .map
// // de exemplu moveLetters('hello') // => 'ifmmp'
// // moveLetters('abcxy') // => "bcdyz"
// //hint : String.fromCharCode() String.charCodeAt()

const moveLetters = function (string) {
    return string.split('')
        .map(letter => {
            if (String.fromCharCode(letter.charCodeAt()) === 'Z') {
                return String.fromCharCode(65);
            } else if (String.fromCharCode(letter.charCodeAt()) === 'z') {
                return String.fromCharCode(97);
            }
            return letter.replace(/[a-zA-Z]/g, String.fromCharCode(letter.charCodeAt(0) + 1));
        })
        .join('');
};
console.log(moveLetters('bbbjkghjfhZzzz'));

// // ex2
// // Vreau sa am o functie care sa faca uppercase la cuvinte in functie ca in exemplu de mai jos
// // changeWordCase('hey ppl, lets learn javascript together') // => "HEY ppl, LETS learn JAVASCRIPT together SOMETIME"
let changeWordCase = string => {
    let arr = string.split(' ');
    return arr.map(word => {
        if (arr.indexOf(word) % 2 === 1) {
            return word.toUpperCase();
        }
        return word;
    });
};
console.log(changeWordCase('hey ppl, lets learn javascript together'));

// ex3
// Faceti asftel incat toate variabilele de mai jois sa returneze ceea ce zice numele
const arr = [
    { name: 'sasha', sex: 'f', age: 7, species: 'cat' },
    { name: 'john', sex: 'm', age: 133, species: 'human' },
    { name: 'titus', sex: 'm', age: 62, species: 'human' },
    { name: 'kalifa', sex: 'f', age: 255, species: 'human' },
    { name: 'oreo', sex: 'm', age: 21, species: 'cat' },
];

let allCats = arr.filter(creature => creature.species === 'cat');
console.log(allCats);
let allHumans = arr.filter(creature => creature.species === 'human');
console.log(allHumans);
let allFemales = arr.filter(creature => creature.sex === 'f');
console.log(allFemales);
let totalOfAllAges = arr.reduce((acc, creature) => {
    return acc + creature.age
}, 0);
console.log(totalOfAllAges);
let averageAgeOfCats = allCats.reduce((acc, creature) => {
    return acc + creature.age
}, 0) / allCats.length;
console.log(averageAgeOfCats);
let averageAgeOfHumans = allHumans.reduce((acc, creature) => {
    return acc + creature.age
}, 0) / allHumans.length;
console.log(averageAgeOfHumans);
let avgLengthOfNames = arr.reduce((acc, creature) => {
    return acc + creature.name.length;
}, 0) / arr.length;
console.log(avgLengthOfNames);

//ex 1.
// Faceti o functie numita composedValue care ia ca argumente 2 functii si returneaza valoarea lor - // f1(f2(value))
//ex composedValue(square, double, 5);  // 100
// functia square returneaza patratul numarului iar double - dublul numarului

const square = number => number * number;
const double = number => number * 2;
const composedValue = (fn1, fn2, number) => {
    return fn1(fn2(number));
};
console.log(composedValue(square, double, 5));

//ex.2
//faceti o functie 'compose' care atunci cand va fi apleata returneaza rezultatul altor 2 functii;
//exemplu const myFunction = compose(square, double) 
// myFunction(5)  --> 100
// myFunction(10) --> 400  ...etc

const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x)
console.log(compose(
    square,
    double
)(5));

//ex.3
//faceti o functie find care ia ca parametri un array si o functie care testeaza arrayul si returneaza doar elmentele care trec testele.
// find([1,2,3,4,5], isOdd); returneaza 1 3 5

const isOdd = number => number % 2 === 1;
const find = (array, condFn) => {
    return array.filter(elem => condFn(elem) === true);
};

console.log(find([1, 2, 3, 4, 5], isOdd));