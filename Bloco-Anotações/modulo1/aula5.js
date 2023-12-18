// ENTENDENDO CLASSES E INSTÂNCIAS

class Pessoa {
    nome;
    idade;

    descrever() {
        console.log('Meu nome é '+ this.nome +' e minha idade é '+ this.idade);
    }   
}

const bruno = new Pessoa();
bruno.nome = 'Bruno';
bruno.idade = 70;

const diego = new Pessoa();
diego.nome = 'Diego';
diego.idade = 45;

console.log(bruno);
console.log(diego);

bruno.descrever();
diego.descrever();

