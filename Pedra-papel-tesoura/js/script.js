let player1 = document.getElementById('select_player1');
let player2 = document.getElementById('select_player2');
let msg_win = document.getElementById('msg_win');
const verify_winner = document.getElementById('btn_submit');
let verify_checkbox = document.querySelector('.form-check-input');

setInterval(verify_checked, 500); // Loop - verifica se o checkbox esta checado

verify_winner.addEventListener('click', (e) => {
    let player1_value = player1.value;
    let player2_value = player2.value;
    
    if (player1_value == "Pedra" && player2_value == "Pedra") {
        msg_win.innerText = "Empate!";
    } else if (player1_value == "Pedra" && player2_value == "Papel") {
        msg_win.innerText = "Player 2 venceu!";
    } else if (player1_value == "Pedra" && player2_value == "Tesoura") {
        msg_win.innerText = "Player 1 venceu!";
    } else if (player1_value == "Papel" && player2_value == "Pedra") {
        msg_win.innerText = "Player 1 venceu!";
    } else if (player1_value == "Papel" && player2_value == "Papel") {
        msg_win.innerText = "Empate!";
    } else if (player1_value == "Papel" && player2_value == "Tesoura") {
        msg_win.innerText = "Player 2 venceu!";
    } else if (player1_value == "Tesoura" && player2_value == "Pedra") {
        msg_win.innerText = "Player 2 venceu!";
    } else if (player1_value == "Tesoura" && player2_value == "Papel") {
        msg_win.innerText = "Player 1 venceu!";
    } else if (player1_value == "Tesoura" && player2_value == "Tesoura") {
        msg_win.innerText = "Empate!";
    }
});

function verify_checked() {
    if (verify_checkbox.checked) {
        player1.classList.add('transparent_input');
        player2.classList.add('transparent_input');
    } else {
        player1.classList.remove('transparent_input');
        player2.classList.remove('transparent_input');
    }
}