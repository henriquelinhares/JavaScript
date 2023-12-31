//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Classes
//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Working_with_objects
//https://edrodrigues.com.br/blog/metodos-estaticos-e-propriedades-em-classes-javascript/

//Métodos estáticos 

// Métodos estáticos não são chamados na instâncias da classe. Em vez disso, eles são chamados na própria classe.  
// Geralmente, são funções utilitárias, como funções para criar ou clonar objetos.

//Sintaxe: static nomeMetodoStatico(){}

class pessoa{
    constructor(nome, idade){
        this.nome = 'Luiz'
        this.idade = 30
    }
    static metodoEstatico(){
        return ''
    }
}
console.log(pessoa.metodoEstatico());