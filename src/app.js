
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
    const videoInstructions = document.getElementById('videoInstructions');
    const closeBtn = document.getElementById('closeBtn');

    showBtn.addEventListener('click', () => {
      videoInstructions.style.display = 'block';
      closeBtn.style.display = 'block';
    });

    closeBtn.addEventListener('click', () => {
      videoInstructions.style.display = 'none';
      closeBtn.style.display = 'none';
    });

   
    