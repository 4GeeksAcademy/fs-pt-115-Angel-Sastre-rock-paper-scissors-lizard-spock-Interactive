//write your code here
window.onload = function () {
const choices = ['piedra', 'papel', 'tijera', 'lagarto', 'spok'];

const choice = prompt("Elige: piedra, papel, tijera, lagarto o spok").toLowerCase();

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

const computerChoice = getRandomChoice();


const determineWinner = (myChoice, computerChoice) => {
    if (myChoice === computerChoice) {
        return "Empate";
    } else if (reglas[myChoice].includes(computerChoice)) {
        return "¡Has Ganado!";
    } else {
        return "Has perdido... :(";
    }
};

const result = determineWinner(choice, computerChoice);

console.log(`Tú elegiste: ${choice}`);
console.log(`La computadora eligió: ${computerChoice}`);
console.log(`Resultado: ${result}`);
    



}
   
    