# Firt Class Functions, Higher Order Functions, Functions Decaration e Function Expression

- Para invocar uma function no JS, não necessariamente é preciso um nome, mas sim, obrigatoriamente de sua referência.

    - Podem ser atribuidas como variáveis;
    - Pode ser usada como paramêtro
    - Pode ser retornada como resposta; 
    - Podem ser atribuidas functions para outras functions.


~~~JavaScript

function falarMeuNome() {
    console.log('Meu nome é fulano')    
}

const referenciaNova = falarMeuNome

referenciaNova()

~~~

- Atribuindo uma function para outra function.

~~~JavaScript

function falarMeuNome() {
    console.log('Meu nome é fulano')    
}

function falarMeuNomeCompleto(falarMeuNome) {
    falarMeuNome()
    console.log('cicrano da coisa')
}

falarMeuNomeCompleto(falarMeuNome)

~~~

- Atribuindo uma function dentro de uma variável;

    - Qual a diferença entre ambos?

        HOSTING

~~~JavaScript

function nomeDaFunction() {
    console.log('nomeDaFunction')    
}

const nomeDeOutraFunction = function () {
    console.log('nomeDeOutraFunction')
}

nomeDaFunction()
nomeDeOutraFunction()

~~~