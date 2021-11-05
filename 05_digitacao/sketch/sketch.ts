
class Bolha {
  x: number;
  y: number;
  letter: string;
  speed: number;
  static diam: number = 60;
  alive: boolean = true;
  
  constructor(x: number, y: number, letter: string, speed:number) {
    this.x = x;
    this.y = y;
    this.letter = letter;
    this.speed = speed
  }

  update(): void{
    this.y = this.y + this.speed
  }

  draw(): void{
    fill(255);
    stroke(255);
    circle(this.x,this.y,Bolha.diam);
    fill(0);
    stroke(0);
    textSize(15);
    text(this.letter, this.x-5,this.y+5);
  }

}



class Tela {
  bolhas: Bolha[] = [];
  y: number;
  alphabet: string[] ;
  timer: number = 0;
  static timeout: number = 30;
  
  hits:number = 0;
  errors:number =  0;
  
  constructor(){//x: number, y: number, letter: string, speed:number) {
    this.bolhas = [new Bolha(100,100,"a",1)]
    this.bolhas.push(new Bolha(200,100,"b",2))
  }

  update(): void{
    this.checartempobolha();
    this.marcarbolhafora();
    for(let i in this.bolhas){
      this.bolhas[i].update();
    }
    this.removerbolhasmortas();
  }

  marcarbolhafora():void{
    for(let bolha of this.bolhas)
      if(bolha.y + Bolha.diam >= height){
        bolha.alive = false;
        this.errors++
      }
  }

  removerbolhasmortas():void{
    //this.bolhas = this.bolhas.filter(b =>b.alive)
    let vivos:Bolha[]=[]
    for(let bolha of this.bolhas)
      if(bolha.alive)
        vivos.push(bolha);
    this.bolhas = vivos;
  }

  removeracertos(code:number):void{
    for(let bolha of this.bolhas)
      if (bolha.letter[0].toUpperCase().charCodeAt(0) == code){
        bolha.alive = false;
        this.hits++
        break
      }
        
  }

  checartempobolha():void{
    this.timer -= 1;
    if(this.timer <= 0){
      this.addbolha();
      this.timer = Tela.timeout;
    }
}

  addbolha():void{
    let x = random(0,width-Bolha.diam);
    let y = -Bolha.diam;
    let letter = random(["1","2","3","4","5","6","7","8","9","0", "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","x","y","z"])
    let speed = random(1,5)
    this.bolhas.push(new Bolha(x,y,letter,speed))
  }

  draw(): void{
    stroke("white");
    fill("white");
    textSize(30)
    text("Acertos: " + this.hits + " Erros: " + this.errors + " Ativas: " + this.bolhas.length,30,30);  

    for(let i in this.bolhas){
      this.bolhas[i].draw();
    }
  }

}

class Game {
  activeFunction: () => void;
  board: Tela;

  constructor (){
    this.board = new Tela();
    this.activeFunction = this.gamePlay
  }

  gamePlay(){
    this.board.update();
    background(50,50,50);
    this.board.draw();
    if (this.board.errors >= 5){
      this.activeFunction = this.gameOver
    }

  }


  gameOver(){
    background(255,0,0)
    fill(0)
    textSize(100);
    text("Game Over", 50, 300);
  }

}

let game:Game


let quadro:Tela

function setup() {
  createCanvas(800,600);
  frameRate(30);
  game  = new Game();

}

function keyPressed(){
  game.board.removeracertos(keyCode);
}


function draw(){
  game.activeFunction();
}