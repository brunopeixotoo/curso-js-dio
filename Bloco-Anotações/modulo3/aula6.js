

function funcao1() {
    console.log(this)
}

const funcao2 = () => {
    console.log(this)
}

const nome = {
    nome: 'Seu nome',
    funcao1,
    funcao2
}

nome.funcao1()
nome.funcao2()