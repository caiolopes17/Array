/**
 * Estrutura de dados array
 * @author Caio Lopes
 */

//                 [0]      [1]      [2]      [3]      [4]
let alunosEM1 = ["Tania", "Pedro", "Maria", "Joao", "Viviane"]

console.clear()

console.log(typeof(alunosEM1))


// O comando abaixo exibe os elementos do vetor
console.log(alunosEM1)

// O comando abaixo identifica o número de elementos de um vetor
console.log(alunosEM1.length)

// O comando abaixo exibe o índice do array associado ao elemento
console.table(alunosEM1)

// O comando abaixo exibe o elemento do índice selecionado
console.log(alunosEM1[2])

// O comando abaixo adiciona um elemento ao vetor
alunosEM1.push("Jorge")

// O comando abaixo exibe os elementos do vetor
console.table(alunosEM1)

// Para alterar um elemento do vetor, é necessário usar o índice
alunosEM1[3] = "Joaozinho"

// O comando abaixo exibe os elementos do vetor
console.table(alunosEM1)

// O comando abaixo remove o último elemento do vetor
alunosEM1.pop()

// O comando abaixo exibe os elementos do vetor
console.table(alunosEM1)

// Removendo um elemento específico sem alterar o índice, neste caso é necessário fornecer o índice a ser excluído
delete alunosEM1[1]

// O comando abaixo exibe os elementos do vetor
console.table(alunosEM1)

// ==================================================================================================================
console.clear()

// Percorrendo um vetor de notas
let notas = [3,8, 5, 9, 2]
console.log(notas)
console.table(notas)

// Laço For
for (let i= 0; i < notas.length; i++) {
    console.log(notas[i])
}

// laço forEach (simplificação do for exclusivo para percorrrer o vetor)
notas.forEach((n) => {
    console.log(n)
})

// Mapeamento map() (forEach + alteração do vetor)
// Exemplo 1: Adicionar 1 ponto a cada nota
let notasAtualizadas = notas.map((na) => {
    return (na+1)
})
console.log(notas)
console.log(notasAtualizadas)

//Exemplo 2: Conversão de sistema de pontos para letras
/*
SENAC:
NA: Não Atendeu (nota <5)
PA: PArcialmente Atendido (nota entre 5 e 7)
 A: Atendeu (nota > 7)
*/

let notasConvertidas = notas.map((nc) => {
    if (nc < 5) {
        return("NA")
    } else if (nc > 7) {
        return("A")
    } else {
        return("PA")
    }
})

console.log(notas)
console.log(notasConvertidas)