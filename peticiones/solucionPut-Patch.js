//  Realizamos la primera petición PUT para actualizar completamente un post
const peticionPut = async () => {
    // Realizamos la petición PUT para actualizar completamente el post con ID 3
    const actualizarPut = await fetch(`http://localhost:3000/posts/3`, {
    // Especificamos el método PUT
    method: 'PUT',
    body: JSON.stringify({
        // Nuevos datos del post
        id: "3",
        userId: 3,
        title: "NUEVAS TECNOLOGÍAS",
        body: "Las nuevas tecnologías están transformando el mundo a un ritmo acelerado.",
    }),
    // Especificamos que el contenido es de tipo JSON y la codificación
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
    });
    // Convertimos la respuesta a formato JSON 
    const ejecucion = await actualizarPut.json();
    // Mostramos los datos obtenidos en la consola
    console.log(`----- SOLUCIÓN 6 -----`);
    console.log(ejecucion);
}
// Realizamos la segunda petición PATCH para actualizar parcialmente un post
const peticionPut2 = async () => {
    // Realizamos la petición PATCH para actualizar parcialmente el post con ID 1
    const actualizarPatch = await fetch(`http://localhost:3000/posts/1`, {
    // Especificamos el método PATCH
    method: 'PATCH',
    body: JSON.stringify({
        // Solo actualizamos el título del post
        title: "TECNOLOGÍAS MODERNAS",
    }),
    // Especificamos que el contenido es de tipo JSON y la codificación
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
    });
    // Convertimos la respuesta a formato JSON 
    const ejecucion = await actualizarPatch.json();
    // Mostramos los datos obtenidos en la consola
    console.log(`----- SOLUCIÓN 7 -----`);
    console.log(ejecucion);
}
// Llamamos a las funciones para ejecutar las peticiones
const ejecutarPost = async () => {
    // llamamos a las peticiones POST para ejecutarlas en orden
    await peticionPut();
    await peticionPut2();
}
// Ejecutamos las peticiones POST
ejecutarPost();