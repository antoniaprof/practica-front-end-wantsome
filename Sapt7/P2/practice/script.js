function protectEmail(email) {

    console.log(email.slice(0, 4) + ' ... ' + email.slice(-10));
}
console.log(protectEmail('antonia.profi@yahoo.com'));

// function capitalize (value) {
//     var word = value.split(' ');
//     var letter = value.charAt(0)
//     console.log(word);
//     console.log( letter.toUpperCase());
//     for (i=0; i<word.length; i++) {
//       word[i] = word[i].toUpperCase + word[i].slice(1);
//     }

//   };
//   capitalize('i am superman');

function wordSwitch(value) {
    var myArray = value.split('');
    var i = 0;
    while (i < myArray.length) {
        if (myArray[i] === myArray[i].toUpperCase()) {
            myArray[i] = myArray[i].toLowerCase();
        } else {
            myArray[i] = myArray[i].toUpperCase();
        };
        i++;
    };
    return myArray.join('');

};
console.log(wordSwitch('DGGDGDssddDjdkdjkjlkfhsjhdDSDTYGUKGJKGJKHUGjghjghg'));

function concatStrings(value, number) {
    var string = '';
   for (var i = 0; i < number; i++) {
      string=string.concat(value);
    }
    return string;
  }
  
  console.log(concatStrings('Wantsome', 6))

  function palindrome (value) {
    var checkPalindrome = value.split('');
    if (checkPalindrome.reverse().join('') === value) {
      return value + ' is palindrome!';
    } //else nu are sens
      return value + " isn't a  palindrome"; 
  };
  console.log(palindrome('ana'));

  