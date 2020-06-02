function fetchJSON() {
fetch('https://raw.githubusercontent.com/antoniaprof/practica-front-end-wantsome/dbd19f831a65c5c4e8007db38e20c4f01c67c53e/Sapt13%20-%20JS(Promises%2C%20APIs%2C%20Fetch%2C%20Browser%20Storage)/P2/tema/Ex1/world.json')
.then(response => response.json())
.then(data => console.log(data))
}
