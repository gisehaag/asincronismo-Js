/* El desafío es el mismo que se trabajó en callbacks pero ahora utilizando promesas */

const getData = require('../utils/getData');
const API = 'https://rickandmortyapi.com/api/character/';

getData(API)
	.then(data => {
		console.log(data.info.count);
		return getData(`${API}${data.results[0].id}`)
	})
	.then(data => {
		console.log(data.name);
		return getData(data.origin.url)
	})
	.then(data => {
		console.log(data.dimension)
	})
	.catch(err => console.error(err));