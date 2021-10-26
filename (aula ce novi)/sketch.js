var quadrado;

function setup() {
  createCanvas(400,400);
  quadrado = createSprite(200,200,50,50);
} 

function draw() 
{
  background("blue");
  if(keyIsDown(UP_ARROW) ){
    quadrado.position.y = quadrado.position.y -5
  }
  if(keyIsDown(DOWN_ARROW) ){
    quadrado.position.y = quadrado.position.y +5
  }
  if(keyIsDown(RIGHT_ARROW) ){
    quadrado.position.x = quadrado.position.x +5
  }
  if(keyIsDown(LEFT_ARROW) ){
    quadrado.position.x = quadrado.position.x -5
  }
  drawSprites();
}




