function is_string(value) {
    return typeof value === 'string';
}
console.log(is_string('w3resource'));
console.log(is_string([1, 2, 4, 0]));

function is_Blank(value) {
    return value === "";
}
console.log(is_Blank(''));
console.log(is_Blank('abc'));

function string_to_array(value) {
    return value.split(" ");
}
console.log(string_to_array("Robin Singh"));

/*function abbrev_name(name) {
    var nameIndex = name.indexOf(" ");
    var LastName = name.substr(nameIndex);
    var firstLetter = LastName.charAt(1);
    var lastNameAbbrev = LastName.replace(LastName, firstLetter + ".");
    var firstName = name.substr(0, nameIndex);
    return firstName + " " + lastNameAbbrev;
}
console.log(abbrev_name("Robin Singh")); */

function abbrev_name(name) {
    var fullName = name.split(' ');
    var lastName = fullName[1];
    return fullName[0] + ' ' + lastName[0] + '.';
   }
   
console.log(abbrev_name("Robin Singh"));

function capitalize(value) {
    return (value.charAt(0)).toUpperCase();
}
console.log(capitalize('js string exercises'));

function truncate_string(value, number) {
    return value.slice(0, number);
}
console.log(truncate_string("Robin Singh", 4));

function isUpperCaseAt(value, number) {
    return value.charAt(number) === value.charAt(number).toUpperCase();
}
console.log(isUpperCaseAt('Js STRING EXERCISES', 1));

function insert(firstString, secondString, number) {
    return firstString.substr(0, number) + secondString + firstString.substr(number);
}
console.log(insert('We are doing some exercises.', 'JavaScript ', 18));

function remove_first_occurrence(firstString, secondString) {
    return firstString.replace(secondString, "");
}
console.log(remove_first_occurrence("The quick brown fox jumps over the lazy dog", 'the'));

function compare_strings(firstString, lastString) {
    return firstString.toLowerCase() === lastString.toLowerCase();
}
console.log(compare_strings('abcd', 'AbcD'));

function Uncapitalize(value) {
    var lowerLetter = (value.charAt(0)).toLowerCase();
    return lowerLetter + value.substr(1);
}
console.log(Uncapitalize('Js string exercises'));