const myFn = () => {
const url = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes';
let request = new XMLHttpRequest();
request.open('GET', url);
request.send();

const getQuote = value => {
    let text = document.querySelector('#quote');
     text.textContent = value;
 }
 
 
 request.onload = () => {
     let jsObj = JSON.parse(request.response);
     let quote = Object.values(jsObj)[0];
     console.log(quote)
      getQuote(quote);
 }
};

let btn = document.getElementById('xhr');
btn.addEventListener('click', myFn);


