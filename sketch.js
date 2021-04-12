var fixedRect, movingRect, object1,object2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  fixedRect.velocityY = +5;

  movingRect = createSprite(400, 800,50,80);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  movingRect.velocityY = -5;
}


function draw() {
  background(0,0,0);  
  bounceOff(movingRect, fixedRect);
  drawSprites();
}