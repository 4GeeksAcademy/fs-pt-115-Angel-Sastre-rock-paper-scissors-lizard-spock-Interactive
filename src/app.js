const choices = ['piedra', 'papel', 'tijera', 'lagarto', 'spok'];

//const choice = prompt("Elige: piedra, papel, tijera, lagarto o spok").toLowerCase();

const reglas = {
    piedra: ['tijera', 'lagarto'],
    papel: ['piedra', 'spok'],
    tijera: ['papel', 'lagarto'],
    lagarto: ['spok', 'papel'],
    spok: ['tijera', 'piedra']
};

const getRandomChoice = () => {
    const index = Math.floor(Math.random() * choices.length);
    return choices[index];
};


const determineWinner = (myChoice, computerChoice) => {
    if (myChoice === computerChoice) {
        return "Empate";
    } else if (reglas[myChoice].includes(computerChoice)) {
        return "¡Has Ganado!";
    } else {
        return "Has perdido... :(";
    }
};

const computerChoice = getRandomChoice();

//const result = determineWinner(choice, computerChoice);

//console.log(`Has elegido: ${choice}`);
console.log(`La computadora eligió: ${computerChoice}`);
//console.log(`Resultado: ${result}`);



const showBtn = document.getElementById('showVideoBtn');
const closeBtn = document.getElementById('closeBtn');
const videoContainer = document.getElementById('videoContainer');

showBtn.addEventListener('click', () => {
    // Insertar un nuevo iframe cada vez
    videoContainer.innerHTML = `
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
    videoContainer.innerHTML = '';
    closeBtn.style.display = 'none';
});