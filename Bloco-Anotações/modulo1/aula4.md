# ESTRUTURA BÁSICA DE UM OBJETO

    - Um objeto é uma coleção de valores. Agrupa valores e funciona através de chave e valor.

~~~JavaScript
const pessoa = {
    nome: 'Bruno',
    idade: 70
};

console.log(pessoa.nome);
console.log(pessoa.idade);
console.log(pessoa);
~~~

<!-- # É possível incrementar os valores dentro desse objeto  -->

    - Uma coleção dinâmica de chave-valor.

        chave : valor

~~~JavaScript
const pessoa = {
    nome: 'Bruno',
    idade: 70
};

pessoa.altura = 1.78;
~~~

<!-- # Também é possível criar FUNCTION dentro de objetos. -->

    - Essas functions são chamadas de MÉTODOS.

~~~JavaScript
const pessoa = {
    nome: 'Bruno',
    idade: 70,

    descrever = function () {
        console.log('Meu nome é '+ this.nome +' e minha idade é '+ this.idade +' e minha altura é de '+ this.altura +'m');
    }
};

pessoa.altura = 1.78;
pessoa.descrever();

~~~

<!-- # É possível acessar os valores do objeto com uma sintaxe mais dinâmica -->
 
~~~JavaScript
const pessoa = {
    nome: 'Bruno',
    idade: 70,

    descrever = function () {
        console.log('Meu nome é '+ this.nome +' e minha idade é '+ this.idade +' e minha altura é de '+ this.altura +'m');
    }
};

pessoa.altura = 1.78;

const atributo = 'idade';
console.log(pessoa[atributo]);
~~~