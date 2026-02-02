// Función para realizar una petición DELETE a un recurso específico
const peticionDelete = async (id) => {
    // Realizamos la petición DELETE para eliminar el post con el ID proporcionado
    fetch(`http://localhost:3000/posts/${id}`, {
    // Especificamos el método DELETE
    method: 'DELETE',
});
}
// Llamamos a la función para ejecutar la petición DELETE
peticionDelete(3);
// Función para verificar que el recurso ha sido eliminado realizando una petición GET
const ModificacionesComparadas = async () => {
    // Realizamos una petición GET para obtener todos los posts y verificar la eliminación
    const respuesta = await fetch('http://localhost:3000/posts', {
        method: 'GET'
    });
    // Convertimos la respuesta a formato JSON
    const data = await respuesta.json();
    // Retornamos los valores
    return data;  
}
// Llamamos a la función para ejecutar la verificación
ModificacionesComparadas().then(data => {
    // Mostramos los datos obtenidos en la consola
    console.log(data);
});