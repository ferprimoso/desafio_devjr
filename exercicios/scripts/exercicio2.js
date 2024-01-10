// Manipulação do Dom e Eventos do Dom

const input = document.getElementById('input');
const button = document.getElementById('btn');
const result = document.getElementById('result');

// eventos para o botão e para caso o usuário aperte enter
button.addEventListener('click', () => getBiggestWord(input.value));

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

// EXERCICIO 2 - Palavra com maior caractere

const getBiggestWord = (string) => {
    
    //Criar uma Array com as palavras separadas
    //utilizamos um regex para não incluir virgulas ou pontos ao separar a frase
    const array = string.split(/[ ,.;:]+/g)

    // Para obter a maior string usarei a função reduce que aceita um callback
    // que será executado em todas as iterações da array

    const result = array.reduce((acc, cur) => {
        // O acumulador foi iniciado como uma string vazia
        // se tamanho do acumulador for menor que da string atual
        // o acumulador se torna a string atual, sendo assim 
        // sempre a maior string será passada para o acumulador
        if (acc.length < cur.length) {
            acc = cur
        }
        return acc
    }, '');

    updateResult(result)
}