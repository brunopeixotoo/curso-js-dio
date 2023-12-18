// Estrutura Básica de Um Objeto

const pessoa = {
    nome: 'Bruno',
    idade: 70,
    
    descrever: function () {
        console.log('Meu nome é '+ this.nome +' e minha idade é '+ this.idade);
    }
};

pessoa.altura = 1.74;
console.log(pessoa['nome']);