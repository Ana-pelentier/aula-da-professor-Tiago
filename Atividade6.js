// Criação de um array vazio para o carrinho
let carrinho = [];
// Adicionando produtos ao carrinho
carrinho.push("camiseta");
carrinho.push("calça");
carrinho.push("sapato");
// Removendo o primeiro produto da lista
carrinho.shift(); // Remove "camiseta"
// Modificando o segundo produto para "tênis"
carrinho[1] = "tênis"; // O segundo produto agora é "tênis"
// Imprimindo o carrinho de compras atualizado
console.log("Carrinho de Compras Atualizado:");
console.log(carrinho);