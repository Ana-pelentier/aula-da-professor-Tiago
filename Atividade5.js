// Um array chamado filmesFavoritos é criado com três filmes de sua escolha.
let filmesFavoritos = ["O Senhor dos Anéis", "Inception", "Titanic"];

// O primeiro filme na lista é modificado para "Matrix".
filmesFavoritos[0] = "Matrix";

// O código verifica se o último filme da lista é "Harry Potter". Se não for, "Harry Potter" é adicionado ao final do array.
if (filmesFavoritos[filmesFavoritos.length - 1] !== "Harry Potter") {
    filmesFavoritos.push("Harry Potter"); 
}
// A lista de filmes favoritos atualizada é impressa no console.
console.log("Lista de Filmes Favoritos:");
console.log(filmesFavoritos);
