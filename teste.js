/**
 * The function should recive an integer between 1 and 12 (inclusive) and return the corresponding string value. If the informed integger is not between 1 and 12, the function should return 'Unknown Month'
 * Ex: input: 1 - output: "January"
 * Ex: input: 13 - output: "Unknown Month"
 *
 * A função recebe um inteiro entre 1 e 12 e retorna o mês correspondente por extenso. Caso o mês informado não esteja entre 1 e 12, deverá ser retornado "Mes Inexistente"
 * Ex: input: 1 	- output: "Janeiro"
 * Ex: input: 13 	- output: "Mês Desconhecido"
 *
 * @param int $month
 * @return string
 */

function correspondingMonth(month){
    switch(month){
        case 1:
            return "January";
        case 2:
            return "February";
        case 3:
            return "March";                 
        case 4:
            return "April";
        case 5:
            return "May";
        case 6:
            return "June";
        case 7:
            return "July";
        case 8:
            return "August";
        case 9:
            return "September";
        case 10:
            return "October";
        case 11:
            return "November";
        case 12:
            return "December";
        default:
            return "Unknown Month";
        
    }
}

console.log(correspondingMonth(8));
//Agosto
console.log(correspondingMonth(13));
//Mês Desconhecido



/**
 * The function should recive an array with at least 3 itens and return the arithmetic average of all the itens.
 * If the recived array contains less then 3 itens, the function should return the boolean false.
 * Ex: input: [4,6,8] 	- output 6
 * Ex: input: [1,2] 	- output false
 *
 * A função deverá receber um array com pelo menos 3 itens e retornar a média simples de todos os itens do array.
 * Caso o array recebido possua menos que 3 itens, deverá ser retornado o boleano false.
 * Ex: input: [4,6,8] 	- output 6
 * Ex: input: [1,2] 	- output false
 *
 * @param array $notas
 * @return int|bool
 */

function arithmeticAverage(numArray){
    let numItems = numArray.length;
    if(numItems  < 3){
        return false;
    } else {
        let sumItems = 0;
        for (let i = 0; i < numItems; i++){
            sumItems += numArray[i];
        }
        let average = sumItems/numItems;
        return average;
    }
}

console.log(arithmeticAverage([3, 6, 9]));
// 6
console.log(arithmeticAverage([3, 8]));
//false



/**
 * The function should expect an array containing integers greater than zero and return the amount of even values contained in it.
 * Ex: input: [1,2,3,4,5] - output: 2
 *
 * Recebe um array de inteiros maiores que zero e retorna a quantidade de números pares existentes no array
 * Ex: input: [1,2,3,4,5] - output: 2
 *
 * @param array $array
 * @return int
 */

function oddOrEven(numArray){
    let count = 0;
    numArray.forEach((num) => {
        if (num % 2 === 0){
            count++;
        }
    })
    return count;
}

console.log(oddOrEven([2, 3, 4, 5, 8]));
// 3


/**
 * The function should expect a string and return it backwards.
 * Ex: input: "foo" - output: "oof"
 *
 * A função deverá receber uma string e retornar a mesma invertida.
 * Ex: input: "bar" - output: "rab"
 *
 * @param string $string
 * @return string
 */
function reverseString(str){
    let reversed = [];
    for (let i = str.length; i >= 0; i--){
        reversed.push(str[i]);
    }
    return reversed.join('');
}

console.log(reverseString('Javascript'));
// tpircsavaJ



/**
 * The function must replace all the vowels with '?' and return the result string
 * Ex: input: 'Foo' - output: 'F??'
 *
 * A função deverá receber uma string e substituir todas as vogais da mesma pelo sinal '?'
 * Ex: input: 'Bar' - output: 'B?r'
 *
 * @param string $string
 * @return string
 */

function replaceVowels(word){
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let letters = [...word];
    for (let i = 0; i < letters.length; i++){
        if(vowels.includes(letters[i])){
            letters[i] = '?';
        }
    }
    return letters.join('');
}

console.log(replaceVowels('Javascript'));
//J?v?scr?pt



/**
 * The function must expect an array of integers and sort it in ascending order
 * Ex: Input: [5,1,0,7,3,3] - Output: [0,1,3,3,5,7]
 *
 * A função deverá receber um array de inteiros como parâmetro e deverá retornar o mesmo array ordenado em ordem crescente.
 * Ex: Input: [5,1,0,7,3,3] - Output: [0,1,3,3,5,7]
 *
 * @param array $array - Array a ser ordenado
 * @return array
 */

function arraySort(numArray){
    for (let i = numArray.length; i > 0; i--){
        let swap;
        for (let j = 0; j < i - 1; j++){
            if(numArray[j] > numArray[j + 1]){
                let temp = numArray[j];
                numArray[j] = numArray[j + 1];
                numArray[j + 1] = temp;
                swap = false;
            }
        }
        if (swap === true){
            break;
        }
    }
    return numArray;
 
}

console.log(arraySort([1, 6, 7, 3, 9]));
// [1, 3, 6, 7, 9]



/**
 * The function must expect an array of integers and return the first non-repeated value.
 * Ex: input: [2,2,3,1,1,6] - output: 3
 *
 * A função irá receber um array de inteiros e retornar o primeiro elemento não repetido.
 * Ex: input: [2,2,3,1,1,6] - output: 3
 *
 * @param array $array - Array contendo inteiros
 * @return int
 */

