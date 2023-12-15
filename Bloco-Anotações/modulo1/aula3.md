# Funções

    - Funções são trechos de código que você pode ativar a atividade dele a qualquer momento. 

~~~JavaScript
    function teste() {

    }
~~~

# Como invocar a função em outro trecho de código:

~~~JavaScript

teste();

~~~

# Também é possível passar um parâmetro para função.

~~~JavaScript
    function sayMyName(name) {
        console.log('Your name is '+ name);
    }

sayMyName('Bruno')

~~~

<!-- # Exemplo de função com RETURN  -->

~~~JavaScript
    function quadrado(numero) {
         return numero*numero;
    }

    const valorAoQuadrado = quadrado(10);
    console.log(valorAoQuadrado);
~~~

<!-- # Exemplo de função com RETURN  -->

~~~JavaScript
    function valorJuros(valor, percentual) {
        const calculo = (percentual/100)* valor;
        return calculo
    }

    let calculoDeJuros = valorJuros(78, 10);
    console.log(calculoDeJuros);
~~~