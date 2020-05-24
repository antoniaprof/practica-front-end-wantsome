const capitalizeNames = arr => 
    console.log(arr.map(name => name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()));

capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]);

const doubleEachNumber = arr => {
    let result = arr.map(item => {
        if (typeof item === 'number') {
            return item * 2;
        }
        return item;
    });
    return result;
}
console.log(doubleEachNumber([2, '5', 100, '100', 'blalblala']));

const getPersonsNames = arr => 
    arr.map(person => person.name + ' ' + person.surname);

console.log(getPersonsNames([
    {
        name: 'Angelina',
        surname: 'Jolie',
        age: 80
    },
    {
        name: 'Eric',
        surname: 'Jones',
        age: 27
    },
]))

const computeExamPass = arr => 
    arr.map(person => {
        if(person.grade >= 5){
        return `${person.name} has passed the exam` }
      return `${person.name} has not passed the exam`    
        });


console.log(computeExamPass([
    {
        name: 'Angelina',
        surname: 'Jolie',
        grade: 7
    },
    {
        name: 'Eric',
        surname: 'Jones',
        grade: 3
    },
]))

const createPersonsDomElements = arr => 
    arr.forEach(person => {
        let name = document.createElement('h1');
        name.textContent = person.name + ' ' + person.surname;
        document.querySelector('body').appendChild(name);

        let age = document.createElement('h1');
        age.textContent = person.age;
        document.querySelector('body').appendChild(age);
    });

createPersonsDomElements([
    {
        name: 'Angelina',
        surname: 'Jolie',
        age: 80
    },
    {
        name: 'Eric',
        surname: 'Jones',
        age: 27
    },
]);