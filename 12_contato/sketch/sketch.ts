

class Fone {
  constructor (private number:string, private label:string) {}
  public toString():string {
    return this.label + ":" + this.number;
  }

  public static validate (number:string):boolean {
    let valid = "0123456789()-";
    for (let i =0;i<number.length;i++){
      if(valid.indexOf(number[i])==-1){
        return false
      }
    }
    return true
  }

  public isValid():boolean {
    return Fone.validate(this.number)
  }

  public getNumber (){
    return this.number
  }

  public getLabel (){
    return this.label
  }

  public setNumber (fone:string){
    this.number = fone
  }

  public setLabel (texto:string){
    this.label = texto
  }
}

class Contato {
  private id:string
  private fones:Array<Fone>

  constructor(id:string,fones:Array<Fone>){
    this.id = id
    this.fones = []
    for (let fone of fones){
      this.addFone(fone)
    }
  }

  public toString ():string {
    let lista:Array<string> = []
    for (let i = 0; i<this.fones.length;i++){
     lista[i]= "["+i.toString() +":" +this.fones[i].toString()+"] "
    }
    return "- " + this.id + ": " + lista
  }

  public addFone (fone:Fone){
    if(fone.isValid() == false){
      console.log("Fone " + fone+ " inválido")
    }
    else {
      this.fones.push(fone)
    }
  }

  public rmFone (index:number){
    if(index<this.fones.length){
      this.fones.splice(index,1)
    }
    else {
      console.log("Não existe o telefone procurado.")
    }
  }

  public getId (){
    return this.id
  }

  public getFones (){
    return this.fones
  }

  public setId (nome:string){
    this.id = nome
  }

  public setFones (lista:Array<Fone>){
    this.fones = []
    for (let fone of lista){
      this.addFone(fone)
    }  }
}


let show = (lista:any[]) => console.log("[" + lista.join(",") + "]")

let fone1 = new Fone("(85)9999","cell")
let fone2 = new Fone("(85)99998888","cell")


let Joao = new Contato("Joao",[fone1])
console.log(" "+Joao)
Joao.addFone(fone2)
Joao.addFone(fone1)
Joao.rmFone(2)

console.log(" "+Joao)


const readline = require('readline-sync');
console.log("Digite o seu nome:")


function input () {
    return readline.question();
}
 
let write = (x:any) => process.stdout.write(""+x) 

class menu {
  create_Contato ():Contato {
    let contato = new Contato("",[])
      return contato
  }

  Inicio () {
      write("Comandos:\n")
      write("init: cria um novo contato\n")
      write("show: mostra os fones do contato\n")
      write("add: adiciona novo fone\n")
      write("rm: remove um fone\n")
      write("end: finaliza\n")

  }

  shell (){
      let contato = this.create_Contato()
      this.Inicio()
      while(true){
          let line = input();
          let words = line.split(" ");
          if (words[0] =="end"){
              break
          }else if (words[0]=="help"){
              this.Inicio()
          }else if (words[0]=="show"){
              write(""+contato + "\n")
          } else if (words[0]=="init"){
              contato.setId(words[1])
          } else if (words[0]=="add"){
              contato.addFone(new Fone(words[1],words[2])) // fone e id
          } else if (words[0]=="rm"){
              contato.rmFone(words[1])
          }
      }
  }
}

let Menu = new menu
Menu.shell()