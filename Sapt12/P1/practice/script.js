  // The Car and the Truck class have similar behavior and properties.
  // Rewrite them in a way such that they share those properties.

  
  function Vehicle (driver) {
    this.driver = driver;
    this.speed = 0;
    this.drive = function(mph) {
      this.speed = mph;
      return this.driver + ' driving at ' + mph + ' miles per hour';
    };
  };

  var Car = new Vehicle('driver');

  var Truck = new Vehicle('driver');


    Truck.loadCargo = function(cargo) {
      this.cargo.push(cargo);
      return this;
    };

    Truck.unloadCargo = function() {
      return this.cargo.pop();
    };

    function Person () {

    };
    
    Person.prototype.initialize = function(name, age) {
        this.name = name;
        this.age = age;
    }
    
    //Creati un obiect numit Trainer care sa fie derivat din obiectul Person si implementati o metoda teach() ce primeste un string numit subject si printeaza
    // [nume trainer] is now teaching [subject]
    
    var Trainer = function (){
    this.teach = function () {
      return this.name + ' is now teaching chemistry';
    }
    }
    Trainer.prototype = new Person()
    let Anto = new Trainer();
    Anto.initialize('Anto', 25)
    
    console.log(Anto.teach())
