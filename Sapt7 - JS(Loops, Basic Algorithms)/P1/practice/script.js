function number1(value) {
  for (i = 0; i <= value; i++) {
    console.log('Sunt la iteratia nr ' + i);
  }
};
number1(5);

function number2(value) {
  var i = 0;
  while (i < value) {
    console.log('Sunt la iteratia nr ' + i);
    i++;
  }
};
number2(7);

var myArray = ['ana', 'ada', 'ala'];
function someArray(value) {
  for (var key in value) {
    console.log(value[key]);
  }
};
someArray(myArray);

function someArray2(value) {
  for (i = 0; i < value.length; i++) {
    console.log(value[i]);
  }
};
someArray2(myArray);

let house = {
  wall: 'white',
  roof: 'red',
  door: 'brown'
}

function printObjectElements(object) {
  for (var key in object) {
    console.log(object[key]);
  }
};
printObjectElements(house);

function printObjectElements2(object) {
  for (i = 0; i < Object.keys(object).length; i++) {
    console.log(Object.values(object)[i]);
  }
};
printObjectElements2(house)

function iteration1() {
  for (i = 0; i <= 1000; i += 100) {
    console.log(i);
  }
};
iteration1();

function iteration2() {
  for (i = 1; i <= 128; i *= 2) {
    console.log(i);
  }
};
iteration2();

function iteration3() {
  for (i = 0; i <= 10; i += 2) {
    console.log(i);
  }
};
iteration3();

function iteration4() {
  for (i = 3; i <= 15; i += 3) {
    console.log(i);
  }
};
iteration4();

function iteration5() {
  for (i = 9; i >= 0; i--) {
    console.log(i);
  }
};
iteration5();

function iteration6() {
  for (i = 1; i <= 4; i++) {
    for (j = 0; j < 3; j++) {
      console.log(i);
    }
  }
};
iteration6();

function iteration7() {
  for (i = 1; i <= 3; i++) {
    for (j = 0; j <= 4; j++) {
      console.log(j);
    }
  }
};
iteration7();


// conditionalFn = function() {
//    return false; 
// }; 
counter = 10;
conditionalFn = function () {
  counter--;
  return counter >= 0;
};
actionFn = function () {
  console.log("Vreau sa ies la tabla!");
};
function stream(function1, function2) {
  while (function1()) {
    function2();
  }
};
stream(conditionalFn, actionFn);

function computeSumOfArrayElements(value) {
  var sum = 0;
  var i = 0;
  while (i < value.length) {
    var sum = sum + value[i];
    i++;
  }
  console.log(sum);
}
array1 = [1, 2, 3, 4];
computeSumOfArrayElements(array1);

