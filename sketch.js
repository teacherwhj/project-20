var car, wall;
var speed, weight;

function setup() {
  createCanvas(1600,400);
  car = createSprite(50, 200, 50, 50);
  
  wall= createSprite(1500, 200,100, height/2);
  wall.shapeColor='black';
  speed=random(55,90);
  weight=random(400,1500);

}

function draw() {
  background(255,255,255);  
  car.velocityX=speed;
  
  if( wall.x-car.x < (wall.width + car.width)/2){
    car.velocityX=-0.1;
    var deformation= (0.5*weight*speed*speed)/22500;
    console.log(deformation);
    if(deformation<80){
      car.shapeColor='green';
      
    }
    else if(deformation>80 && deformation<180){
      car.shapeColor=color(230,230,0);
    }
    else{
      car.shapeColor=color(255,0,0);
    }
  }
  drawSprites();
}










