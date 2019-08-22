function funcao(){
    let vet = []
    for(let i=0;i<5;i++){
        let objeto = {}
        // coloca dados no objeto
        objeto.codigo = Number(prompt('Codigo'))
        objeto.nome = prompt('Nome')
        objeto.qtde = Number(prompt('Quantidade'))
        objeto.preco = Number(prompt('Preço'))
        // coloca objeto no vetor
        vet.push(objeto)
    }
    // calcula o estoque
    let estoque = 0
    for(let i=0;i<5;i++){
        estoque = estoque[i].qtde
    }
    alert('Quantidade em estoque: ' + estoque)
}