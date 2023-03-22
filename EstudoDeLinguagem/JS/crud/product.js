/*let product = () => {
  function create(name, price, quantidade) {
    this.name = name;
    this.price = price;
    this.quantidade = quantidade;
  }
  function read() {
    return this;
  }
  function update(name, price, quantidade) {
    this.name = name;
    this.price = price;
    this.quantidade = quantidade;
  }
  function del() {
    this.name = null;
    this.price = null;
    this.quantidade = null;
  }
  return {
    create: create,
    read: read,
    update: update,
    del: del,
  };
};
var p1 = product();
console.log(p1);
p1.create("blusa vermelha", 258, 1);
console.log(p1.del());
console.log(p1);
*/
class Product {
  constructor(nome, preco, quantidade) {
    this.nome = nome;
    this.preco = preco;
    this.quantidade = quantidade;
  }
  read() {
    return this;
  }
  update(nome, preco, quantidade) {
    this.nome = nome;
    this.preco = preco ? preco : this.preco;
    this.quantidade = quantidade ? quantidade : this.quantidade;
  }
  deleteItem() {
    delete this;
  }
}

var produto1 = new Product("blusa vermelha", 258, 1);
var produto2 = new Product("blusa azul", 300, 1);
produto2.update("blusa preta");
console.log(produto1, produto2);
console.log(produto2.read());

class Collection {
  constructor() {
    this.products = [];
  }

  addProduct(product) {
    this.products.push(product);
  }

  removeProduct(product) {
    this.products = this.products.filter((p) => p !== product);
  }

  getProduct(index) {
    return this.products[index];
  }

  getProducts() {
    return this.products;
  }

  search(name) {
    return this.products.filter((p) => p.nome.indexOf(name) !== -1);
  }
}
var blusas = new Collection();
blusas.addProduct(produto1);
blusas.addProduct(produto2);
console.log(blusas.search("vermelha"));
