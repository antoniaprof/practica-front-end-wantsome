//1. Creati o clasa Person care sa aiba firstName si lastName in constructor
//2.aduagati o metoda displayPersonName care sa returneze numele complet
//3. creati o persoana cu noua clasa unde dati un nume si-un prenume si apelati metoda respectiva

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  };
  displayPersonName() {
    return this.firstName + ' ' + this.lastName;
  };
};

let me = new Person('Jane', 'Doe');

console.log(me.displayPersonName());

//1. Creati o clasa Animal care sa aiba in constructor name si weight
//2. Creati urmatoarele metode: eatFood, sleep, weakingUp - fiecare metoda o sa returneze un string '$name is eating' '$name is sleeping' '$name is weaking up'
//3. Creati o clasa noua care sa faca extend la clasa Animal si sa ia numele si weight-ul de la el(tip: super) - ex: class Elephant, class Lion etc
//4. Adaugati 4 metode noi:
//   walking - $name is walking
//   rage - $name is rageing
//   showBehaviour - returnati metodele eatFood si rage
//   dailyRoutine - returnati metodele weakingUp, rage, eatFood si sleep

//5. Creati o constanta noua din clasa cu numele de animal pe care ati scris-o mai sus( NU DIN clasa Animal ci din clasa Elephant, Monkey, Lion etc etc);
//6. Accesati toate cele 4 metode de pe noul animal.

class Animal {
  constructor(name, weight) {
    this.name = name;
    this.weight = weight;
  };
  eatFood() {
    return `${this.name} is eating`;
  };
  sleep() {
    return `${this.name} is sleeping`;
  };
  wakingUp() {
    return `${this.name} is waking up`;
  };
};

class Lion extends Animal {
  constructor(name, weight) {
    super(name, weight);
  };
  walking() {
    return `${this.name} is walking`;
  };
  rage() {
    return `${this.name} is raging `;
  };
  showBehaviour() {
    return `${super.eatFood()} ${this.rage()}`;
  };
  dailyRoutine() {
    return `${super.wakingUp()} ${this.rage()} ${super.eatFood()} ${super.sleep()}`
  };
}

let lioness = new Lion('Kitty', '20');
console.log(lioness.walking());
console.log(lioness.rage());
console.log(lioness.showBehaviour());
console.log(lioness.dailyRoutine());

//1. creati o clasa Account care sa aiba location si name la constructor
//2. creati o clasa Transaction care sa iba sender, bank, amount si reference la constructor
//2.1 - clasa Transaction sa aiba un getter finalSum() care sa scada din amount 10;
//3. creati o clasa Table care sa aiba in cunstructor un array gol transactions
//3.1 Clasa Table sa aiba o metoda addTransaction unde sa putem adauga tranzactiile pe care o sa le creem mai tarziu


// const bankAccount = ...;
// const transaction1 = ...;
// const transaction2 = ...;
// const table = ...;
// table.addTransaction(...)
// console.log(table)

class Account {
  constructor(location, name) {
    this.location = location;
    this.name = name;
  };
};

const bankAccount = new Account('USA', 'BT');

class Transaction {
  constructor(sender, bank, amount, reference) {
    this.sender = sender;
    this.bank = bank;
    this.amount = amount;
    this.reference = reference;
  };
  get finalSum() {
    return this.amount - 10;
  };
};


const transaction1 = new Transaction('someone', 'BT', '100', 'transfer');
const transaction2 = new Transaction('someone', 'BT', '200', 'transfer');
console.log(transaction1);
console.log(transaction2);

class Table {
  constructor() {
    this.transactions = [];
  };
  addTransaction(...transaction) {
    this.transactions.push(...transaction);
  };
};

const table = new Table();
table.addTransaction(transaction1, transaction2);

console.log(table);