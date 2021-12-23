/*
npm install readline-sync @types/readline-sync @types/node
npm install ts-node readline-sync @types/readline-sync @types/node
npm install -g ts-node
npm -g install typescript
tsc sketch.ts ou solver.ts
*/


const readline = require('readline-sync');
console.log("Digite o seu nome:")


function input () {
    return readline.question();
}
 
let write = (x:any) => process.stdout.write(""+x) 
 

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
      this.potencia = potencia;
      this.tempo = tempo;
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

  buzinar():void {
      write ("P")
      for (let i:number = 0; i == this.potencia; i++){
         write("e")
      } 
      write("m!!")
  }


  toString(): string {
      return "Moto: " + this.pessoa.nome + ":" + this.potencia + ":" + this.tempo;
  }
}

class menu {
    create_pessoa ():Pessoa {
      write("Digite a idade da pessoa: ")
      let idade = input();
      write("Digite o nome da pessoa: ")
      let nome = input();
      let pessoa = new  Pessoa(idade,nome)
      return pessoa
  }
    create_moto ():Moto {
        let nome = this.create_pessoa();
        write("Digite a potencia da moto: ")
        let potencia = input();
        write("Digite o tempo inicial: ")
        let tempo = input();
        let moto = new  Moto(nome,potencia,tempo)
        moto.subir(nome)
        return moto
    }

    Inicio () {
        write("Comandos:\n")
        write("moto: cria uma nova moto\n")
        write("pessoa: cria uma nova pessoa\n")
        write("show: mostra o status da moto\n")
        write("subir: alocar uma pessoa na moto\n")
        write("descer: remover a pessoa da moto\n")
        write("comprar: comprar tempo na moto\n")
        write("buzinar: utilizar a buzina\n")
        write("dirigir: digirir, consumindo tempo na moto\n")
    }

    shell (){
        let moto = this.create_moto()
        this.Inicio()
        while(true){
            let line = input();
            let words = line.split(" ");
            if (words[0] =="end"){
                break
            }else if (words[0]=="help"){
                this.Inicio()
            }else if (words[0]=="show"){
                write(""+moto + "\n")
            } else if (words[0]=="pessoa"){
                let pessoa = new Pessoa(+words[1], words[2])
            } else if (words[0]=="moto"){
                moto = new Moto(words[1], +words[2], +words[3])
            } else if (words[0]=="subir"){
                moto.subir(words[1])
            } else if (words[0]=="descer"){
                moto.descer()
            } else if (words[0]=="comprar"){
                moto.comprar_tempo(+words[1])
            } else if (words[0]=="dirigir"){
                moto.dirigir(+words[1])
            } else if (words[0]=="buzinar"){
                moto.buzinar()
          }
        }
    }
}

let Menu = new menu
Menu.shell()