export function mayorDeTresNumeros(a, b, c) {
    //  Devuelve el mayor de tres números
    //  Si dos números son iguales, devuelve el mayor de los dos
    // hazme una salida por consola explicando lo que hace la función
    //  y el resultado de la misma
    
    const mayor = Math.max(a, b, c);
    console.log(`La función mayorDeTresNumeros recibe los números ${a}, ${b} y ${c}. Devuelve el mayor de los tres, que en este caso es ${mayor}.`);
    return mayor;
}

// Llamada a la función con ejemplo
//const resultado = mayorDeTresNumeros(5, 10, 7);
//console.log(`Resultado de la función mayorDeTresNumeros(5, 10, 7): ${resultado}`);


export function ceroIfNull(a) {
    // Devuelve 0 si el valor es null, de lo contrario devuelve el valor original
    // hazme una salida por consola explicando lo que hace la función
    // y el resultado de la misma
    
    const resultado = a === null ? 0 : a;
    console.log(`La función ceroIfNull recibe el valor ${a}. Devuelve 0 si el valor es null, de lo contrario devuelve el valor original. En este caso, el resultado es ${resultado}.`);
    return resultado;
}

// Llamada a la función con ejemplo
//const resultadoEjemplo1 = ceroIfNull(null);
//console.log(`Resultado de la función ceroIfNull(null): ${resultadoEjemplo1}`);

export function numerosParesCount(desde, hasta) {
    // Devuelve la cantidad de números pares en el rango desde-hasta (inclusive)
    // hazme una salida por consola explicando lo que hace la función
    // y el resultado de la misma
    
    let count = 0;
    for (let i = desde; i <= hasta; i++) {
        if (i % 2 === 0) {
            count++;
        }
    }
    console.log(`La función numerosParesCount recibe el rango desde ${desde} hasta ${hasta}. Devuelve la cantidad de números pares en ese rango, que en este caso es ${count}.`);
    return count;
}

// Llamada a la función con ejemplo
//const resultadoEjemplo2 = numerosParesCount(1, 10);
//console.log(`Resultado de la función numerosParesCount(1, 10): ${resultadoEjemplo2}`);


export function ifCadenaMasLargaDeN(cadena, n) {
    // Devuelve true si la longitud de la cadena es mayor que n
    // hazme una salida por consola explicando lo que hace la función
    // y el resultado de la misma
    
    const resultado = cadena.length > n;
    console.log(`La función ifCadenaMasLargaDeN recibe la cadena "${cadena}" y el número ${n}. Devuelve true si la longitud de la cadena es mayor que ${n}, en este caso el resultado es ${resultado}.`);
    return resultado;
}

// Llamada a la función con ejemplo
//const resultadoEjemplo3 = ifCadenaMasLargaDeN("Hola Mundo", 5);
//console.log(`Resultado de la función ifCadenaMasLargaDeN("Hola Mundo", 5): ${resultadoEjemplo3}`);

export function trueIfSumaDeTresNumerosIgualN(a, b, c, n) {
    // Devuelve true si la suma de a, b y c es igual a n
    // hazme una salida por consola explicando lo que hace la función
    // y el resultado de la misma
    
    const resultado = (a + b + c) === n;
    console.log(`La función trueIfSumaDeTresNumerosIgualN recibe los números ${a}, ${b}, ${c} y ${n}. Devuelve true si la suma de los tres primeros números es igual al cuarto número. En este caso, el resultado es ${resultado}.`);
    return resultado;
}

// Llamada a la función con ejemplo
//const resultadoEjemplo4 = trueIfSumaDeTresNumerosIgualN(1, 2, 3, 6);
//console.log(`Resultado de la función trueIfSumaDeTresNumerosIgualN(1, 2, 3, 6): ${resultadoEjemplo4}`);

export function importe(cantidad, precio) {
    // Devuelve en céntimos redondeado el producto de cantidad por precio
    // hazme una salida por consola explicando lo que hace la función
    // y el resultado de la misma
    
    // Verificar que cantidad y precio sean números
    if (typeof cantidad !== 'number' || typeof precio !== 'number') {
        throw new Error('Cantidad y precio deben ser números');
    }

    // Verificar que cantidad y precio sean mayores o iguales a cero
    if (cantidad < 0 || precio < 0) {
        throw new Error('Cantidad y precio deben ser mayores o iguales a cero');
    }

    // Calcular el producto
    const producto = cantidad * precio;

    // Convertir a céntimos y redondear
    const centimos = Math.round(producto * 100);

    console.log(`La función importe recibe la cantidad ${cantidad} y el precio ${precio}. Devuelve el producto en céntimos redondeado. En este caso, el resultado es ${centimos}.`);
    return centimos;
}

// Llamada a la función con ejemplo
//const resultadoEjemplo5 = importe(2, 5.75);
//console.log(`Resultado de la función importe(2, 5.75): ${resultadoEjemplo5}`);