// Manipulação do Dom e Eventos do Dom

const input = document.getElementById('input');
const button = document.getElementById('btn');
const result = document.getElementById('result');

// eventos para o botão e para caso o usuário aperte enter
button.addEventListener('click', () => isPalindrome(input.value));

input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      document.getElementById('btn').click();
    }
});
// 
const displayResult = (bool) => {
    if (bool === true) {
        result.textContent = 'É um palíndromo!'
        result.className = ''
        result.className = 'is-blue'
    } else {
        result.textContent = 'Não é um palíndromo :('
        result.className = ''
        result.className = 'is-red'
    }
} 


// Logica do programa 

// EXERCICIO 5 - Verificar se é um palindromo
const isPalindrome = (string) => {
    // Primeiro devemos remover os espaços em branco da string e colocar tudo em lowercase
    string = string.split(' ').join('').toLowerCase()

    let isPalindrome = true

    // Inicializar dois ponteiros, um no primeiro caractere e outro no ultimo 
    let leftPointer = 0
    let rightPointer = string.length - 1

    // checa os caracteres enquanto os dois ponteiros não se encostarem no meio da string
    while(leftPointer < rightPointer) {
        // checa se o caractere é diferente, se sim, a string não é um palindromo
        if (string[leftPointer] !== string[rightPointer]) {
            isPalindrome = false
            break
        }

        // caso seja igual movemos o ponteiro para dentro left++ e right--
        leftPointer++   
        rightPointer--
    }

    // Mostre o resultado no DOM
    isPalindrome === true ? displayResult(true) : displayResult(false)
}