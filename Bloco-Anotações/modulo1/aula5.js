// ENTENDENDO CLASSES E INSTÂNCIAS

class Pessoa {
    nome;
    idade;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2023 - idade;
    }

    descrever() {
        console.log('Meu nome é '+ this.nome +' e minha idade é '+ this.idade);
    }   
}

function comparandoIdade(p1, p2) {
    if (p1.idade > p2.idade) {
        console.log(p1.nome +' é mais velho que '+ p2.nome);
    } else if (p2.idade > p1.idade) {
        console.log(p1.nome +' é mais velho que '+ p2.nome);
    } else {
        console.log(p1.nome +' e '+ p2.nome +' tem a mesma idade');
    }
}

const bruno = new Pessoa('Bruno', 70);
const diego = new Pessoa('Diego', 45);

comparandoIdade(bruno, diego);
