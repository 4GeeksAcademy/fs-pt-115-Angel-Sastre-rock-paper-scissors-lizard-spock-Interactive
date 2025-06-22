const choices = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];

const buttons = document.querySelectorAll('button');
const result = document.getElementById('result');
const resultImg = document.getElementById('resultImg');
const showVideoBtn = document.getElementById('showVideoBtn');
const videoInstructions = document.getElementById('videoContainer');
const closeBtn = document.getElementById('closeBtn');

const images = {
    win: 'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmRwbDJoNmVmMTZiOTBwcTdvZjhkeng0ZmdtOGRiNDVmZXBwMmIzNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/pWYReekqQW72U/giphy.gif',
    lose: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcnFjZGVqczduYzEzZmI2OGI4Njl5NDM4czB1bTgwOXhnMTN5bjMyMCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/CV61LRKyQf6P6/giphy.gif',
    draw: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcnFjZGVqczduYzEzZmI2OGI4Njl5NDM4czB1bTgwOXhnMTN5bjMyMCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/5WwQfUDJlh9F6/giphy.gif'
};

const rules = {
    Rock: { winsAgainst: ["Scissors", "Lizard"], message: { Scissors: "Rock crushes Scissors", Lizard: "Rock crushes Lizard" } },
    Paper: { winsAgainst: ["Rock", "Spock"], message: { Rock: "Paper covers Rock", Spock: "Paper disproves Spock" } },
    Scissors: { winsAgainst: ["Paper", "Lizard"], message: { Paper: "Scissors cuts Paper", Lizard: "Scissors decapitates Lizard" } },
    Lizard: { winsAgainst: ["Spock", "Paper"], message: { Spock: "Lizard poisons Spock", Paper: "Lizard eats Paper" } },
    Spock: { winsAgainst: ["Scissors", "Rock"], message: { Scissors: "Spock smashes Scissors", Rock: "Spock vaporizes Rock" } }
};

buttons.forEach(button => {
    button.addEventListener('click', handlePlayerChoice);
});

function handlePlayerChoice(event) {
    const playerChoice = event.target.getAttribute('data-option');
    play(playerChoice);
}

function play(opcionJugador) {
    const opcionMaquina = choices[Math.floor(Math.random() * choices.length)];

    if (opcionJugador === opcionMaquina) {
        result.textContent = `Draw. Both chose ${opcionJugador}.`;
        resultImg.src = images.draw;
        return;
    }

    if (rules[opcionJugador].winsAgainst.includes(opcionMaquina)) {
        const mensaje = rules[opcionJugador].message[opcionMaquina];
        result.textContent = `You won! ${mensaje}.  Sheldon chose ${opcionMaquina}.`;
        resultImg.src = images.win;
    } else {
        const mensaje = rules[opcionMaquina].message[opcionJugador];
        result.textContent = `${mensaje}. Sheldon won. Sheldon chose ${opcionMaquina}.`;
        resultImg.src = images.lose;
    }
}

showVideoBtn.addEventListener('click', () => {
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
    videoInstructions.innerHTML = '';
    closeBtn.style.display = 'none';
});