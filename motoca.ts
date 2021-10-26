class Pessoa {
    idade: number;
    nome: string;
    
    constructor(idade: number, nome: string) {
        this.idade = idade;
        this.nome = nome;
    }

    toString(): string {
        return "Pessoa: " + this.idade + ":" + this.nome  ;
    }
}


class Moto {
    pessoa: Pessoa | null;
    potencia: number;
    tempo: number;
    constructor(pessoa: Pessoa, potencia: number, tempo: number) {
        this.pessoa = null;
        this.potencia = 1;
        this.tempo = 0;
    }

    subir(pessoa: Pessoa): boolean {
        if (this.pessoa != null) {
            console.log("A moto já possui uma pessoa.");
            return false;
        }
        if (pessoa.idade > 10) {
            console.log("Pessoa muito velha para andar nessa moto.");
            return false;
        }
        this.pessoa = pessoa;
        console.log("Nome: " + this.pessoa.nome + " e idade: " + this.pessoa.idade);
        return true;
    }

    descer (): Pessoa | null {
       
        if (this.pessoa == null) {
            console.log("A moto não possui ninguém.");
            return null;
        }
        let pessoa = this.pessoa;
        this.pessoa = null;
        return pessoa;        
    }

    comprar_tempo(tempo: number): void {
        this.tempo = tempo
        console.log ("Foi adicionado o tempo de: " + this.tempo + " minutos.");
    }

    dirigir(tempo:number):void {
        if(tempo > this.tempo){
            console.log ("A motoca andou por apenas " + this.tempo + " minutos e acabou seu tempo.");
            this.tempo = 0
        }
        else {
            this.tempo = this.tempo - tempo;
            console.log ("A motoca andou por " + tempo + " minutos e ainda resta o tempo de." + this.tempo + " minutos." );
        }
    }

    buzinar(potencia:number):void {
        print ("P")
        for (let i:number = 0; i == potencia; i++){
            "e"
        } 
        print("m!!")
    }


    toString(): string {
        return "Moto: " + this.pessoa + ":" + this.potencia + ":" + this.tempo;
    }
}

let p1 = new Pessoa (8,"JOAO")

console.log(" " + p1)

let harley = new Moto (p1,1,0)

harley.comprar_tempo(10)
harley.subir(p1)
harley.descer()
