/* XMLHttpRequest es la forma antigua de hacer llamados a una instancia de una API, como el profesor lo menciona usa ese y no
Fetch que es el actual, por que no conocemos aùn las promesas y fecth es con promesas */

let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
let API = 'https://rickandmortyapi.com/api/character/';

function getData(url_api, callback) {
	let xhttp = new XMLHttpRequest();

	// el método open inicia una nueva petición, hace un llamano a una url
	xhttp.open('GET', url_api, true) //el true es un valor por defecto, que indica que se  maneje de manera asincrona
	// https://developer.mozilla.org/es/docs/Web/API/XMLHttpRequest/open

	xhttp.onreadystatechange = function (event) {
		//los diferentes estados del método readyState https://www.w3schools.com/xml/ajax_xmlhttprequest_response.asp,
		// el 4 es "request finished and response is ready", mi mismo con el status.. 200 es OK
		if(xhttp.readyState === 4) {
			if(xhttp.status === 200) {
				callback(null, JSON.parse(xhttp.responseText)); // método: responseText --> get the response data as a string, y
				// con el JSON.parse, lo transformo en un objeto ya que lo que recibo es un string
			} else {
				const error = new Error('Error' + url_api);
				callback(error, null)
			}
		}
	}
	xhttp.send(); //aqui se envía la solicitud,
	// Sends the request. If the request is asynchronous (which is the default), this method returns as soon as the request is sent.
	// https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
}

getData(API, function (error1, data1){
	if(error1) return console.error(error1);
	//si no da error, quiero llamar al primer personaje, entonces hago API = https://rickandmortyapi.com/api/character/ +
	//lo que me trajo data1, pero solo la propiedad results del primer elemento del array [0] y de eso su id --> "1"
	getData(API + data1.results[0].id, function(error2, data2) {
		if(error2) return console.error(error2);
		getData(data2.origin.url, function(error3, data3) {
			if(error3) return console.error(error3);
			console.log(data1.info.count); //para mostrar todos los personajes
			console.log('El nombre del personaje es:', data2.name); //para que te diga el nombre del personaje que consultaste
			console.log('La dimensión es: ', data3.dimension);
		})
	})

})
