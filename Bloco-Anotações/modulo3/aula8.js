

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
}).join('')

console.log(listaEmHtml)