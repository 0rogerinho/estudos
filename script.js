const imagens = [
  {
    nome: "imagem1",
    src: "https://picsum.photos/200/300",
  },
  {
    nome: "imagem2",
    src: "https://picsum.photos/200/300?grayscale",
  },
];

const inputs = document.querySelector("#inputs");

imagens.forEach((imagem, index) => {
  const input = document.createElement("input");
  input.type = "radio";
  input.name = "imagens";
  input.value = index;
  input.onchange = () => {
    const img = document.createElement("img");
    img.src = imagem.src;
    input.after(img);
  };

  const label = document.createElement("label");
  label.innerHTML = imagem.nome;
  label.appendChild(input);
  inputs.appendChild(label);
});
