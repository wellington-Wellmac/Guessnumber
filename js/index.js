const form = document.getElementById('form')
form.addEventListener('submit', handleSubmit);

let status = document.getElementById('status');
let attempt = document.getElementById('attempt');
let result = document.getElementById('result');

const Guess = {
   max: 10,
   attemptNumber: 0,
   numberDrawn: function randomValue() {
       return Math.round(Math.round() * this.max);
   }
};

let numberDrawn = Guess.numberDrawn();

function updateAttempt(attempt, value){
    attempt.innerHTML = 'Tentativa: ' + value
};

function handleSubmit (e) {
    e.preventDeFault();

    let kick = document.getElementById('kick').value;

    if(!kick){
        alert('Digite algum valor!')
        return;  

    };

    updateAttempt(attempt, ++Guess.attemptNumber);

    if(numberDrawn == kick) {
        playAgain();
        status.innerHTML = 'Parabéns, você acertou!';
        result.style.transition = '0.4s';
        result.style.backgroundColor = '#37c978';
        result.style.color = '#fff';
        style.style.color = '#fff';
        clear();
    } else if(numberDrawn > kick) {
        status.innerHTML = 'O número é maior!';
        status.style.color = '#de4251';
        clear();
    } else if(numberDrawn < kick) {
        status.innerHTML = 'O número é menor!';
        status.style.color = '#de4251';
        clear();
    };
};

function playAgain(){
    document.getElementById('btnRestart').style.display='flex';
};

function restart(){
    document.location.reload(true)
}
function clear(){
    document.getElementById('kick').value = '';
};