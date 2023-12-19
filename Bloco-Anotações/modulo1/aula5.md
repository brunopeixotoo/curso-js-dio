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

# USO DO CONSTRUCTOR

    - O "constructor" será responsável por fazer a atividade quando a Classe pedir um novo Objeto.

    - O constructor também pode receber parâmetros.

~~~JavaScript
constructor(nome, idade) {
    this.nome = 'teste';
    this.idade = 40;
}

//Vai resultador no código:

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

const bruno = new Pessoa('Bruno', 70);
const diego = new Pessoa('Diego', 45);

bruno.descrever();
diego.descrever();

console.log(bruno);
console.log(diego);

~~~

# TAMBÉM É POSSÍVEL CRIAR OUTRAS FUNÇÕES COM O USO DO CONSTRUCTOR

    - No caso, esse código estaria comparando os Objetos Bruno e Diego.
    
~~~JavaScript
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