
abstract class Veiculo {

  private ligado: boolean = true
  private modelo: string = ""

  constructor(marca: string){
    this.modelo = marca;

  }

  public isOn(): boolean{
    return this.ligado
  }

  public desligar():void {
    this.ligado = false;
  }

  public ligar():void{
    if(this.isOn()==false){
      this.ligado = true
    }
  }

  public getMarca(){
    return this.modelo;
  }

  public toString(){
    return this.modelo + " : " + (this.ligado ? "ligado ": "desligado");
  }

  abstract levarPassageiros():number

}


class Carro extends Veiculo{
  private velocidade: number = 150
  private cor: string
  public constructor (cor:string, modelo:string){
    super(modelo)
    this.cor = cor
  }
  public correr (){
    if(this.isOn()){
      console.log("O Carro alcançou a velocidade: "+ this.velocidade)
    } else {
      console.log("O Carro está desligado.")
    }
  }
  public toString(){
    return "Carro:" + this.cor + ":"+ super.toString();
  }
  public levarPassageiros(): number {
    console.log("Um carro possui um total de 5 lugares")  
    return 4
  }

}

class Moto extends Veiculo{
  private velocidade: number = 120
  private cor: string
  public constructor (cor:string, modelo:string){
    super(modelo)
    this.cor = cor
  }
  public correr (){
    if(this.isOn()){
      console.log("A Moto alcançou a velocidade: "+ this.velocidade)
    } else {
      console.log("A moto está desligada.")
    }
  }
  public toString(){
    return "Moto:" + this.cor + ":"+ super.toString();
  }
  public levarPassageiros(): number {
    console.log("Uma moto possui um total de 2 lugares")  
    return 1
  }

}

class Meu_Carro extends Carro{
  private capacidade:number
  public constructor(capacidade:number, cor:string){
    super(cor,"carro")
    this.capacidade = capacidade
  }
  public levarPassageiros(): number {
      return this.capacidade - 1
  }
}

function main(){
  let hb20 = new Carro ("azul","carro")
  console.log(hb20.toString())
  hb20.correr()
  hb20.desligar()
  hb20.correr()
  console.log(hb20.toString())
}

main();