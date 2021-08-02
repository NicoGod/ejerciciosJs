// TODO: define polyfill for `Object.is(..)`
function objectIs(first, second) {
  const fisrtIsNaN = isNaN(first);
  const secondIsNaN = isNaN(second);
  // check ambos valores son NaN (and)
  const checkIsNaN = fisrtIsNaN && secondIsNaN;
  if(first == 0 && second == 0) {
    return equalZeros(first, second);
  }
  else {
    // isNaN comprar directamente con la invocacion y no guardo su valor, es lo mismo.
    // return first === seconds || isNan(first) && isNaN(second)
  // no hace falta el if porque hago un return del Boolean directamente
    return first === second || checkIsNaN;  
  }
//   if(first === second || checkIsNaN){
//     return true;
//   } 
//   else {
//     return false;
//   }
  
} 
function isNaN(value) {
  // retorno el Boolean si el valor es igual a si mismo es un NaN
  return (value == value) === false;
}
function equalZeros(zero1, zero2) {
   return parceZero(zero1) === parceZero(zero2); 
}
// parcear convertir un tipo de dato a otro tipo, este caso de un 0 a INFINITY
function parceZero(zero) {
  return 1 / zero;
}
Object.is = objectIs;

// tests:
console.log(Object.is(42,42) === true);
console.log(Object.is("foo","foo") === true);
console.log(Object.is(false,false) === true);
console.log(Object.is(null,null) === true);
console.log(Object.is(undefined,undefined) === true);
console.log(Object.is(NaN,NaN) === true);
console.log(Object.is(-0,-0) === true);
console.log(Object.is(0,0) === true);

console.log(Object.is(-0,0) === false);
console.log(Object.is(0,-0) === false);
console.log(Object.is(0,NaN) === false);
console.log(Object.is(NaN,0) === false);
console.log(Object.is(42,"42") === false);
console.log(Object.is("42",42) === false);
console.log(Object.is("foo","bar") === false);
console.log(Object.is(false,true) === false);
console.log(Object.is(null,undefined) === false);
console.log(Object.is(undefined,null) === false);