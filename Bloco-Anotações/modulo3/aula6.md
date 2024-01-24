# DECLARAÇÃO EXPLÍCITA E ARROW FUNCTION


- Declaração tradicional:

~~~JavaScript

function funcao1() {

}

~~~

- Declaração ARROW FUNCTION

~~~JavaScript

const funcao2 = () => {
    
}

~~~

- QUAL A DIFERENÇA?

    - Possuem uma diferença intrinseca.
    - A Arrow Function não isola o seu resultado. Um dos resultados disso é que se precisar usar toda a function, a arrow function não é recomendada, como no exemplo a seguir.

~~~JavaScript

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

~~~