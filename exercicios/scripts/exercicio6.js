// Manipulação do Dom e Eventos do Dom

const input = document.getElementById('input');
const button = document.getElementById('btn');
const result = document.getElementById('result');

// eventos para o botão e para caso o usuário aperte enter
button.addEventListener('click', () => canBePalindrome(input.value));

input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      document.getElementById('btn').click();
    }
});
 
const displayResult = (string) => {
    // para os 3 casos, atualize o dom de formas diferente
    switch (string) {
        case 'yes':
            result.textContent = 'É um palíndromo!'
            result.className = ''
            result.className = 'is-blue'
            break;
        case 'no':
            result.textContent = 'Não é um palíndromo :('
            result.className = ''
            result.className = 'is-red'
            break;
        case 'canBe':
            result.textContent = 'Pode se tornar um palíndromo'
            result.className = ''
            result.className = 'is-purple'
            break;
        default:
            break;
    }
} 


// Logica do programa 

// EXERCICIO 6 - Verificar se é um palindromo ou se pode ser um palindromo se remover uma letra

const canBePalindrome = (string) => {
    // Primeiro devemos remover os espaços em branco da string e colocar tudo em lowercase
    string = string.split(' ').join('').toLowerCase()

    // Depois devemos checar se a string em si ja é um palindromo
    // caso seja podemos atualizar o DOM
    if(isPalindrome(string)) {
        displayResult('yes')
        return
    }

    // Caso não seja palindromo vamos ter que verificar se caso removessemos
    // um caractere a string se tornaria um palindromo
    // para isso vamos fazer um loop por todos os caracteres da string e testar
    // se esse caractere for removido a string é um palíndromo ou não
    for(let i = 0; i < string.length; i++) {
        // String com a parte antes do indice atual, e apos o indice atual
        // sendo assim uma nova string sem o caractere presente no indice 
        let newString = string.substr(0, i) + string.substr(i + 1)

        // Checar se essa string sem o caractere é palindromo
        // caso seja atualizar o DOM com a mensagem de que pode ser um palíndromo
        if(isPalindrome(newString)) {
            displayResult('canBe')
            return
        }
    }

    // Se o chegarmos até aqui significa que a string não é um palindromo 
    // e não pode ser mesmo se for removido um caractere
    displayResult('no')
    return    
}


// Nesse exercicio a função isPalindrome retorna True se for um palindromo ou Falso se não for
const isPalindrome = (string) => {
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

    return isPalindrome
}