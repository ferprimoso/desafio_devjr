// Manipulação do Dom e Eventos do Dom

const input = document.getElementById('input');
const button = document.getElementById('btn');
const result = document.getElementById('result');

// eventos para o botão e para caso o usuário aperte enter
button.addEventListener('click', () => allDigitsSum(input.value));

input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      document.getElementById('btn').click();
    }
});


// Logica do programa 

// EXERCICIO 3 - Retorne a soma de todos os digitos
const allDigitsSum = (string) => {
    let total = 0

    // retorne caso o número seja negativo
    if(parseInt(string) < 0 ) {
        return
    }

    // loop pela string do input
    for(char of string) {
        // antes de somar ao resultado total precisamos converter o char de string para int
        total += parseInt(char)
    }

    // retorne o resultado no DOM
    result.textContent = total
}