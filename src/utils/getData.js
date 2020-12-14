let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

// Se transforma la expresión que se utilizó en promesas por la del nuevo estádar
const getData = (url_api) => {
	return new Promise((resolve, reject) => {
		const xhttp = new XMLHttpRequest();

		xhttp.open('GET', url_api, true) //el true es un valor por defecto, que indica que se  maneje de manera asincrona
		// https://developer.mozilla.org/es/docs/Web/API/XMLHttpRequest/open

		xhttp.onreadystatechange = (() => {
			//los diferentes estados del método readyState https://www.w3schools.com/xml/ajax_xmlhttprequest_response.asp,
			// el 4 es "request finished and response is ready", mi mismo con el status.. 200 es OK
			if(xhttp.readyState === 4) {

				(xhttp.status === 200) //expresión ternaria para expresar un condicional
					? resolve(JSON.parse(xhttp.responseText)) // método: responseText --> get the response data as a string, y
					// con el JSON.parse, lo transformo en un objeto ya que lo que recibo es un string
					: reject(new Error('Error: ', url_api))

				// Así lo haciamos con callbacks
				// if(xhttp.status === 200) {
				// 	callback(null, JSON.parse(xhttp.responseText)); // método: responseText --> get the response data as a string, y
				// 	con el JSON.parse, lo transformo en un objeto ya que lo que recibo es un string
				// } else {
				// 	const error = new Error('Error' + url_api);
				// 	callback(error, null)
				// }
			}
		});
		xhttp.send(); //aqui se envía la solicitud,
		// Sends the request. If the request is asynchronous (which is the default), this method returns as soon as the request is sent.
		// https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
	});
}

module.exports = getData;

/* Usamos module.exporte porque estamos usando node y todavía utiliza esta sintaxis

Los módulos en JavaScript desde la versión ES6, se utilizan para poder exportar funciones o grupos
de funciones así como objetos, constantes y variables de un archivo .jsa otro. De modo que deberás
 usar la palabra reservada exports para lograrlo; los módulos serán funcionales bajo un ambiente
 de trabajo del lado del servidor con NodeJS.
 */