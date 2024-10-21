//Um array chamado exerciciosSemana é criado com os exercícios iniciais.
let exerciciosSemana = ["corrida", "flexões", "abdominais"];

//O código verifica se o último exercício da lista é "alongamento". Se não for, "alongamento" é adicionado ao final do array.
if (exerciciosSemana[exerciciosSemana.length - 1] !== "alongamento") {
    exerciciosSemana.push("alongamento");
}

// A lista de exercícios atualizada é exibida no console.
console.log("Lista de Exercícios Atualizada:");
console.log(exerciciosSemana);
