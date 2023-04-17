const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world,ground;
var basecañon;
var verbarcos;
var bolas=[];


function preload() {
 fondo = loadImage("background.gif");
 imgtorre = loadImage("tower.png");
}


function setup() {
  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  
  var optionscuerpo={
    isStatic: true
  }

  //Cambie ground por body
  ground = Bodies.rectangle(0, height - 1, width * 2, 1, optionscuerpo);
  World.add(world, ground);

  angleMode(DEGREES);  //que este en grados
  var angle=25; //variable de 25 grados

  var optionstorre={
    isStatic: true
  }

  torre = Bodies.rectangle(160,350, 160, 310, optionstorre);
  World.add(world, torre);

  basecannon = new Cannon(180, 110, 130, 100, angle);

  verbarcos= new Barco(1000, 560, 170, 170, -80);
}



function draw(){
  image(fondo, 0,0,1200,600);

  Engine.update(engine);
 
  push();
  translate(ground.position.x, ground.position.y);
  rect(0, 0, 1200, 25);
  pop();

  push();
  imageMode(CENTER);
  image(imgtorre, torre.position.x, torre.position.y, 160, 310);
  pop();

  basecannon.ver(); //primero el nombre de la variable que puse arriba y luego de la funcion

  for(var i=0; i<bolas.length; i++){ //para que recorra toda la matris
    showcanon(bolas[i], i);
  }

 Matter.Body.setVelocity(verbarcos.body, {x:-0.9, y:0}); //primero ponemos lo que queremos mover y luego entre llaver la velocidad que queremos que se mueva
  verbarcos.display();
}



function keyReleased(){ //para que mande a llamar mi funcion de diparar cuando presionon la barra espaciadora
  if(keyCode==LEFT_ARROW){
    bolas[bolas.length-1].lanzar();
  }
}



function keyPressed(){ //esta funcion sirve para que cada vz que presionemos el boton mande a llamar la plantilla de la bola de cañon y se crean muchas bolas
  if(keyCode==LEFT_ARROW){
  boladecanon= new Boladecannon(basecannon.x, basecannon.y); //creo el cuerpo, le pongo que la posicion es igual a la de la base del cañon
  bolas.push(boladecanon); // meti la bola de cañon detro de la matris de las bolas
  }
}



function showcanon(bola, i){ //para que se vean las pelotas que meti a la matris (que se vean muchas pelotas)
 if(bola){
 bola.pelota(); //un elemento de la matris punto la funcion que quiero que realice
 }
}
