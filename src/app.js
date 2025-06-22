const opciones = ["Piedra", "Papel", "Tijera", "Lagarto", "Spock"];


const botones = document.querySelectorAll('button');
const resultado = document.getElementById('result');
const resultadoImg = document.getElementById('resultImg');
const showVideoBtn = document.getElementById('showVideoBtn');
const videoInstructions = document.getElementById('videoContainer');
const closeBtn = document.getElementById('closeBtn');

const imagenes = {
    win: 'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmRwbDJoNmVmMTZiOTBwcTdvZjhkeng0ZmdtOGRiNDVmZXBwMmIzNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/pWYReekqQW72U/giphy.gif',
    lose: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcnFjZGVqczduYzEzZmI2OGI4Njl5NDM4czB1bTgwOXhnMTN5bjMyMCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/CV61LRKyQf6P6/giphy.gif',
    draw: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcnFjZGVqczduYzEzZmI2OGI4Njl5NDM4czB1bTgwOXhnMTN5bjMyMCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/5WwQfUDJlh9F6/giphy.gif'
};

const reglas = {
    Piedra: { ganaA: ["Tijera", "Lagarto"], mensaje: { Tijera: "Piedra aplasta tijera", Lagarto: "Piedra aplasta lagarto" } },
    Papel: { ganaA: ["Piedra", "Spock"], mensaje: { Piedra: "Papel envuelve piedra", Spock: "Papel desaprueba a Spock" } },
    Tijera: { ganaA: ["Papel", "Lagarto"], mensaje: { Papel: "Tijera corta papel", Lagarto: "Tijera decapita lagarto" } },
    Lagarto: { ganaA: ["Spock", "Papel"], mensaje: { Spock: "Lagarto envenena a Spock", Papel: "Lagarto come papel" } },
    Spock: { ganaA: ["Tijera", "Piedra"], mensaje: { Tijera: "Spock rompe tijera", Piedra: "Spock vaporiza piedra" } }
};


botones.forEach(boton => {
    boton.addEventListener('click', handlePlayerChoice);
});

function handlePlayerChoice(event) {
    const opcionJugador = event.target.getAttribute('data-option');
    jugar(opcionJugador);
}

function jugar(opcionJugador) {
    
    const opcionMaquina = opciones[Math.floor(Math.random() * opciones.length)];

    if (opcionJugador === opcionMaquina) {
        resultado.textContent = `Empate. Ambos eligieron ${opcionJugador}.`;
        resultadoImg.src = imagenes.draw;
        return;
    }

    if (reglas[opcionJugador].ganaA.includes(opcionMaquina)) {
        const mensaje = reglas[opcionJugador].mensaje[opcionMaquina];
        resultado.textContent = `${mensaje}. ¡Ganaste! Sheldon eligió ${opcionMaquina}.`;
        resultadoImg.src = imagenes.win;
    } else {
        const mensaje = reglas[opcionMaquina].mensaje[opcionJugador];
        resultado.textContent = `${mensaje}. Sheldon ganó. Sheldon eligió ${opcionMaquina}.`;
        resultadoImg.src = imagenes.lose;
    }
}


showVideoBtn.addEventListener('click', () => {
    // Insertar un nuevo iframe cada vez
    videoInstructions.innerHTML = `
        <iframe width="560" height="315"
            src="https://www.youtube.com/embed/_PUEoDYpUyQ?autoplay=1"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen>
        </iframe>
    `;
    closeBtn.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    // Eliminar el iframe completamente para detener el video
    videoInstructions.innerHTML = '';
    closeBtn.style.display = 'none';
});