function firstNonRepeatedValue(numArray) {
    for(let i = 1; i < numArray.length; i++){
        if (numArray[i] != numArray[i-1] && numArray[i] != numArray[i+1]){
            return numArray[i];
        } else {
            continue;
        }
    }
}

console.log(firstNonRepeatedValue([2,2,3,3,1,1,7,8]));
// 7



/**
 * Your function need to read the file data.dat and return how many lines there are where the number of 0's is a multiple of 3 or the numbers of 1s is a multiple of 2.
 *
 * A função deverá ler o arquivo data.dat e retornar o número de linhas que atende pelo menos uma das condições abaixo:
 * 1 - A quantidade de números zeros na linha é um multiplo de 3
 * 2 - A quantidade de números 1 é um multiplo de 2
 *
 * @return int
 */

import fs from 'fs'
function fileHandler(file){
    let fileData = fs.readFileSync(file, 'utf-8');
    let lines = fileData.split('\n');
    let count = 0;
    for (let line of lines){
        let zeros = 0;
        let ones = 0;
        for (let char of line){
            if (char === '0'){
                zeros++;
            } else if (char === '1'){
                ones++;
            }
        }
        if (zeros % 3 === 0 || ones % 2 === 0){
            count++;
        }
    }
    return count;
}

console.log(fileHandler('data.dat'));
// 6663



/**
 * The function must return the full credit card number. The card number is a multiple of 123457 and the Luhn check digit is valid.
 * The Card Number must have the following pattern: 543210******1234
 *
 * Descubra o número do cartão de crédito abaixo sabendo que o mesmo é um multiplo de 123457 e o digito de luhn é válido.
 * O Número do cartão deve ter o seguinte padrão: 543210******1234
 *
 * @return string
 */

function creditCardNumber() {
    let firstPart = 543210;
    let thirdPart = 1234;
    let secondPart = 123457;
    
    for (let i = 1; i < 1000; i++) {
        var cardNumber = `${firstPart}${secondPart * i}${thirdPart}`;
        var produtos = 0;

        for (let j = 0; j < cardNumber.length; j += 3) {
            var chars = [];
            for (let k = j; k < cardNumber.length; k += 2) {
                let num = parseInt(cardNumber[k]);
                if (!isNaN(num)) {
                    let teste = num * 2;
                    chars.push(teste);
                }
            }

            if (chars.length === 2) {
                if (chars[0] + chars[1] >= 10) {
                    let charset = chars.join('');
                    let count = 0;
                    for (let m = 0; m < charset.length; m++) {
                        count += parseInt(charset[m]);
                    }
                    produtos += count;
                } else {
                    produtos += (chars[0] + chars[1]);
                }
            }
        }

        let soma = 0;

        for (let j = cardNumber.length - 1; j >= 0; j--) {
            let num = parseInt(cardNumber[j]);
            if (j % 2 !== 0) {
                num *= 2;
                if (num > 9) num -= 9;
            }
            soma += num;
        }

        if (soma % 10 === 0) {
            return cardNumber;
        }
    }
    return null;
}

console.log(creditCardNumber());
// 5432103703711234




/**
 * The function should work like an ATM machine. it will recive an integer value representing the amount that will be withdrown and an array containing the avaliable bank notes.
 * Your function will have to return an array informing the minimum amount of bank notes as possible for the withdrown. Consider that the amount of each note are infinity.
 *
 * A função será utilizada em um sistema de caixa.
 * Ela receberá um valor inteiro, representando o valor a ser sacado e um array contendo quais tipos de cédulas ela tem disponível.
 * O array de cédulas disponiveis indica quais valores de cédulas existirão no caixa, a quantidade das mesmas é ilimitada. No caso do input [2,5,50], o caixa terá quantidades ilimitadas de notas de 2, 5 e 50 para devolver ao cliente.
 * A função deverá retornar o mínimo de cédulas necessarias possivel para o saque em formato de um array, cuja chave seja o valor da cédula e o valor a quantidade daquela cédula que será sacada.
 *
 * Ex: input: 150 & [5, 50, 100] 	- output: ["100"=>1, "50"=>1].
 * Ex: input: 150 e [2, 5, 10] 		- output: ["10"=>15].
 *
 * @param int   $valor
 * @param array $cedulas
 *
 * @return array
 */


function atmMachine(amount, notes) {
    let values = notes.sort((a, b) => b - a);
    let result = [];

    for (let i = 0; i < values.length; i++) {
        let count = 0;
        while (amount >= values[i]) {
            amount -= values[i];
            count++;
        }
        if (count > 0) {
            result.push(`${values[i]} => ${count}`);
        }
    }
    return result;
}

console.log(atmMachine(450, [50, 5, 100]));


/**
 * In the context of object orientation, write the diferences between classes, objects, instances and interfaces:
 *
 * Escreva a diferença entre interfaces, instancias, objetos e classes no contexto de orientação a objeto:
 *
 *-----------------------------------------------------------------------------------------------------------------------------/

/** 

Interfaces são tipo contratos que definem quais métodos uma classe precisa ter, mas sem dizer como esses métodos devem ser implementados. 
Já as classes funcionam como moldes para criar objetos, especificando caracteristicas e comportamentos.
Quando um objeto é criado a partir de uma classe, ele é chamado de instância. Ou seja, uma instância é um objeto gerado a partir de uma classe

 * */