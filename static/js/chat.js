const socket = io();

const USUARIO = "{{ usuario }}";
const TIPO = "{{ tipo }}".toLowerCase();

console.log("DEBUG Cliente: USUARIO=" + USUARIO + ", TIPO=" + TIPO);

function enviar() {
    const input = document.getElementById("mensaje");
    const texto = input.value.trim();

    if (!texto) return;

    console.log("Enviando mensaje con tipo:", TIPO);

    socket.emit("mensaje", {
        texto: texto,
        usuario: USUARIO,
        tipo: TIPO
    });

    input.value = "";
}

function scrollAlFinal() {
    const chatContainer = document.getElementById("lista-mensajes");
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

socket.on("nuevo_mensaje", function (data) {
    const p = document.createElement("p");
    p.className = "texto-mensaje";
    p.innerHTML = `<strong>${data.usuario} (${data.tipo}):</strong> ${data.texto}`;
    document.getElementById("lista-mensajes").appendChild(p);

    // Scroll automático al final
    scrollAlFinal();
});

// Scroll inicial al cargar la página
window.addEventListener('load', scrollAlFinal);