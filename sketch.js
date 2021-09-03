var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;

function preload(){
 
  jakeImg=loadAnimation("jake1.png", "jake2.png", "jake3.png", "jake4.png", "jake5.png");
  pathImg=loadImage("path.png");
  
}

function setup(){
  createCanvas(400,400);
  path=createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY=5;
  path.scale = 1.2;

  jake=createSprite(180,340,50,170);
  jake.addAnimation("running", jakeImg);
 
 
  leftBoundary=createSprite(0,300,100,600);
  leftBoundary.visible=false;

  rightBoundary=createSprite(390,300,80,600);
rightBoundary.visible=false;
}

function draw() {
  background(0);
  
  path.velocityY=5;

  jake.x=World.mouseX;
  
  if(path.y > 400 ){
    path.y = height/2;

  
  
}
  jake.collide(leftBoundary);
  jake.collide(rightBoundary);
  edges=createEdgeSprites();
  jake.collide(edges[3]);
drawSprites();
}


