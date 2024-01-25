

const fs = require('fs')

//LEITURA DE ARQUIVOS QUE ESTÃO NA MESMA PASTA DO PROGRAMA
const path = require('path')
const filePath = path.resolve(__dirname, 'tarefas.csv')

//USANDO A PROMISES PARA LEITURA DE ARQUIVOS CSV
const promesaDaleituraDoArquivo = fs.promises.readFile(filePath)

promesaDaleituraDoArquivo
    .then((arquivo) => arquivo.toString('utf8'))
    .then((textoDoArquivo) => textoDoArquivo.split('\n').slice(1))
    .then((linhasSemOCabecalho) => linhasSemOCabecalho.map((linha) => {
            const [nome, feito] = linha.split(';')
            return {
                nome,
                feito: feito.trim() === 'true'
            }
    }))
    .then((listaDeTarefas) => console.log(listaDeTarefas))
    .catch((error) => console.log('Deu ruim!', error))