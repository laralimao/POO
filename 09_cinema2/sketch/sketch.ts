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
  cadeiras: Array<Cliente | null>

  constructor (quantidade:number){
    this.cadeiras = [];
    for (let i =0; i<quantidade;i++){
      this.cadeiras.push(null)
    }
  }

  public toString(){
    let str = "cadeiras: | ";
    for(let pessoa of this.cadeiras){
      str += pessoa != null ? pessoa.toString() : "vazia";
      str += " |";
    }
    return str;

  }


  Reservar(cliente:Cliente, indice:number):boolean{
    if(indice<0 || indice>=this.cadeiras.length){
      console.log("cadeira nao existe")
      return false
    }
    if(this.cadeiras[indice] != null){
      console.log("cadeira ocupada")
      return false
    }
    for (let i = 0; i<this.cadeiras.length-1;i++){
      let pessoa = this.cadeiras[i]
      if(pessoa != null && pessoa.id == cliente.id){
        console.log("Erro de ID")
        return false
      }
    }
    this.cadeiras[indice] = cliente;
    return true
  }

  Cancelar(id:number):boolean{
    for (let i = 0; i<this.cadeiras.length-1;i++){
      let pessoa = this.cadeiras[i]
      if(pessoa != null && pessoa.id == id){
        this.cadeiras[i] = null
        return true
      }
    }
    console.log("ID incorreta")
    return false
  }

  removerPorNome (nome:string): Cliente | null {
    for (let i = 0; i < this.cadeiras.length;i++){
      let pessoa = this.cadeiras[i]
      if (pessoa != null && pessoa.nome == nome){
        this.cadeiras[i] = null;
        return pessoa
      }
    }
    return null
  }


}


let sala = new Cinema(3)
console.log(""+sala)
let pessoa1 = new Cliente("JOAO",13,99)
let pessoa2 = new Cliente("Carlos",1,88)
sala.Reservar(pessoa2,1)
sala.Reservar(pessoa1,3)
console.log(""+sala)
console.log(sala)
sala.Cancelar(1)
console.log(""+sala)
sala.Reservar(pessoa1,2)
console.log(""+sala)
sala.removerPorNome("JOAO")
console.log(""+sala)
