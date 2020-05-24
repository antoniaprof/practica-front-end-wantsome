let request = new XMLHttpRequest();
let requestURL = 'https://raw.githubusercontent.com/bahamas10/css-color-names/master/css-color-names.json';
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

let body = document.querySelector('body');
let list = document.createElement('ul');
body.appendChild(list);

const drawSquares = (values) => {
  for (let i = 0; i < values.length; i++) {
    let listItem = document.createElement('li');
    list.appendChild(listItem);
    let square = document.createElement('div');
    listItem.appendChild(square);
    square.setAttribute('class', 'square');
    square.style.backgroundColor = values[i];
  }
}

request.onload = () => {
  let jsObj = request.response;
  let colors = Object.values(jsObj);
  drawSquares(colors);
}
