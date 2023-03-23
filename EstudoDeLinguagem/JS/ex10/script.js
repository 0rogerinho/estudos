function teste(idade, meses, dias) {
  const resultado = idade * 365 + meses * 30 + dias;
  const texto = `você ja viveu ${resultado}`;
  return texto;
}
console.log(teste(30, 6, 5));
