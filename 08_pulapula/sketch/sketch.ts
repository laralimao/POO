class Kid {
  nome:string;

  constructor (nome:string){
    this.nome = nome
  }
  public toString(){
    return this.nome;
  }
}

class Pulapula {
  brincando: Array<Kid>
  espera:Array<Kid>

  constructor (){
    this.brincando = [];
    this.espera = []
  }

  public toString(){
    let str = "brincando: | ";
    for(let pessoa of this.brincando){
      str += pessoa.toString();
      str += " | ";
    }
    str += "\nespera: ";
    for(let pessoa of this.espera){
      str += pessoa.toString() + " ";
    }
    return str;

  }

  chegarPessoa(pessoa:Kid):void{
    this.espera.push(pessoa);
  }

  chamarParaBrincar():boolean{
    if(this.espera == null){
      console.log("fila de espera vazia")
      return false
    }
    let pessoa = this.espera.shift();
    this.brincando.push(pessoa);
    return true
  }

  sairBrinquedo():boolean{
    if(this.brincando == null){
      console.log("brinquedo vazio")
      return false
    }
    let pessoa = this.brincando.shift()
    this.espera.push(pessoa)
    return true
  }

  removerPorNome (nome:string): Kid | null {
    for (let i = 0; i < this.brincando.length;i++){
      let pessoa = this.brincando[i]
      if (pessoa.nome == nome){
        this.brincando.splice(i,1);
        return pessoa
      }
    }
    for (let i = 0; i < this.espera.length;i++){
      let pessoa = this.espera[i]
      if (pessoa.nome == nome){
        this.espera.splice(i, 1);
        return pessoa
      }
    }
    return null
  }


}


let brinquedo = new Pulapula()
console.log(""+brinquedo)
let pessoa1 = new Kid("JOAO")
let pessoa2 = new Kid("Carlos")
brinquedo.chegarPessoa(pessoa1)
brinquedo.chegarPessoa(pessoa2)
console.log(""+brinquedo)
brinquedo.chegarPessoa(new Kid("Adam"));
console.log("" + brinquedo);
brinquedo.chegarPessoa(new Kid("Ricardo"));
brinquedo.chegarPessoa(new Kid("Josue"));
brinquedo.chamarParaBrincar();
brinquedo.chamarParaBrincar();
brinquedo.chamarParaBrincar();
brinquedo.chamarParaBrincar(); //errado, ja tem alguem no caixa
console.log(""+brinquedo)
console.log("Antes")
brinquedo.sairBrinquedo();
console.log("Depois")

console.log(""+brinquedo)
brinquedo.removerPorNome("JOAO")
console.log(brinquedo.chamarParaBrincar())
console.log(""+brinquedo)
brinquedo.sairBrinquedo();
console.log(""+brinquedo)
brinquedo.chamarParaBrincar()
console.log(""+brinquedo)
