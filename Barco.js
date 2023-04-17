class Barco{
    constructor(x, y, width, height, posbar) {
    
     var options={
        restitucion: 0.8, //que se muevan los barquitos
        friction: 1, // habilidad de u objeto para desplazarse a travez de aie
        density: 1 //densidad, que simule que esta en el agua
        }
      this.body = Bodies.rectangle(x, y, width, height,options);
      this.width = width;
      this.height = height;
      this.boatPosition = posbar;
      this.barcos = loadImage("boat.png");//precargamos la imagen
      
      World.add(world, this.body); //Se añade el cuarpo al mundo 
    }
  
    display() {
      var angle = this.body.angle;
      var pos = this.body.position;//nueva variable
  
      push();
      translate(pos.x, pos.y);//para que tenga la animacion y se mueva
      //rotate(angle);
      imageMode(CENTER);
      image(this.barcos, 0, this.boatPosition, this.width, this.height);//al ser una imagen lo primero en meter tiene que ser la imagen (this.barcos)
      pop();
    }
}