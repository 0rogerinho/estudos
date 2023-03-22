/* 05 - Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo. Deverá diferenciar
números de strings.

Exemplo:

maiorOuIgual(0, 0) // retornará true
maiorOuIgual(0, "0") //retornará false */

function number(num1, num2) {
  maiorOuIgual = "";
  if (typeof num1 === "number" && typeof num2 === "number") {
    if (num1 > num2) {
      maiorOuIgual = `${num1} é maior que ${num2}`;
    } else if (num1 < num2) {
      maiorOuIgual = `${num1} é menor que ${num2}`;
    } else if (num1 === num2) {
      maiorOuIgual = `${num1} é  igual a ${num2}`;
    }
  } else {
    maiorOuIgual = "Isso não é um numero";
  }
  return maiorOuIgual;
}
console.log(number(3, 2));
