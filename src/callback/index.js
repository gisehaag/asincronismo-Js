function sum(a, b) {
	return (a + b);
}

function calc(a, b, callback) {
	return callback(a, b);
}

console.log(calc(9, 6, sum));

function date(callback) {
	console.log(new Date);
	setTimeout(() => {
		let fecha = new Date;
		callback(fecha);
	}, 3000)
}

function printDate(dateNow) {
	console.log(dateNow);
}

date(printDate);

// Un callback es una función que se envía como parámetro de otra función.

// Para ejecutarla en la función "externa" se hace referencia a ella con la palabra quese haya
// usado para nombrar el parámetro:

// function externalFuncion(callback) {
// 	para que se ejecute --> callback();
// }

// function internalFunction(parámetro) {
// 	bloque a ejecutar
// }

// externalFuncion(internalFunction);
