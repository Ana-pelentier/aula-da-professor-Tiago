let listacompras = [0,1,2] 
while(listacompras.length < 3 ){
    listacompras.push(prompt("Digite um item para ser adicionado na lista de compras").toLocaleLowerCase)

}

if (listacompras[listacompras.length -1] !== 'leite'){
    listacompras.push('leite')
}
console.log(listacompras);