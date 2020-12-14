#Diferencias entre:
[] Callback
[] Promise
[] Async / await

Los callbacks son universales, corren en cualquier navegador, da la garantía que no vamos a tener problemas.
El anidado de elementos hace el codigo muy tedioso y podemos llegar a un callback hell.
Tiene un flujo poco intuitivo.
Su manejo de errores se vuelve tedioso, no se puede manejar bien las excepciones.

Las promesas, es facilmente enlazables, con los '.then', es más facil e intuitivo de leer.
Es poderoso, podemos trabajar con asincronismo.
No maneja excepciones, solo tiene un catch al final. Es propenso a errores si no retornas el siguiente llamado.
Requiere un polyfill para funcionar (para ser transpilados) en todos los navegadores (Babbel).

Utilizando el try y catch, se puede manejar las excepciones.
Resultan más faciles de leer.
Tenemos que esperar por cada uno de los llamados.
Requiere un polyfill para funcionar (para ser transpilados) en todos los navegadores (Babbel).



