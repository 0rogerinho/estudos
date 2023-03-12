//estrutura de dados
const dados = [
  {
    imagem: "",
    descricao: "Blusa azul",
    categoria: "blusa",
    genero: "masculino",
  },
  {
    imagem: "",
    descricao: "Calca verde",
    categoria: "calca",
    genero: "masculino",
  },
  {
    imagem: "",
    descricao: "Vestido vermelho",
    categoria: "vestido",
    genero: "feminino",
  },
];

//Funcao disparada no click dos botoes
function selecionaGenero(e) {
  console.log("aass");
  //pega o div#conteudo para usar depois
  const elementoConteudo = document.getElementById("conteudo");
  elementoConteudo.innerHTML = "";
  //pega o conteudo do botao, usando conteudo para simplificar voce pode usar qualquer outro atributo
  const generoSelecionado = e.target.innerHTML;
  //filtra os dados baseado no atributo genero, utiliza o generoSelecionado para comparacao
  const dadosFiltrados = dados.filter(
    (item) => item.genero === generoSelecionado
  );
  //depois que filtrou usa um for e para cada elemento adiciona no div#conteudo
  dadosFiltrados.forEach(function (item, index, arr) {
    //cria dois divs programaticamente
    const descricao = document.createElement("div");
    const categoria = document.createElement("div");
    //coloca o conteudo do atributo descricao do item dentro do div descricao
    descricao.innerHTML = item.descricao;
    //coloca o conteudo do atributo categoria do item dentro do div descricao
    categoria.innerHTML = item.categoria;
    //coloca os dois novos divs dentro to  div#conteudo
    elementoConteudo.appendChild(descricao);
    elementoConteudo.appendChild(categoria);
  });
}

//adicionando o gatilho de click nos dois botoes
for (let botao of document.getElementsByClassName("genero")) {
  botao.addEventListener("click", selecionaGenero);
}
