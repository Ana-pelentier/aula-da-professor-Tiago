// Criando a lista com números de 1 a 15
let lista = [];
for (let i = 1; i <= 16; i++) {
    lista.push(i);
}
// Removendo os números a mais até que a lista contenha apenas 1 a 5
while (lista.length > 4) {
    lista.pop();
}
// Imprimindo a lista corrigida
console.log("Lista corrigida:");
console.log(lista);
