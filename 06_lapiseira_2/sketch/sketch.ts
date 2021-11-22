class Grafite {
    calibre: number;
    dureza: string;
    tamanho: number;
    constructor(calibre: number, dureza: string, tamanho: number) {
        this.calibre = calibre;
        this.dureza = dureza;
        this.tamanho = tamanho;
    }
  
    gastoPorFolha(): number {
        if (this.dureza === 'HB')
            return 1;
        if (this.dureza === '2B')
            return 2;
        if (this.dureza === '4B')
            return 4;
        if (this.dureza === '6B')
            return 6;
        return 0;
    }
  
    toString(): string {
        //return "Grafite: " + this.calibre + ":" + this.dureza + ":" + this.tamanho;
        return `Grafite ${this.calibre}:${this.dureza}:${this.tamanho}`;
    }
  }
  
  //agregação
  class Lapiseira {
    calibre: number;
    grafites: Array<Grafite | null>;
    capacidade: number
  
    constructor(calibre: number,capacidade:number) { //é a lapiseira que cria o grafite?
        this.calibre = calibre;
        this.grafites = [];
        this.capacidade = capacidade;
    }
  
    setGrafite(grafite: Grafite, quantidade: number): boolean {
        if (this.grafites != null && this.grafites.length == this.capacidade) {
            console.log("A lapiseira já está lotada.");
            return false;
        }
        if (grafite.calibre != this.calibre) {
            console.log("O grafite não é compatível com a lapiseira");
            return false;
        }
        while (quantidade > 0){
          this.grafites.push(grafite);
          quantidade --
        }
        return true;
    }
  
    removerGrafite(): Grafite | null {
        if (this.grafites == null) {
            console.log("A lapiseira não possui um grafite");
            return null;
        }
        let grafite = this.grafites[this.grafites.length-1];
        this.grafites.pop;
        return grafite;
    }
  
    escrever(folhas: number): boolean {
        //verificar se existe grafite
        if (this.grafites == null) {
            console.log("A lapiseira não possui um grafite");
            return false;
        }
        let gasto = this.grafites[this.grafites.length-1].gastoPorFolha() * folhas;
        if (gasto < this.grafites[this.grafites.length-1].tamanho) {
            console.log("Escrita concluida");
            this.grafites[this.grafites.length-1].tamanho -= gasto;
            return true
        } else if (gasto <= this.grafites[0].tamanho*(this.grafites.length-1) + this.grafites[this.grafites.length-1].tamanho){
            while (gasto > 0){
              if (gasto > this.grafites[this.grafites.length-1].tamanho){    
                  gasto = gasto - this.grafites[this.grafites.length-1].tamanho
                  this.grafites.pop;
              } else {
                  this.grafites[this.grafites.length-1].tamanho -= gasto
              }
            }
            console.log("Escrita concluida");
            return true
  
        } else {
            let realizado = 0
            while (this.grafites.length > 0){
              realizado = realizado + this.grafites[this.grafites.length-1].tamanho / this.grafites[this.grafites.length-1].gastoPorFolha()
              this.grafites.pop
            }
            console.log("Escrita parcial: " + realizado + " folhas");
            return false
        }      
    }
  }
  
  let pentel = new Lapiseira(0.5,4);
  pentel.setGrafite(new Grafite(0.5, "HB", 40),2);
  pentel.escrever(10);
  pentel.escrever(40);
  console.log(pentel);