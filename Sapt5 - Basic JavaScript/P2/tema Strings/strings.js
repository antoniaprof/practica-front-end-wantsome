function isString(value) {
    return typeof value === 'string';
};
console.log(isString('w3resource'));
console.log(isString([1, 2, 4, 0]));


function isBlank(value) {
    return value === "";
};
console.log(isBlank(''));
console.log(isBlank('abc'));


function stringToArray(value) {
    return value.split(" ");
};
console.log(stringToArray("Robin Singh"));


function abbrevName(name) {
    var fullName = name.split(' ');
    var lastName = fullName[1];
    return fullName[0] + ' ' + lastName[0] + '.';
};
console.log(abbrevName("Robin Singh"));


function capitalize(value) {
    return (value.charAt(0)).toUpperCase() + value.slice(1);
};
console.log(capitalize('js string exercises'));


function truncateString(value, number) {
    return value.slice(0, number);
};
console.log(truncateString("Robin Singh", 4));


function isUpperCaseAt(value, number) {
    return value.charAt(number) === value.charAt(number).toUpperCase();
};
console.log(isUpperCaseAt('Js STRING EXERCISES', 1));


function insert(firstString, secondString, number) {
    return firstString.substr(0, number) + secondString + firstString.substr(number);
};
console.log(insert('We are doing some exercises.', 'JavaScript ', 18));


function removeFirstOccurrence(firstString, secondString) {
    return firstString.replace(secondString, "");
};
console.log(removeFirstOccurrence("The quick brown fox jumps over the lazy dog", 'the'));


function compareStrings(firstString, lastString) {
    return firstString.toLowerCase() === lastString.toLowerCase();
};
console.log(compareStrings('abcd', 'AbcD'));


function Uncapitalize(value) {
    var lowerLetter = (value.charAt(0)).toLowerCase();
    return lowerLetter + value.substr(1);
};
console.log(Uncapitalize('Js string exercises'));