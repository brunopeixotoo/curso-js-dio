# DESVENDANDO AS FUNÇÕES GET E PRINT

    - Para executar as funções get e print, durante o curso foi elaborado uma tentativa de desenvolver junto a aprendizagem de encapsulamento.

    No primeiro arquivo, foi criado as funções GETS e PRINT.

    ~~~javaScript

function gets() {
    return 10;
}

function print(texto) {
    console.log(texto);
}
~~~

    No arquivo seguinte, chamado de MAIN, foi utilizado o uso do "require();"
    Vai ter como objetivo chamar o arquivo "aula8.js" para o arquivo "aula8main.js".

~~~JavaScript

const funcoes = require('/.aula8');

~~~


    A seguir, foi utilizado o uso do "module.exports"
    Dessa forma, as funções conseguem ser exportadas para os arquivos que as solicitarem.

        module.exports = {objeto1 , objeto2};

    Lembrando:Deve ser aplicado no arquivo das funções. 

~~~JavaScript

module.exports = {gets, print};

~~~


    E como chamar essas funções para o arquivo de desejo?

~~~JavaScript

const funcoes = require('./aula8');

console.log(funcoes.gets());
console.log(funcoes.print());

~~~

    Existem formas mais agéis de solicitar um acesso de outo objeto.

    OBJECT DESTRUCTURING

        - É possível verificar que durante a requisição da função, é possível solicitar as funções que deseja usar.

            "const {funcoes1 , funcoes2} = require('./nomedoarquivo');

~~~javascript

const { gets, print } = require('./aula8');

print(gets());

~~~
