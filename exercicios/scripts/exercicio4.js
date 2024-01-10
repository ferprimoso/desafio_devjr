// Manipulação do Dom e Eventos do Dom

const input = document.getElementById('input');
const button = document.getElementById('btn');
const resultList = document.getElementById('result-list');
const error = document.getElementById('error');

// eventos para o botão e para caso o usuário aperte enter
button.addEventListener('click', () => listNumbers(input.value));

input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      document.getElementById('btn').click();
    }
});

// Mostre o erro no DOM
const toggleError = (err) => {
    if(err !== '') {
        error.textContent = err
    } else {
        error.textContent = ''
    }
}

// funções de adicionar o resultado no DOM e limpar a lista de resultados
const addResult = (string) => {
    const result = document.createElement('span')
    result.textContent = string
    const lineBreak = document.createElement('br')
    resultList.appendChild(result)
    resultList.appendChild(lineBreak)
}

const clearResult = () => {
    resultList.innerHTML = ''
}

// Logica do programa 

// EXERCICIO 4 - Listar numeros e HELLO WORLD
const listNumbers = (input) => {
    // Limpar os resultados do DOM caso ja esteja preenchido
    clearResult()

    // Retorna caso esteja vazio
    if(input === '') return

   // Retorna mensagem caso o numero for menor ou igual a zero
   if(input <= 0) {
    toggleError('Somente números maior que zero!')
    return
   }

   // limpar o erro do DOM caso o input seja valido
   toggleError()

   // Loop começando em 1 e terminando no numero do input
   for(let i = 1; i <= input; i++) {
    let result = ''

  
    if (i % 3 === 0) {
        result += 'HELLO'
    }

    if (i % 5 === 0) {
        // Caso o result não esteja vazio, isso significa que o numero é divizivel por 3 e ja contem o HELLO nele
        // sendo assim, colocaremos um espaço antes do WORLD para separar as duas palavras
        result === '' ? result += 'WORLD' : result += ' WORLD'
    }

    //Caso o resultado estiver vazio (numero nao divisivel por 3 e/ou 5) retorne i no DOM
    // se não, retorne o resultado no DOM
    result === '' ? addResult(i) : addResult(result)
   }

}