
const pessoa = {
    genero: 'masculino'
}

const nomeUsuario = Object.create(pessoa)

nomeUsuario.nome = 'Seu nome'

console.log(nomeUsuario.genero)
