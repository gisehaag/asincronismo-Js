const getData = require('../utils/getData');
const API = 'https://rickandmortyapi.com/api/character/';

const anotherFunction = async (url_api) => {
	try {
		const data = await getData(url_api);
		const character = await getData(`${API}${data.results[0].id}`);
		const origin = await getData(`${character.origin.url}`);

		console.log(data.info.count);
		console.log(character.name);
		console.log(origin.dimension);


	} catch(error) {
		console.error(error);
	}
}

console.log('before...');
anotherFunction(API);
console.log('...after');


