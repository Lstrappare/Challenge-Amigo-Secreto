// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Lista de amigos secretos
let amigos = [];

// Contenedor de la lista de amigos secretos
const contenedorAmigos = document.getElementById("listaAmigos");

// Contenedor del resultado del sorteo del amigo secreto seleccionado
const contenedorResultado = document.getElementById("resultado");

function agregarAmigo() {
  // Obtiene el valor del campo de entrada con el nombre del amigo secreto
  const nombreAmigoSecreto = document.getElementById("amigo").value.trim();
  // Válida que el input no esté vacío
  if (nombreAmigoSecreto === "") {
    // Mensaje de alerta si el campo está vacío
    alert("Por favor, ingresa un nombre válido.");
    return;
  } else if (amigos.map(a => a.toLowerCase()).includes(nombreAmigoSecreto.toLowerCase())) {
    // Mensaje de alerta si el nombre ya existe en la lista
    alert("El nombre ya existe. Por favor, ingresa un nombre diferente.");
    return;
  }

  // Agrega el nombre del amigo secreto a la lista de amigos
  amigos.push(nombreAmigoSecreto);

  // Colocar el nombre del amigo secreto en el DOM
  const li = document.createElement("li");
  li.textContent = nombreAmigoSecreto;
  contenedorAmigos.appendChild(li);

  // Limpiar input
  nombreAmigoSecreto.value = "";
}

function sortearAmigo() {
  if (amigos.length <= 0) {
    alert("No hay amigos secretos para sortear.");
    return;
  }
  // Elegir un amigo secreto al azar de la lista de amigos
  const indiceAleatorio = Math.floor(Math.random() * amigos.length);
  const amigoSeleccionado = amigos[indiceAleatorio];

  if (contenedorResultado.firstChild) {
    contenedorResultado.removeChild(contenedorResultado.firstChild);
  }
  // Mostrar el nombre del amigo secreto seleccionado en el DOM
  const li = document.createElement("li");
  li.textContent = amigoSeleccionado;
  contenedorResultado.appendChild(li);
}
