// SOLUCIÓN 4 y 5 - Realizar peticiones POST a una API REST utilizando fetch
const peticion1Post = async () => {
    // Realizamos la petición POST para crear un nuevo post
    const publicaciones = await fetch(`http://localhost:3000/posts`, {
    method: 'POST',
    body: JSON.stringify({
        // Datos del nuevo post
        id: 2,
        userId: 2,
        title: 'Romeo y Julieta',
        body: 'Es una historia de amor trágica escrita por William Shakespeare',
    }),
    // Especificamos que el contenido es de tipo JSON y la codificación
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
    })
    // Convertimos la respuesta a formato JSON
    const ejecucion = await publicaciones.json();
    // Mostramos los datos obtenidos en la consola
    console.log(`----- SOLUCIÓN 4 -----`);
    console.log(ejecucion);
}
// Realizamos la segunda petición POST para crear un nuevo comentario
const peticion2Post = async () => {
    // Realizamos la petición POST para crear un nuevo comentario
    const comentario = await fetch(`http://localhost:3000/comments`, {
    method: 'POST',
    body: JSON.stringify({
        // Datos del nuevo comentario
        id : 3,
        userId: 3,
        name: 'María Pérez',
        body: 'Excelente artículo, muy informativo.',
    }),
    // Especificamos que el contenido es de tipo JSON y la codificación
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
    })
    // Convertimos la respuesta a formato JSON 
    const ejecucion = await comentario.json();
    // Mostramos los datos obtenidos en la consola
    console.log(`----- SOLUCIÓN 5 -----`);
    console.log(ejecucion);

}
// Llamamos a las funciones para ejecutar las peticiones
const ejecutarPost = async () => {
    // llamamos a las peticiones POST para ejecutarlas en orden
    await peticion1Post();
    await peticion2Post();
}
// Ejecutamos las peticiones POST
ejecutarPost();