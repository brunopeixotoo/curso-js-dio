# UTILIZANDO A FUNÇÃO MAP PARA DIMINUIR A VERBOSIDADE DO NOSSO COÓDIGO


- Para reduzir algumas conversões para o HTML dentro do código, foi utilizado o método MAP. Como funciona:

A forma como estava sendo percorrido antes:

~~~JavaScript

const listItems = []

for(let i = 0; i < pokemons.length; i++) {
    const pokemon = pokemons[i];
    listItems.push(pokemonId(pokemons))
}

~~~

Como foi reduzido com o uso do método MAP:

    -  Ele favorece a redução de complexidade no momento de fazer o código e a sua leitura para quando outros desenvolvedores estiverem em contato.
    

~~~JavaScript

pokeApi.getPokemons().then((pokemons = []) => {

    const novaList = pokemons.map((pokemon) => {
        return pokemonId(pokemon)
    })

    const novoHtml = novaList.join('')

    pokemonList.innerHTML += novoHtml

})

~~~