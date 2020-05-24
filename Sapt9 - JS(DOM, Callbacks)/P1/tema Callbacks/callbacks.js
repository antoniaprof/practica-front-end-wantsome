function myMap(array, callback) {
    let result = [];
    for (var index in array) {
        result.push(callback(array[index]));
    }
    return result;
}

var randomArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const increment = value => value + 1;

const double = value => value * 2;

const square = value => value * value;

console.log(myMap(randomArray, increment));  // Implement the function named print so that thos console.log would display the result [ 2, 3, 4, 5, 6, 7, 8, 9, 10 ] in the console
console.log(myMap(randomArray, double));  // Implement the function named double so that thos console.log would display the result [ 2, 4, 6, 8, 10, 12, 14, 16, 18 ]
console.log(myMap(randomArray, square));  // Implement the function named square so that thos console.log would display the result [ 1, 4, 9, 16, 25, 36, 49, 64, 81 ]


// This function will go over every element in an array one by one, calling the
// callback with each item, adding the element to a new array only if
// the callback returns true, and finally returning the new array.
// Call the filter function in 5 different cases ( 5 different filtering functions
// - example: filters the odd items, filter the items which are divisible by 3, etc... )

// var filter = function (array, condition) {
//     var filteredArray = [];
//     for (var i = 0; i < array.length; i++) {
//         var item = array[i];
//         if (condition(array[i]) === true) {
//             filteredArray.push(item);
//         }
//     }
//     return filteredArray;
// };

// function evenElements(param) {
//     return param % 2 === 0;
// }

// function unevenElements(param) {
//     return param % 2 === 1;
// }

// function bigElements(param) {
//     return param > 100;
// }

// function smallElements(param) {
//     return param < 10;
// }

// function divBy5Elements(param) {
//     return param % 5 === 0;
// }

const filter = (array, callback) => {
    let filteredArray = [];
    for (let i = 0; i < array.length; i++) {
        let item = array[i];
        if (callback(array[i]) === true) {
            filteredArray.push(item);
        }
    }
    return filteredArray;
};

const evenElements = param => param % 2 === 0;

const unevenElements = param => param % 2 === 1;

const biggerThan100Elements = param => param > 100;

const smallerThan10Elements = param => param < 10;

const divBy5Elements = param => param % 5 === 0;

console.log(filter([0, 2, 3, 4, 5, 40, 89, 120, 594], evenElements));
console.log(filter([0, 2, 3, 4, 5, 40, 89, 120, 594], unevenElements));
console.log(filter([0, 2, 3, 4, 5, 40, 89, 120, 594], biggerThan100Elements));
console.log(filter([0, 2, 3, 4, 5, 40, 89, 120, 594], smallerThan10Elements));
console.log(filter([0, 2, 3, 4, 5, 40, 89, 120, 594], divBy5Elements));



// Write a function named multipleCallbacks that accepts 3 arguments:
// 	- an object containing a key name status that can have 2 different values: success or error
//   - a function that should be called if the value of the status key is success
//   - a function that should be called if the value of the status key is error

const multipleCallbacks = (object, succesFn, errorFn) => {
    if (object.status === 'error') {
        errorFn();
    } else if (object.status === 'succes') {
        succesFn();
    };
};

multipleCallbacks({ status: 'succes' },
    () => {
        console.log('Yay, you made it! :D')
    },
    () => {
        console.log('Ups, error!')
    });

