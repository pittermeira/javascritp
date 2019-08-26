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

function exe2(){
    let prefeitura = []
    let soma
    let media
   for(i=0;i<3;i++){
       let objeto = {}
        objeto.salario = Number(prompt('Salario da população: '))
        objeto.filhos = Number(prompt('quantidade de filhos: '))
        objeto.sexo= (prompt('Sexo, M:Masculino e F:Feminino: '))
        prefeitura.push(objeto)
   }
   let somaSalario=0
   let somaFilhos=0
   let Msalario = prefeitura[0].salario
   let qtde=0
   for(let i=0;i<3;i++){
    soma=soma + prefeitura[i].salario
    somaSalario=somaFilhos+prefeitura[i].filhos
    somaFilhos=somaSalario+prefeitura[i].salario
        if (prefeitura[0].salario > Msalario)
             Msalario=prefeitura[i].salario
        if((prefeitura[i].sexo == 'F')&&(prefeitur[i].salario > 1000))
            qtde++;
     }
    alert('Media Salarial: '+somaSalario/prefeitura.length)
    alert('media de filhos '+ somaFilhos/prefeitura.length)
    alert('Maior Salario '+ Msalario)
}