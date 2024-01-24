# MAP

- Fazendo transformações com o uso do MAP.

    - No exemplo, o map foi usado para extrair somente os nomes da lista.

~~~JavaScript
class Pessoa {
    constructor(nome) {
        this.name = nome
    }
}

const lista = [new Pessoa('Renan'), new Pessoa('Andressa'), new Pessoa('Vitor')]

const listaNomes = lista.map((element) => {
    return element.name
})

console.log(listaNomes)

~~~

- E SE QUISER USA RO MAP PARA TRANSFORMAR EM HTML:

~~~JavaScript
class Pessoa {
    constructor(nome) {
        this.name = nome
    }
}

const lista = [new Pessoa('Renan'), new Pessoa('Andressa'), new Pessoa('Vitor')]

const listaEmHtml = lista.map((element) => {
    return `
        <li>
            ${element.name}
        </li>
    `
}).join(';')

console.log(listaEmHtml)

~~~

OBS: O join(';') foi usado para teste de separador.