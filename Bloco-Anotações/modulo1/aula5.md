# ENTENDENDO CLASSES E INSTÂNCIAS

    - Como exemplo, o porgrama terá como obejtivo criar uma classe Pessoas, pois se houver a necessidade de se criar novos objetos, o código 'const pessoa {}' terá que se repetir diversas vezes. 

    - Dessa forma ela pode instânciar. Instância é a ocorrência.

~~~JavaScript
class Pessoa {
    nome;
    idade;

    descrever() {
        console.log('Meu nome é '+ this.nome +' e minha idade é '+ this.idade);
    }
}
~~~

<!-- # COMO INSTANCIAR UMA NOVA PESSOA? -->

    - Se verifica que agora com a classe criada para o objeto Pessoa, não será necessário uma repetição grande de códigos, pois é simplismente a Classe desenvolver esses Objetos.

    - As instâncias são as ocorrências, ou seja, cada objeto criado com essa Classe.

    const usuario1 = new Pessoa();
    usuario1.nome = x;
    usuario1.idade = y;

    console.log(usuario1);


~~~JavaScript
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

~~~

    - Antigo código que iria ser necessário uma quantidade grande de repetições:

~~~JavaScript
const pessoa = {
    nome: 'Bruno',
    idade: 70,
    
    descrever: function () {
        console.log('Meu nome é '+ this.nome +' e minha idade é '+ this.idade);
    }
};

pessoa.altura = 1.74;
console.log(pessoa['nome']);
~~~