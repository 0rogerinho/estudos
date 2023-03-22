// 04 - Crie uma função que recebe um número (de 1 a 12 e retorne o mês correspondente como uma string. Por
//   exemplo, se a entrada for 2, a função deverá retornar "fevereiro", pois este é o 2° mês.

// Maneira 1
/* function stringMes(numeroDoMes) {
  let nomeDoMes;

  switch (numeroDoMes) {
     case 1:
       nomeDoMes = "janeiro";
       break;
     case 2:
       nomeDoMes = "fevereiro";
       break;
     case 3:
       nomeDoMes = "Março";
       break;
     case 4:
       nomeDoMes = "Abril";
       break;
     case 5:
       nomeDoMes = "Maio";
       break;
     case 6:
       nomeDoMes = "Junho";
       break;
     case 7:
       nomeDoMes = "Julho";
       break;
     case 8:
       nomeDoMes = "Agosto";
       break;
     case 9:
       nomeDoMes = "Setembro";
       break;
     case 10:
       nomeDoMes = "Outubro";
       break;
     case 11:
       nomeDoMes = "Novembro";
       break;
     case 12:
       nomeDoMes = "Dezembro";
       break;
     default:
       nomeDoMes = "Mês não existe";
       break;
   }
   return nomeDoMes;
 }
 console.log(stringMes(1)); */

//Maneira 2
function getMonthFromNumber(number) {
  const monthMap = {
    1: "janeiro",
    2: "fevereiro",
    3: "março",
    4: "abril",
    5: "maio",
    6: "junho",
    7: "julho",
    8: "agosto",
    9: "setembro",
    10: "outubro",
    11: "novembro",
    12: "dezembro",
  };
  return monthMap[number];
}
console.log(getMonthFromNumber(2));
