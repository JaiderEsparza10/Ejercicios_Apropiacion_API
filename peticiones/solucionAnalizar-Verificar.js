// Función para realizar una petición GET a un recurso específico
const peticion10Get = async () => {
    console.log(`----- SOLUCIÓN 9 -----`);
    // Realizamos la petición GET para obtener el post con ID 1
    const recursoEliminado = await fetch(`http://localhost:3000/posts/1`);
    // Convertimos la respuesta a formato JSON
    const datos = await recursoEliminado.json();
    // Mostramos los datos obtenidos en la consola
    console.log(datos);
}
// Llamamos a la función para ejecutar la petición GET
peticion10Get();

