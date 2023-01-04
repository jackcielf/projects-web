const verify = document.getElementById('verify');
const number = document.getElementById('input_number');
const color = document.querySelector('.color_result');

verify.addEventListener('click', () => {
    var number_value = number.value;
    if (number_value == "" || number_value == 0 || isNaN(number_value)) {
        alert("Por favor, preencha o campo com um valor válido!")
    } else {
        if (number_value % 2 >= 0.1) {
            color.style.background = "red";
        } else {
            color.style.background = "limegreen";
        }
    }
});