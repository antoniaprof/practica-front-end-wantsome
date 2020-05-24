//1
//adaugati un tag script si adaugati urmatoarele functii
// sqrNum, halfNum, percentNum si areaCircle

//2 pentru fiecare button aveti de adaugat un event listner
// care atunci cand este clickuit sa gaseasca valoarea inputului
// si sa afiseze rezultatul solutiei

//3
// Bonus: faceti sa functioneze si la key press pe langa click


const sqrtNum = () => {
let value = document.querySelector('#square').value;
console.log(value)
alert(value*value);
};
let sqrBtn = document.querySelector('#sqr-btn');
sqrBtn.addEventListener('click', sqrtNum);
document.querySelector('#square').addEventListener('keyup', sqrtNum)


const halfNum = () => {
    let value = document.querySelector('#half').value;
    alert(value/2);
};
let halfBtn= document.querySelector('#half-btn');
halfBtn.addEventListener('click', halfNum);
document.querySelector('#half').addEventListener('keyup', halfNum)

const percentNum = () => {
    let value1 = document.querySelector('#percent1').value;
    let value2 = document.querySelector('#percent2').value;
    alert(`${value1*100/value2}%`);
};
let prcBtn = document.querySelector('#prc-btn');
prcBtn.addEventListener('click', percentNum);
document.querySelector('#percent2').addEventListener('keyup', percentNum)


const areaCircle = () => {
    let value = document.querySelector('#area').value;
    alert(Math.PI*value*value);
};
let areaBtn = document.querySelector('#area-btn');
areaBtn.addEventListener('click', areaCircle);
document.querySelector('#area').addEventListener('keyup', areaCircle)
