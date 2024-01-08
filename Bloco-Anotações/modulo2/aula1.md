# INTRODUÇÃO AO DESENVOLVIMENTO WEB COM JAVASCRIPT


    - Introução ao HTML:

        O HTML é uma linguagem de marcação usada no desenvolvimento WEB.
        É possíe verificar que suas tags compõe identificação de idioma que é desenvolvivo determina HTML.

        O título da aba é determinado pela tag 
        <title> </title>.

        O "h1" e sucessivamente composto por "h2,h3,h4,h5 e h6" determinam os textos e seus tamanhos dentro da página HTML e a ordem de prioridade para busca na internet.

        <h1> Texto </h1>

~~~HTML
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pokedex</title>
</head>

<body>

    <h1>Hello, World!</h1>
    <p>Meu primeiro site está sendo feito junto de um curso da DIO </p>
    
</body>
</html>
~~~
    - Introdução ao CSS:

        O CSS é conhecido pelo seu código formar uma castaca à medida que as edições personalizadas são feitas no HTML.

        Todo CSS fica dentro da tag <style>  css  </styler>

~~~HTML
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pokedex</title>

    <style>
    h1 {
        color: brown;
    }

    h1 {
        text-align: center;
    }
    </style>
</head>

<body>

    <h1>Hello, World!</h1>
    <p>Meu primeiro site está sendo feito junto de um curso da DIO </p>
    
</body>
</html>

~~~


    - O JavaScript, principal linguagem de programação usada para desenvolvimento WEB é que dara COMPORTAMENTO para página, ou seja, sua iteração de usuário quando usa uma site.

        Com o uso do JS, no exemplo abaixo, foi possível verificar uma iteratividade a partir do momento do click no botão "Teste". A função é ativada quando tem uma ação de entrada do mouse na tela e a mesma função retorna o console.log('Clicou no botão').



~~~HTML

<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pokedex</title>

    <style>
    h1 {
        color: brown;
    }

    h1 {
        text-align: center;
    }
    </style>
</head>

<body>

    <h1>Hello, World!</h1>
    <p>Meu primeiro site está sendo feito junto de um curso da DIO </p>
    
    <button id="btnTeste" type="button">
        Teste
    </button>

    <script>

        const btnTeste = document.getElementById("btnTeste")
        btnTeste.addEventListener("click", function () {
            console.log('Clicou no botão')
        })

    </script>

</body>

</html>

~~~