var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600,200, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  fixedRect.velocityY=3;
  movingRect = createSprite(600,400,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  movingRect.velocityY=-3;
}

function draw() {
  background(0,0,0);  
  bounceOff(movingRect,fixedRect);

  
  drawSprites();
}
