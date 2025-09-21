// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nombre = inputAmigo.value.trim();
    
    // Validar que el nombre no esté vacío
    if (nombre === '') {
        alert('¡Error! Por favor ingresa un nombre válido.');
        return;
    }
    
    // Agregar el nombre al array
    amigos.push(nombre);
    
    // Limpiar el input
    inputAmigo.value = '';
    
    // Actualizar la visualización de la lista
    actualizarListaAmigos();
}

// Función para actualizar la visualización de la lista de amigos
function actualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';
    
    // Crear elementos de lista para cada amigo
    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

// Función para refrescar la lista (nuevo botón)
function refrescarLista() {
    // Limpiar el array de amigos
    amigos = [];
    
    // Actualizar la visualización
    actualizarListaAmigos();
    
    // Limpiar el resultado del sorteo si existe
    document.getElementById('resultado').textContent = '';
    
    // Mensaje de confirmación
    alert('Lista refrescada. Puedes comenzar a agregar nuevos nombres.');
}

// Función para sortear un amigo
function sortearAmigo() {
    // Validar que haya amigos en la lista
    if (amigos.length === 0) {
        alert('¡Error! No hay amigos en la lista. Agrega al menos un nombre.');
        return;
    }
    
    // Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    
    // Obtener el amigo sorteado
    const amigoSorteado = amigos[indiceAleatorio];
    
    // Mostrar el resultado
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.textContent = `¡El amigo secreto es: ${amigoSorteado}!`;
    
    // Opcional: remover el amigo sorteado de la lista
    // amigos.splice(indiceAleatorio, 1);
    // actualizarListaAmigos();
}

// Función para manejar la tecla Enter en el input
document.addEventListener('DOMContentLoaded', function() {
    const inputAmigo = document.getElementById('amigo');
    
    inputAmigo.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            agregarAmigo();
        }
    });
});