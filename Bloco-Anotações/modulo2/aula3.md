# REQUISIÇÃO HTTP 


<!-- URL: https://pokeapi.co/api/v2/pokemon--> 
    $(IP)/${path = caminho de identificação de recurso}


<!--IP: https://pokeapi.co--> 

    Caso fosse um IP local:

        http://127.0.0.1:3000

<!-- # No caso, o que estaria solicitando?-->

    - Estaria solicitando o PATH(caminho de identificação do recurso):

        /api/v2/pokemon

<!-- # Uso do Request Method -->

    - Sempre que for fazer uma requisição para o servidor, essa requisição possui um tipo. 

        GET | POST | PUT | DELETE | PATCH e outros...

        Cada tipo significa algo para o servidor. Isso vale para as APIs que seguem o padrão REST.

        GET --> buscar recurso.

        POST/Pokemon --> Quer dizer que você quer inserir um novo pokemon.

        PUT --> Atualizar o pokemon.

        DELETE --> Remover.