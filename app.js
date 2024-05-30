export function mayorDeTresNumeros(a, b, c) {
  return Math.max(a, b, c);
}
export function ceroIfNull(a) {
  if (a === null) {
    return 0;
  }
  return a;
}

export function numerosParesCount(desde, hasta) {
  let count = 0;
  for (let i = desde; i <= hasta; i++) {
    if (i % 2 === 0) {
      count++;
    }
  }
  return count;
}

export function ifCadenaMasLargaDeN(cadena, n) {
  if (cadena.length > n) {
    return true;
  } else
    return false;

}
export function trueIfSumaDeTresNumerosIgualN(a, b, c, n) {
  if (a + b + c === n) {
    return true;
  } else
    return false;

}
// que devuelva en centimos redondeado
// el producto de cantidad por precio
export function importe(cantidad, precio) {
  console.log(Math.round(cantidad * precio * 100))
  return Math.round(cantidad * precio * 100)
}