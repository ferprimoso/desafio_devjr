// Manipulação do Dom e Eventos do Dom

const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const button = document.getElementById('btn');
const result = document.getElementById('result');

// eventos para o botão e para caso o usuário aperte enter
button.addEventListener('click', () => allDigitsSum(input1.value, input2.value));

input1.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      document.getElementById('btn').click();
    }
});

input2.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      document.getElementById('btn').click();
    }
});

const updateResult = (value) => {
    result.textContent = value
}


// Logica do programa 

// EXERCICIO 7 - Retorne a soma de todos os numeros ENTRE os dois numeros digitados
const allDigitsSum = (num1, num2) => {
    // converter numeros para Int
    num1 = parseInt(num1)
    num2 = parseInt(num2)

    // Retorne zero se o num1 for maior que num2
    if (num1 > num2) {
        updateResult(0)
        return
    }

    let total = 0;
    
    for (num1; num1 <= num2; num1++) {
        total += num1
    }

    updateResult(total);
    return
}