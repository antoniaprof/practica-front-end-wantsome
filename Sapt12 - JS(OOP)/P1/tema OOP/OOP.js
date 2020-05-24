// triunghi.constructor;                 // Triangle(a, b, c)   
// forma.isPrototypeOf(triunghi);        // true
// triunghi.getPerimeter();              // 48
// triunghi.getType();                   // "triunghi"

function Triangle(a,b,c) {
  this.a = a;
  this.b= b;
  this.c =c;
  this.type = 'triunghi';
}

const forma = {
getType: function() {
  return this.type
}
}
Triangle.prototype.forma = forma
Triangle.prototype.constructor = Triangle;

let triunghi = new Triangle (6,6,6)
triunghi.getPerimeter = function () {
 return this.a + this.b + this.c;
}
console.log(triunghi.getPerimeter());
console.log(triunghi.getType());
console.log(forma.isPrototypeOf(triunghi));
