/*
npm install readline-sync @types/readline-sync @types/node
npm install ts-node readline-sync @types/readline-sync @types/node
npm install -g ts-node
npm -g install typescript
tsc sketch.ts ou solver.ts
ts-node sketch.ts 
*/

let maximo:number = 10;

let show = (lista:any[]) => console.log("[" + lista.join(",") + "]")

let lista: Array<number> = [3,1,2,3,5,4,7,5,9,0]
lista.sort(); // compara como texto
show(lista)

function compare_to (a:number,b:number) {
  if(a<b){
    return -1
  }
  else if(a>b){
    return 1
  }
  else {
    return 0
  }
}


// para números, pode ser simplificado como

lista.sort((a,b)=>a-b)
show(lista)

lista.sort((a,b)=>b-a)
show(lista)

// comparando como strings

let nomes = ["João","Joao","maria","Maria","José","Pedro","Ana"]
nomes.sort()
show(nomes)

nomes.sort((a,b)=>a.localeCompare(b))
show(nomes)

// comparando objetos

class Pessoa {
  constructor(public nome: string, public idade: number){ }
  public toString(): string {
    return this.nome + ":" + this.idade
  }
}

let pessoas:Array<Pessoa> = [new Pessoa("João",30), new Pessoa("José",30),new Pessoa("João",10),new Pessoa("Pedro",40),new Pessoa("Zeca",45),new Pessoa("Bruno",50) ]
pessoas.sort
show(pessoas)

// sort por nome
pessoas.sort((a,b)=>a.nome.localeCompare(b.nome))
show(pessoas)

// sort por nome e idade
pessoas.sort((a,b)=> a.nome.localeCompare(b.nome) || a.idade-b.idade)
show(pessoas)




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


class Agenda {
  private contatos: Array<Contato>;
  constructor(){
    this.contatos = new Array<Contato>();
  }

  //retorna a posição do contato com esse nome no vetor ou -1 se não existir.
  private findPosByName(nome:string):number{
    for (let i=0; i<this.contatos.length;i++){
      if(nome == this.contatos[i].getId()){
        return i
      }
    }
    return -1
  }

  //retorna o objeto contato com esse nome ou null se não existir
  public findContact(name:string):Contato{
    let posit = this.findPosByName(name)
    if (posit <0){
      return null
    }
    return this.contatos[posit]
  }
  //se nenhum contato existir com esse nome, adicione
  //se ja existir, faça o merge adicionando os telefones
  //se tiver adicionado um novo contato, ordene a lista para ficar em ordem alfabética
  public addContato(contato:Contato):void{
    let posit = this.findPosByName(contato.getId())
    if (posit<0){ // contato novo
      this.contatos.push(contato)
      this.contatos.sort((a,b)=>a.getId().localeCompare(b.getId()))
      console.log("ctt diferente",posit)
    }
    else { // contato existente
      let existe = false
      for (let fones of contato.getFones()){
        for (let f of this.contatos[posit].getFones()){
          if (f.getNumber() == fones.getNumber()){
            existe = true
          }
        }
        if (existe==false){
          this.contatos[posit].addFone(fones)
        }
      }
      console.log("ctt igual",posit)
    }
  }

  //Utilize o método findPos
  public rmContato(name:string):void{
    let posit = this.findPosByName(name)
    if (posit >= 0){
      this.contatos.splice(posit,1)
    }
  }

  public toString ():string {
    let lista:Array<string> = []
    for (let j = 0; j<this.contatos.length;j++){
      lista[j]= this.contatos[j].toString()+"\n"
    }
    return ""+ lista
  }

  public mostrar ():string {
    let lista:Array<string> = []
    for (let j = 0; j<this.contatos.length;j++){
      lista[j]= this.contatos[j].toString()+"\n"
    }
    return "- " + lista
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





