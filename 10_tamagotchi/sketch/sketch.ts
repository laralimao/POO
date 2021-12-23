let maximo:number = 10;

class Pet {
  private saciedade:number;
  private energia:number
  private limpeza: number
  private diamantes:number
  private idade: number


  constructor (){
    this.saciedade = maximo 
    this.energia = maximo
    this.limpeza = maximo
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
      this.energia = maximo;
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
      this.limpeza = maximo;
      this.idade += 2;
      if(this.checarSaude()){
        console.log("Pet está Tomando banho.")
      }
      return
    }
      console.log("Pet está morto.")
    
  }



  public getSaciedade():number{
    return this.saciedade;
  }

  public getEnergia():number{
    return this.energia;
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


let bixo = new Pet()
bixo.Jogar()
console.log(bixo.getEnergia())
bixo.Jogar()
bixo.Show()
bixo.Jogar()
bixo.Show()
bixo.Jogar()
bixo.Show()
bixo.Jogar()


