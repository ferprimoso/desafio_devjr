// Manipulação do Dom e Eventos do Dom

const input = document.getElementById('input');
const button = document.getElementById('btn');
const result = document.getElementById('result');

// eventos para o botão e para caso o usuário aperte enter
button.addEventListener('click', () => removeAllVowels(input.value));

input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      document.getElementById('btn').click();
    }
});

const updateResult = (value) => {
    result.textContent = value
}

// Logica do programa 

// EXERCICIO 1 - Remover todas as vogais

// criar um set de todas as possiveis vogais e suas pontuações na lingua portuguesa
const vowelsSet = new Set(['a','á','â','à','ã','e','é','ê','i','í','î','o','ó','ô','õ','u','ú','û']);

const removeAllVowels = (string) => {
// loop por todas as letras da string e verificar se inclue no set de vogais
    let newString = '';

    for(char of string) {
        // caso não seja vogal adicione na nova string
        if (!vowelsSet.has(char.toLowerCase())) {
            newString += char;
        }
    }

    // Colocar o resultado no DOM
    updateResult(newString)
}