

class Entity {
  x:number;
  y:number
  step:number;
  image:p5.Image;
  buraco:boolean

  constructor(x:number, y:number, step:number, image:p5.Image) {
    this.x = x;
    this.y = y;
    this.step = step;
    this.image = image;
    this.buraco = false;
  }

  draw():void{
    if(this.buraco==false){
      image(this.image, this.x * this.step, this.y*this.step, this.step, this.step)

    }
    else {console.log("O Lobo caiu no Buraco!")}

  }
}

class Board {
nl:number;
nc:number;
step:number;
background:p5.Image

constructor(nl:number, nc:number, step:number, background:p5.Image){
  this.nl = nl;
    this.nc = nc;
    this.step = step;
    this.background = background;
}

draw():void{
  image(this.background,0 ,0 , this.nc * this.step, this.nl*this.step)
  for(let x = 0; x < this.nc; x++){
    for(let y = 0; y < this.nc; y++){
      noFill();
      stroke(250);
      strokeWeight(2);
      rect(x*this.step,y*this.step,this.step,this.step)



    }
  }

}

}

let x: number = 0;
let y: number = 0;
let step:number = 100;
let wolf_img: p5.Image ;
let rabbit_img:p5.Image;
let hole_img:p5.Image;
let board_img:p5.Image;
let wolf:Entity
let rabbit:Entity
let hole:Entity
let board:Board

function LoadImg (path: string): p5.Image {
  return loadImage(
    path,
    () => {console.log("Loading" + path + " ok")},
    () => {console.log("Loading" + path + " error")}
  )

}

function preload() {
  wolf_img = LoadImg('../sketch/lobo.png')

  rabbit_img = LoadImg('../sketch/coelho.png')

  hole_img = LoadImg('../sketch/buraco.png')

  board_img = LoadImg('../sketch/grama.jpg')

}

function keyPressed () {
  if(keyCode === LEFT_ARROW) {
    wolf.x--;
  }
  else if (keyCode === RIGHT_ARROW){
    wolf.x++;
  }
  else if (keyCode === UP_ARROW){
    wolf.y--;
  }
  else if (keyCode === DOWN_ARROW){
    wolf.y++;
  }

  if(keyCode === "A".charCodeAt(0)) {
    rabbit.x--;
  }
  else if (keyCode === "D".charCodeAt(0)){
    rabbit.x++;
  }
  else if (keyCode === "W".charCodeAt(0)){
    rabbit.y--;
  }
  else if (keyCode === "S".charCodeAt(0)){
    rabbit.y++;
  }


}

function check (){
  let Ok:boolean = true
  if(wolf.x==rabbit.x && wolf.y==rabbit.y){
    Ok = false
  }

  return Ok

}

function caiu (){
  let cair:boolean = false 
  if(wolf.x==hole.x && wolf.y==hole.y){
    wolf.buraco == true
    cair = true 
  }
  
  return cair 
}

function setup() {
  
  let size = 100
  wolf = new Entity(7,7,size,wolf_img)
  rabbit = new Entity(0,0,size,rabbit_img)
  hole = new Entity(4,4,size,hole_img)
  board = new Board(8,8,size,board_img)
  createCanvas(board.nc*size,board.nl*size);
    
}


function draw(){
  if(check()){
    board.draw()
    if(caiu()==false){
      wolf.draw();
    }
    rabbit.draw();
    hole.draw()
    //image(wolf_img, x*step, y*step, step, step)
  }
  else{
    background(250);
    print("O Lobo comeu o coelho!")
  console.log("O Lobo comeu o Coelho!")}
}