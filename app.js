let amigos = []; // Aquí guardamos los nombres de las personas

function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim(); // Eliminar espacios en blanco al inicio y al final

    if (nombre === "") {
        alert("Por favor escribe un nombre válido");
        return;
    }

    amigos.push(nombre); // Guardamos el nombre en el array
    console.log(amigos); // Imprimimos la lista completa para verificar el funcionamiento correcto

    mostarLista();

    input.value = ""; // Limpiar el campo después de añadir
}

function mostarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar la lista antes de mostrar

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }   
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay nombres para sortear");
        return;
    }

    // Elegir un índice aleatorio
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];

    // Limpiar la lista de arriba (los nombres añadidos)
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    // Mostrar el resultado
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; // limpiar resultado anterior

    let li = document.createElement("li");
    li.textContent = "🎉 El amigo secreto es: " + amigoSorteado;
    resultado.appendChild(li);
}


