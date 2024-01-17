# DOMINANDO O PROTOCOLO HTTP E INTEGRANDO COM A POKEAPI
    # PRIMEIRA REQUISIÇÃO

- Como ponto de partida. é preciso pegar a URL e colocar em uma variavél para poder ser solicitada e usada durante o código JavaScript.

- Para fazer a primeira requisição da API, é preciso solicitar uma biblioteca do JavaScript.

    - Com isso, vai ser usado o FETCH API

~~~JavaScript

const offset = 0
const limit = 10
const url = ('https://pokeapi.co/api/v2/pokemon?offset='+offset+'&limit='+limit)

fetch(url)

~~~

<!-- USANDO A FUNCTION THEN()-->

- A função fetch nos retorna uma Promise. É para conseguir lidar com o assíncronismo no JavaScript.

    - Para registar o fluxo assíncrono, é preciso usar a function then() no fetch. Ou seja, o fetch vai solicitar o conteúdo do serivdor e, após a solicitação ser feita, o then entra em execução.
    - O retorno dessa function irá demorar, pois será necessário rodar todo o código para que aconteça o retorno da mensagem.


~~~JavaScript

const offset = 0
const limit = 10
const url = ('https://pokeapi.co/api/v2/pokemon?offset='+offset+'&limit='+limit)

fetch(url).then(function (response) {
    console.log(response)
})

~~~

<!-- E QUANDO OCORRER UM ERRO? USO DO CATCH()-->

~~~JavaScript

const offset = 0
const limit = 10
const url = ('https://pokeapi.co/api/v2/pokemon?offset='+offset+'&limit='+limit)

fetch(url)
    .then(function (response) {
        console.log(response)
})
    .catch(function (error) {
        console.error(error)
})

~~~

<!-- E QUANDO QUISER QUE TENHA UM RESULTADO, INDEPENDENTE DO RESULTADO SER UM SUCESSO OU ERRO? USO DO FINALLY()-->

~~~JavaScript

const offset = 0
const limit = 10
const url = ('https://pokeapi.co/api/v2/pokemon?offset='+offset+'&limit='+limit)

fetch(url)
    .then(function (response) {
        console.log(response)
})
    .catch(function (error) {
        console.error(error)
})
    .finally(function () {
        console.log('Requisição concluída!')
})

~~~

<!-- Agora é preciso manipular o resultado da requisição através de uma promise-->

    - Na requisição(nas ferramentas do desenvolvedor, fornecidos pelo navegador), um dos resultados é o body, mas ele precisa ser convertido para uma json, pois só assim será possível pecorrer e utilizar-lo como um objeto em JavaScript.

    - O primeiro .then() faz a requisição e já retorna o json e a segundo faz o retorno. É como se fosse uma função de transformação.


~~~JavaScript

const offset = 0
const limit = 10
const url = ('https://pokeapi.co/api/v2/pokemon?offset='+offset+'&limit='+limit)

fetch(url)
    .then(function (response) {
        return response.json()
})
    .then(function (response) {
        console.log(response)
})
    .catch(function (error) {
        console.error(error)
})
    .finally(function () {
        console.log('Requisição concluída!')
})

~~~

<!-- CASO TENHA O DESEJO DE REDUZIR O CÓDIGO DAS FUNCTIONS-->

- Se a function não tiver um retorno, ela pode ser reduzida e substituída assim:

~~~JavaScript

const offset = 0
const limit = 10
const url = ('https://pokeapi.co/api/v2/pokemon?offset='+offset+'&limit='+limit)

fetch(url)
    .then((response) => response.json())
    .then((jsonBody) => console.log(jsonBody))
    .catch((error) => console.error(error))

~~~


<!-- COMO FAZER PARA "DEBUGAR" O CÓDIGO JS EM BROWSER E NODE JS-->


1 - fetch vai retornar uma Promise;
2 - o .then((response)) vai converter o body para json;
3 - o .then((jsonBody)) vai retornar os resultados desse json(lista de pokemons);
4 - o .then((pokemonList)) vai printar a lista de pokemons com o debugger;
5 - o .catch() é para caso aconteç algum erro.


~~~JavaScript

fetch(url)

    .then((response) => response.json())
    .then((jsonBody) => console.log(jsonBody.results))
    .then((pokemonList) => {
        debugger
        console.log(pokemonList)
    })
    .catch((error) => console.error(error))

~~~