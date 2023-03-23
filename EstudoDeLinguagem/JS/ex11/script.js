function teste(total, vb, vv, vn) {
  pv = (vv * 100) / total;
  pb = (vb * 100) / total;
  pn = (vn * 100) / total;
  const resultado = `votos branco: ${pb}%
  votos validos: ${pv}%
  Votos nulo: ${pn}%`;
  return resultado;
}

console.log(teste(1000, 250, 500, 250));
