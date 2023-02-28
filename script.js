// - [ ]  A soma dos dois números;
// - [ ]  A subtração dos dois números;
// - [ ]  A multiplicação dos dois números;
// - [ ]  A divisão dos dois números;
// - [ ]  O resto da divisão dos dois números;

let num1 = prompt('Digite o primeiro número:')
let num2 = prompt('Digite o segundo número:')
let operation = prompt(
  `Informe a operação a ser feita sendo:
  + ou soma = Soma
  - ou subtração = Subtração
  * ou multiplicação = Multiplicação
  / ou divisão = Divisão
`
)
num1 = Number(num1)
num2 = Number(num2)
let sum = num1 + num2
let sub = num1 - num2
let mult = num1 * num2
let div = num1 / num2
let rest = num1 % num2

let sumEvenOdd = sum % 2 === 0
let subEvenOdd = sub % 2 === 0
let multEvenOdd = sub % 2 === 0
let divEvenOdd = sub % 2 === 0
let restEvenOdd = sub % 2 === 0

let equal = num1 === num2

if (operation === 'soma' || operation === '+') {
  alert(
    `A soma de ${num1} + ${num2} será igual a ${sum}\n${num1} e ${num2} são ${
      equal ? 'iguais' : 'diferentes'
    }\nResultado ${sumEvenOdd ? 'par' : 'ímpar'}. `
  )
} else if (operation === 'subtração' || operation === '-') {
  alert(
    `A subtração de ${num1} - ${num2} será igual a ${sub}\n${num1} e ${num2} são ${
      equal ? 'iguais' : 'diferentes'
    }\nResultado ${subEvenOdd ? 'par' : 'ímpar'}.`
  )
} else if (operation === 'multiplicação' || operation === '*') {
  alert(
    `A multiplicação de ${num1} * ${num2} será igual a ${mult}\n${num1} e ${num2} são ${
      equal ? 'iguais' : 'diferentes'
    }\nResultado ${multEvenOdd ? 'par' : 'ímpar'}.`
  )
} else if (operation === 'divisão' || operation === '/') {
  alert(
    `A divisão de ${num1} / ${num2} será igual a ${div.toFixed(
      2
    )}\n${num1} e ${num2} são ${equal ? 'iguais' : 'diferentes'}\nResultado ${
      divEvenOdd ? 'par' : 'ímpar'
    }.`
  )
} else if (operation === 'resto' || operation === '%') {
  alert(
    `A divisão de ${num1} / ${num2} será igual a ${rest}\n${num1} e ${num2} são ${
      equal ? 'iguais' : 'diferentes'
    }\nResultado ${restEvenOdd ? 'par' : 'ímpar'}.`
  )
} else {
  alert('Operação inválida!')
}

// - [ ] Verifique se a soma dos dois números é par ~~(ou ímpar)~~;
// - [ ] Verifique se os dois números inseridos são iguais ~~(ou diferentes)~~.
