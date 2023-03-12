/*const inputs = document.querySelectorAll("[type='radio']");
let image = document.querySelector(".img");
function clickInput(lt) {
  image.style.backgroundImage = `url('${lt.target.id}.jpg')`;
}
inputs.forEach((elemento) => {
  elemento.addEventListener("click", clickInput);
});*/

const houses = [
  {
    id: 2,
    color: "pink",
  },
  {
    id: 3,
    color: "orange",
  },
  {
    id: 4,
    color: "black",
  },
];

const people = [
  {
    name: "Joares",
    houseColor: "orange",
  },
  {
    name: "João",
    houseColor: "pink",
  },
  {
    name: "José",
    houseColor: "orange",
  },
];

// Retornar a seguinte mensagem

// Para transformar uma array em string pode-se utilizar o [].join("aqui é o selector, podendo ser ',', ou qualquer palavra, ou espaço")

let message = "";

houses.map((house) => {
  house.name = `${house.color} - teste`;

  return house;
});

console.log(houses);

houses.forEach((e) => {});

console.log(message);

// Nesta rua há 3 casas, na casa pink vive o João, na casa orange vive o José e Joares, na ultima casa não vive ninguem

const inputs = document.querySelectorAll('input[type="radio"]'); // Selectiona todos os inputs do tipo radio
let imageContainer = document.querySelector(".img");
let images = [
  {
    id: "red",
    src: "red.jpg",
  },
  {
    id: "pink",
    src: "pink.jpg",
  },
];

inputs.forEach((input) => {
  // Fazer um loop para cada elemento input
  const { id } = input; // Pegar o id do elemento

  input.addEventListener("click", () => {
    //Fazer  eveto de click do elemento
    const image = images.find((image) => image.id === id); // Pegar a imagem que tiver o id igual ao do input

    imageContainer.src = image.src; // Substituir o id de source atual
  });
});
