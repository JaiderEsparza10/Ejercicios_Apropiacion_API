// Creamos una función asíncrona para realizar las peticiones GET a la API utilizando fetch
const Peticion1Get = async () => {
    // Realizamos la primera petición GET para obtener todos los usuarios
    const usuarios = await fetch(`http://localhost:3000/users`);
    // Convertimos la respuesta a formato JSON
    const datos = await usuarios.json();
    // Mostramos los datos obtenidos en la consola
    console.log(`----- SOLUCIÓN 1 -----`);
    console.log(datos)
}
// Realizamos la segunda petición GET para obtener un usuario específico por su ID
const peticion2Get = async () => {
    // Realizamos la petición GET para obtener el usuario con ID 3
    const usuarioUnico = await fetch(`http://localhost:3000/users/3`);
    // Convertimos la respuesta a formato JSON
    const identificador = await usuarioUnico.json();
    // Mostramos los datos obtenidos en la consola
    console.log(`----- SOLUCIÓN 2 -----`);
    console.log(identificador)
}
// Realizamos la tercera petición GET para obtener un post específico por su ID
const peticion3Get = async () => {
    // Realizamos la petición GET para obtener el post con ID 4
    const usuarioPost = await fetch(`http://localhost:3000/posts/4`);
    // Convertimos la respuesta a formato JSON
    const identificador = await usuarioPost.json();
    // Mostramos los datos obtenidos en la consola
    console.log(`----- SOLUCIÓN 3 -----`);
    console.log(identificador)
}
// Llamamos a las funciones para ejecutar las peticiones
Peticion1Get();
peticion2Get();
peticion3Get();




