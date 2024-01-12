# REQUISIÇÃO HTTP 


<!-- URL: https://pokeapi.co/api/v2/pokemon--> 
         $(IP)/${path = caminho de identificação de recurso}


<!--IP: https://pokeapi.co--> 

    Caso fosse um IP local:

        http://127.0.0.1:3000

<!-- No caso, o que estaria solicitando?-->

    - Estaria solicitando o PATH(caminho de identificação do recurso):

        /api/v2/pokemon

<!-- Uso do Request Method -->

    - Sempre que for fazer uma requisição para o servidor, essa requisição possui um tipo. 

        GET | POST | PUT | DELETE | PATCH e outros...

        Cada tipo significa algo para o servidor. Isso vale para as APIs que seguem o padrão REST.

        - GET --> buscar recurso.

        - POST/Pokemon --> Quer dizer que você quer inserir um novo       pokemon.

        - PUT --> Atualizar o pokemon.

        - DELETE --> Remover.

<!-- Como fazer uma filtragem usando o GET? -->

    - Caso você precise pegar um grupo de pokemóns por uma letra específica:

        - Você vai filtrar a API. É como um tipo de SELECT, como usado nos SGBDs.

        - Ela começa após o ponto de interrogação(?) - A interrogação é opcional.

            https://pokeapi.co/api/v2/pokemon?


            Sempre vai vir no modelo "chave = valor". 

            --> type = grass

            https://pokeapi.co/api/v2/pokemon?type=grass

            Caso queira fazer mais filtros, se usa o "&".

            --> type = grass & name = i

            https://pokeapi.co/api/v2/pokemon?type=grass&name=i

            --> limit = 5 (vai pegar somente os 5 primeiros pokemons)

            https://pokeapi.co/api/v2/pokemon?limit=5

            --> offset = 2 & limit = 5 (vai fazer um deslocamento de 2 páginas e pegar somente 5 pokemons)

            https://pokeapi.co/api/v2/pokemon?offset=2&limit=5


<!-- Sobre as HEADERS -->

- Quando fazemos uma solicitação para o servidor, ele também responde e com trasnparência e fornece nas ferramentas do desenvolvedor o que nós pedimos, o que ele aceitou e liberou como resposta e as permissões.

E esses dados chegam no formato:

    - Request Headers

        Configuração da nossa API

            Accept-Language:
            (A numeração define o nível de prioridade)

            pt-BR  --> Você tá dizendo que aceita Português-BR como prioridade máxima.
            pt;q=0.9 --> Português-PT
            en-US;q=0.8 --> Inglês - USA
            en;q=0.7 --> Inglês-GLOBAL

            Authorization:

            Bearer

    - Response Headers

        Configuração da nossa API

<!-- BODY E STATUS CODE -->

Depedendo do método que for usado (GET, POST, PUT, DELETE), tem uma área de dados que é o BODY. O Body é o corpo da requisição, o dado que você quer trafegar.

    - O Body você pode usar para, por exemplo, criar algo novo. No caso, vamos criar um pokemon novo.

        - Request Headers
            content-type: application/json (estou dizendo que a criação do body é em formato json)

        - Request Body

        Body
        {
            "name": "Nome do Novo Pokemón"
        }

    - Você só vai usar o body para os métodos que fazem sentido, ou seja, métodos como GET e DELETE não tem necessidade de se usar o Body, mas o PUT e POST fazem.

<!-- E uma resposta do servidor, o que terá? -->

    - STATUS CODE --> O que aconteceu com a requisição: Foi processada ou não. Qual o erro, se não for processada.

        Família 200: SUCESSO

        Família 300: REDIRECT

        Família 400: ERRO POR PARTE DO CLIENTE

        Família 500: ERRO INTERNO NO SERVIDOR


    - RESPONSE HEADERS

        Vai dizer como essa resposta está configurada.

    - RESPONDE BODY

        Vai ser a resposta em si.