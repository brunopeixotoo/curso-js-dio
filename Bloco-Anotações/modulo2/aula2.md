# CONFIGURAÇÕES GERAIS DO PROJETO

    - Todo projeto precisa de um "normalize css", pois no atual mundo do desenvolvimento, as páginas se encontram em diversos dispositivos e versões diferentes de navegadores. Portanto, é importante que as páginas desenvolvidas se encontrem na flexibilidade de se adaptar nas telas.

        O link adicionado abaixo do título(title) da aba vai permitir a adaptação a partir da tela do usuário. Esse é de um servidor gratuito: cdnjs - cdn normalize css.


~~~HTML

<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pokedex</title>

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    
</head>

<body>

    <h1>Hello, World!</h1>
    <p>Meu primeiro site está sendo feito junto de um curso da DIO </p>
    
</body>

</html>

~~~

Foi criado uma pasta só para colocar os arquivos CSS e JS e os arquivos.

    "mdkir assets"
    "mdkir assets/css/global.css"
    "mdkir assets/js/main.js"

    - A partir disso, foi solicitado esses arquivos dentro do código HTML. Veja:



~~~HTML

<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pokedex</title>

    <!--Normalize CSS--> 
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    
    <!--Chamando o arquivo global CSS--> 
    <link rel="stylesheet" href="./assets/css/global.css">
    
</head>

<body>

    <h1>Hello, World!</h1>
    <p>Meu primeiro site está sendo feito junto de um curso da DIO </p>
    
    <!--Chamando o arquivo main JS-->
    <script src="./assets/js/main.js"></script>
</body>

</html>

~~~