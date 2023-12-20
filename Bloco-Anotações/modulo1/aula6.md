# ENTENDENDO ARRAYS


    - O que é uma ARRAY?
        É possível armazenar uma variedade de itens em uma lista.

~~~JavaScript

const alunos = ['João', 'Vitor', 'Marina'];
console.log(alunos);
~~~

<!-- # Também é possível acessar determinados itens dentro de uma lista. -->
    
    O exemplo a seguir é para tentar acessar o 'João'.
    É preciso lembrar que cada item é um índice e os índices começam no número zero.

~~~JavaScript

const alunos = ['João', 'Vitor', 'Marina'];

console.log(alunos[0]);

~~~

<!-- # ADICIONANDO E REMOVENDO ITENS DE UM ARRAY  -->

    - Adicionar e substituir constituem a mesma lógica.

       - método "push":

            variavel.push(item);

~~~JavaScript

const alunos = ['João', 'Vitor', 'Marina'];

alunos.push('Renan');
alunos[4] = 'Vinicius';

console.log(alunos);

~~~

<!-- # REMOVENDO ITENS -->

    Vai remover o último índice da lista.

        - método "pop":

            variavel.pop();
    
    Vai remover o primeiro índice da lista.

        - método "shift":

            variavel.shift();

~~~JavaScript

const alunos = ['João', 'Vitor', 'Marina'];

console.log(alunos.pop());

~~~

<!-- # VERIFICAR A QUANTIDADE DE ÍNDICES -->

    Vai retornar a quantidade de índices da lista.

        - método "lenght";

            variavel.lenght;


~~~JavaScript

const alunos = ['João', 'Vitor', 'Marina'];

console.log(alunos.length);

~~~