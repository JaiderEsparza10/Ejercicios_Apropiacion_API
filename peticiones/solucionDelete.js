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