// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Array para almacenar los nombres de los amigos
let listaAmigos = [];

// Función para agregar amigos a la lista
function agregarAmigo() {
    // Capturar el valor del campo de entrada
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim();

    // Validar la entrada
    if (nombreAmigo === '') {
        alert('Por favor, inserte un nombre.');
        return;
    }

    // Actualizar el array de amigos
    listaAmigos.push(nombreAmigo);

    // Limpiar el campo de entrada
    inputAmigo.value = '';

    // Actualizar la lista visual en el DOM
    actualizarListaAmigos();
    
    console.log('Amigo agregado:', nombreAmigo);
    console.log('Lista actual:', listaAmigos);
}

// Función auxiliar para actualizar la lista visual en la página
function actualizarListaAmigos() {
    const listaAmigosElement = document.getElementById('listaAmigos');
    
    // Limpiar la lista actual
    listaAmigosElement.innerHTML = '';
    
    // Agregar cada amigo como un elemento de lista
    listaAmigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.textContent = `${index + 1}. ${amigo}`;
        li.className = 'name-item';
        listaAmigosElement.appendChild(li);
    });
}

// Función para sortear amigo
function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert('Por favor, agregue al menos un amigo antes de sortear.');
        return;
    }
    
    // Seleccionar un amigo aleatorio
    const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    const amigoSorteado = listaAmigos[indiceAleatorio];
    
    // Mostrar el resultado
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = `<li class="result-item">🎉 ¡El amigo secreto es: <strong>${amigoSorteado}</strong>! 🎉</li>`;
    
    console.log('Amigo sorteado:', amigoSorteado);
}

// Event listener para permitir agregar con Enter
document.addEventListener('DOMContentLoaded', function() {
    const inputAmigo = document.getElementById('amigo');
    
    inputAmigo.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            agregarAmigo();
        }
    });
});