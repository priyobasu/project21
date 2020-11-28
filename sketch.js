var bullet,wall,speed, weight,thickness,deformation ;
function setup() {
  createCanvas(1600,400);
 speed = Math.round(random(100,200));
  weight = Math.round(random(30,52));
  thickness=random(22,83);
  wall=createSprite(1200, 200, thickness, height/2);
bullet=createSprite(50, 200, 50, 50);
  bullet.shapeColor="white";
}

function draw() {
  background("black"); 
  drawSprites();
if(keyDown("space")) {
  bullet.velocityX=speed;
 }

    if(istouching(bullet,wall)) {
      bullet.velocityX=0;
      deformation=0.5 * weight * speed * speed/(thickness*thickness*thickness);
      if(deformation>10) {
        wall.shapeColor=color(255,0,0);
      }
      if(deformation<10) {
        bullet.shapeColor=color(0,255,0);
      }
    }
    
  textSize(20);
  text("Deformation: "+deformation,200, 50);
  text("Weight: "+weight,0,50)
  text("Speed: "+speed,540,50)
}

