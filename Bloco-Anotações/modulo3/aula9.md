# FUNCIONAMENTO DAS PROMISES

- Na promise, caso o processamento tenha sucesso, vai ser uma coisa (resolve) e se der errado, vai fazer outra coisa (reject)

~~~JavaScript

new Promise((resolve, reject) => {
    // ...
    // ...
    resolve()
    // ...
    reject()
})

~~~

~~~JavaScript

const promessaDeUmNumeroQualquer = new Promise((resolve, reject) => {
    setTimeout(() => {
        const numero = parseInt = parseInt(Math.random()*100)
        resolve(numero)
    }, 1000)

})

promessaDeUmNumeroQualquer
    .then((value) => {
        console.log(value)
    })
    .catch((error) => {
        console.log(error)
    })
    .finally(() => {
        console.log('Finalizou')
    })

~~~