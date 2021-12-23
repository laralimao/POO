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
 

class Pet {
  private nome:string
  private saciedade:number;
  private energia:number
  private limpeza: number
  private saciedademax:number;
  private energiamax:number
  private limpezamax: number
  private diamantes:number
  private idade: number


  constructor (nome:string, saciedademax:number, energiamax:number, limpezamax: number){
    this.nome = nome
    this.saciedade = saciedademax 
    this.energia = energiamax
    this.limpeza = limpezamax
    this.saciedademax = saciedademax 
    this.energiamax = energiamax
    this.limpezamax = limpezamax
    this.diamantes = 0
    this.idade = 0

  }

  public checarSaude():boolean{
    if(this.energia>0 && this.saciedade>0 && this.limpeza>0){
      return true
    }
    if(this.energia<=0){
      console.log("Pet morreu por energia.")
    }
    if(this.saciedade<=0){
      console.log("Pet morreu por saciedade.")
    }
    if(this.limpeza<=0){
      console.log("Pet morreu por limpeza.")
    }
    return false
  }


  public Jogar():void{
    if (this.checarSaude()){
      this.energia -= 2;
      this.saciedade -= 1;
      this.limpeza -= 3;
      this.idade += 1;
      this.diamantes += 1
      if(this.checarSaude()){
        console.log("Pet está Jogando.")
      }
      return 
    }
    console.log("Pet está morto.")
    
  }

  public Comer():void{
    if (this.checarSaude()){
      this.energia -= 1;
      this.saciedade += 4;
      this.limpeza -= 2;
      this.idade += 1;
      if(this.checarSaude()){
        console.log("Pet está Comendo.")
      }
      return
    }

    console.log("Pet está morto.")
    
  }

  public Dormir(turnos:number):void{

    if (this.checarSaude()){
      this.energia = this.energiamax;
      this.saciedade -= 1;
      this.idade += turnos;
      if(this.checarSaude()){
        console.log("Pet está Dormindo.")
      }
      return
    }

    console.log("Pet está morto.")
        
  }

  public Banho():void{
    
    if (this.checarSaude()){
      this.energia -= 3;
      this.saciedade -= 1;
      this.limpeza = this.limpezamax;
      this.idade += 2;
      if(this.checarSaude()){
        console.log("Pet está Tomando banho.")
      }
      return
    }
      console.log("Pet está morto.")
    
  }

  public toString(){
      return this.nome + ": " + this.saciedade + "(saciedade)\n" + this.energia + "(energia)\n" + this.limpeza + "(limpeza)\n" + this.diamantes+ "(diamantes)\n" + this.idade + "(idade)\n" 
  }


  public getSaciedade():number{
    return this.saciedade;
  }

  public getEnergia():number{
    return this.energia;
  }

  public getNome(){
    return this.nome;
  }

  public getLimpeza():number{
    return this.limpeza;
  }

  public getIdade():number{
    return this.idade;
  }

  public getDiamantes():number{
    return this.diamantes;
  }

  public Show():void{
    console.log(this.saciedade,this.energia,this.limpeza,this.diamantes,this.idade,"(S,E,L,D,I)")
  }
}

class menu {
    create_pet ():Pet {
        write("Digite o nome do pet: ")
        let nome = input();
        write("Digite o valor de saciedade: ")
        let saciedademax = input();
        write("Digite o valor de energia: ")
        let energiamax = input();
        write("Digite o valor de limpeza: ")
        let limpezamax = input();
        let pet = new  Pet(nome,saciedademax,energiamax,limpezamax)
        return pet
    }

    Inicio () {
        write("Comandos:\n")
        write("init: cria um novo pet\n")
        write("show: mostra o status do pet\n")
        write("play: faz o pet brincar\n")
        write("eat: faz o pet comer\n")
        write("slep: faz o pet dormir\n")
    }

    shell (){
        let pet = this.create_pet()
        this.Inicio()
        while(true){
            let line = input();
            let words = line.split(" ");
            if (words[0] =="end"){
                break
            }else if (words[0]=="help"){
                this.Inicio()
            }else if (words[0]=="show"){
                write(""+pet + "\n")
            } else if (words[0]=="init"){
                pet = new Pet(words[1], +words[2], +words[3],+words[4])
            } else if (words[0]=="play"){
                pet.Jogar()
            } else if (words[0]=="eat"){
                pet.Comer()
            } else if (words[0]=="sleep"){
                pet.Dormir(words[1])
            }
        }
    }
}

let Menu = new menu
Menu.shell()