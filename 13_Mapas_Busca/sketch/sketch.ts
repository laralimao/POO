/*
npm install readline-sync @types/readline-sync @types/node
npm install ts-node readline-sync @types/readline-sync @types/node
tsc --downlevelIteration
npm install -g ts-node
npm -g install typescript
tsc sketch.ts ou solver.ts
ts-node sketch.ts 
*/
 
let alunos = new Map<number, string>();
alunos.set(1,"2")
alunos.set(2,"3")
alunos.set(5,"4")
console.log(alunos.has(1))

for(let key of alunos.keys()){
  console.log(key)
}

for(let value of alunos.values()){
  console.log(value)
}

for(let entry of alunos.entries()){
  console.log(entry)
}

for(let [key, value] of alunos){
  console.log(key,value)
}


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
      let existe = false
      for(let f of this.getFones()){
        if(fone==f){
          existe=true
        }
      }
      if(existe==false){
        this.fones.push(fone)
      }
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


class Agenda {
  private contatos: Map<string,Contato>;
  constructor(){
    this.contatos = new Map<string,Contato>();
  }

  //retorna o objeto contato com esse nome ou null se não existir
  public findContact(name:string): Contato | null | undefined {    
    if(this.contatos.has(name)){
      return this.contatos.get(name)
    }
    
    return null
  }

  public findByPattern(pattern:string): Array<Contato> {    
    let result = new Array<Contato> ();
    for (let contato of this.contatos.values()){
      if(contato.getId().includes(pattern)){
        result.push(contato)
      }
    }
    return result  
  }
  //se nenhum contato existir com esse nome, adicione
  //se ja existir, faça o merge adicionando os telefones
  //se tiver adicionado um novo contato, ordene a lista para ficar em ordem alfabética
  public addContato(contato:Contato):void{
    if(this.contatos.has(contato.getId())==true){
      let existente = this.contatos.get(contato.getId())
      for (let fone of contato.getFones()){
        existente?.addFone(fone)
      }
      if(existente != undefined)
      this.contatos.set(contato.getId(),existente)
    }       
    else {
      this.contatos.set(contato.getId(),contato)
    }
  }

  //Utilize o método findPos
  public rmContato(name:string):void{
    this.contatos.delete(name)
  }

  public toString ():string {
    let lista:Array<string> = []
    let j = 0
    for (let contato of this.contatos.values()){
      lista[j]= contato.toString()+"\n"
      j++
    }
    return ""+ lista
  }
}

let fone1 = new Fone("(85)9999","cell")
let fone2 = new Fone("(85)99998888","cell")


let Joao = new Contato("Joao",[fone1])
let maria = new Contato("Maria",[fone2])
console.log(" "+Joao)
Joao.addFone(fone2)
Joao.addFone(fone1)
Joao.rmFone(2)

console.log(" "+Joao)

let agenda = new Agenda()
agenda.addContato(maria)
console.log(" "+agenda.toString())
agenda.addContato(Joao)
console.log(" "+agenda.toString())
maria.addFone(fone1)

agenda.addContato(maria)
console.log(" "+agenda.toString())
agenda.rmContato("Joao")
console.log(" "+agenda.toString())


//agenda.addContato(maria)
//agenda.addContato(Joao)