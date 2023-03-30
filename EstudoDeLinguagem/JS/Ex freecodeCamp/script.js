// Configuração
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];
/*
function lookUpProfile(name, prop) {
  // Altere apenas o código abaixo desta linha
  let resultado = "";
  contacts.forEach((element) => {
    if (name === element.firstName && element.hasOwnProperty(prop)) {
      resultado = {
        name: element.firstName,
      };
      resultado[prop] = element[prop];
      console.log(element);
    }
    // Altere apenas o código acima desta linha
  });
  console.log(resultado);
  return resultado;
}
console.log(lookUpProfile("Harry", "likes"));
*/
function lookUpProfile(name, prop) {
  resultado = contacts.find((element) => {
    return element.firstName == name;
  });
  const teste = {};
  teste.name = resultado.firstName;
  teste[prop] = resultado[prop];
  return teste;
}
console.log(lookUpProfile("Harry", "likes"));
