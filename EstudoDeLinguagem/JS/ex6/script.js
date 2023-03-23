/*Escreva uma função que receba um valor booleano ou numérico. Se o parâmetro fornecido for booleano, o
retorno da função deverá ser o inverso. Por exemplo, se a entrada for false, retornará true. Se o parâmetro for
numérico, o retorno será o número inverso. Por exemplo, se for fornecido 1, o retorno será 1. Se o parâmetro de
entrada não for de nenhum dos tipo acima, retorne "booleano ou número esperados, mas o parâmetro é do tipo ...".

Exemplo: 

inverso(true) // retornará false
inverso("6") // retornará "booleano ou número esperados, mas o parâmetro é do tipo string"*/

function isNumber(p1) {
  if (typeof p1 == "number") {
    return p1 * -1;
  } else if (typeof p1 !== "number" || typeof p1 !== boolean) {
    return (
      "booleano ou número esperados, mas o parâmetro é do tipo " + typeof p1
    );
  }
  return !p1;
}

console.log(isNumber(1));
