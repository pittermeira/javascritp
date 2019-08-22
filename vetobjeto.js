function funcao(){
    let vet = []
    for(let i=0;i<5;i++)
        let objeto = {}
        // coloca dados no objeto
        objeto.codigo = Number(prompt('Codigo'))
        objeto.nome = prompt('Nome')
        objeto.qtde = Number(prompt('Quantidade'))
        objeto.preco = Number(prompt('Preço'))
        // coloca objeto no vetor
        vet.push(objeto)
}