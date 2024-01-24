# ENTENDENDO SOBRESCRITA E SHADOWING

- Caso ele não encontre o atributo 'idade' no nomeUsuario, o programa vai percorrer outros objetos até encontrar um atributo 'idade'.

~~~JavaScript

const pessoa = {
    idade: 18
}

const nomeUsuario = {
    nome: 'Seu nome',
    __proto__: pessoa
}

console.log(nomeUsuario.idade)
~~~