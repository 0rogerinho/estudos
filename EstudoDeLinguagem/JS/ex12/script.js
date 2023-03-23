function salario(salario, reajuste) {
  const porcentagem = (salario * reajuste) / 100;
  const resultado = salario + porcentagem;
  return resultado;
}
console.log(salario(1300, 20));
