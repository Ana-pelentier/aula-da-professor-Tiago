let metasSemana = []
metasSemana.push('sobreviver')
metasSemana.push('dormir bastante')
metasSemana.push('aprender')
if(metasSemana[1] == "Praticar esportes"){
    return("Verdadeiro")
}else{
    metasSemana.splice(1, 1, "Praticar esportes")
    
}
console.log(metasSemana)