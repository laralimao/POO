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


class Cliente {
  nome:string;
  id: number
  tel: number

  constructor (nome:string, id:number, tel: number){
    this.nome = nome
    this.id = id
    this.tel = tel
  }
  public toString(){
    return this.nome + " - " + this.id;
  }
}

class Cinema {
  cadeiras = new Map<number, Cliente|null>();
  constructor (quantidade:number){
    this.cadeiras = new Map<number,Cliente>();
    for (let i =0; i<quantidade;i++){
      this.cadeiras.set(i,null)
    }
  }

  public toString(){
    let str = "cadeiras: | ";
    for(let pessoa of this.cadeiras.values()){
      str += pessoa != null ? pessoa.toString() : "vazia";
      str += " |";
    }
    return str;

  }


  Reservar(cliente:Cliente, indice:number):boolean{
    if(indice<0 || indice>=this.cadeiras.size){
      console.log("cadeira nao existe")
      return false
    }
    if(this.cadeiras.get(indice) != null){
      console.log("cadeira ocupada")
      return false
    }
    for (let pessoa of this.cadeiras.values()){
      if(pessoa != null && pessoa.id == cliente.id){
        console.log("Erro de ID")
        return false
      }
    }
    this.cadeiras.set(indice,cliente)
    return true
  }

  Cancelar(id:number):boolean{
    for (let i = 0;i<this.cadeiras.size;i++){
      if(this.cadeiras.get(i) != null && this.cadeiras.get(i)?.id == id){
        this.cadeiras.set(i,null)
        return true
      }
    }
    console.log("ID incorreta")
    return false
  }

  removerPorNome (nome:string): Cliente | null {
    for (let i = 0;i<this.cadeiras.size;i++){
      if(this.cadeiras.get(i) != null && this.cadeiras.get(i)?.nome == nome && this.cadeiras.get(i) != undefined){
        let a = this.cadeiras.get(i)
        this.cadeiras.set(i,null)
        if(a!=undefined)
        return a
      }
    }
    console.log("Nome incorreto")
    return null
  }
}


let sala = new Cinema(3)
console.log(""+sala)
let pessoa1 = new Cliente("JOAO",13,99)
let pessoa2 = new Cliente("Carlos",1,88)
sala.Reservar(pessoa2,0)
sala.Reservar(pessoa1,2)
console.log(""+sala)
console.log(sala)
sala.Cancelar(1)
console.log(""+sala)
sala.Reservar(pessoa1,0)
console.log(""+sala)
sala.removerPorNome("JOAO")
console.log(""+sala)



