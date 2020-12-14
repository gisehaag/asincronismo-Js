/* Se "guarda" promise en una variable (función) porque no se va a ejecutar hasta que no sea invocada la
función, de otra manera, al cargarse la variable se dispara la promise */

const somethingWillHappen = () => {
	return new Promise((resolve, reject) => {
		if (true) {
			resolve('Se cumplió la promesa');
		} else {
			reject('ups, no se cumplió :(')
		}
	});
};

somethingWillHappen()
	.then(response => console.log(response))
	.catch(err => console.error(err));


const somethingWillHappen2 = () => {
	return new Promise((resolve, reject) => {
		if (true) {
			setTimeout(() => {
				resolve('True :D');
			}, 2000)
		} else {
			const error = new Error ('opps! :/'); //Esta bueno usar new Error para detectar los errores y poder debuggear mejor
			reject(error);
		}
	});
};


somethingWillHappen2()
	.then(response => console.log(response))
	.then(()=> console.log('podes encadenar todos los then que precises con arrow funtion'))
	.catch(err => console.error(err));

// l método .all premite ejecutar todas las promesas y realizar la misma acción cuando se resuelven
Promise.all([somethingWillHappen(), somethingWillHappen2()])
	.then(response => {
		console.log('Array of results: ', response);
	})
	.catch(err => {
		console.error(err);
	})

