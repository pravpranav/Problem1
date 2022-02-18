var Barrier;
var Barrier1;


function preload(){
trackImage=loadImage("path.png");
boys=loadAnimation("Runner-1.png","Runner-2.png");

}


function setup(){
  
  createCanvas(400,400);
  
  Barrier1=createSprite(20,200,50,100);
  Barrier1.visible=false;
  Barrier=createSprite(380,200,50,100);
  Barrier.visible=false;
  
  

  tracks=createSprite(200,200);
  tracks.addImage(trackImage);
  tracks.velocityY=4;

  
  boy=createSprite(600,200,800,700);
  boy.addAnimation("running",boys);
  boy.scale=0.1;
  boy.collide(Barrier1);
  boy.collide(Barrier);
  
  
  ;
  
}

 function draw() {
  background(0);

  if(tracks.y>400){
    tracks.y=height/2;
  }
  
 
  
  boy.x=mouseX;

  
  
  drawSprites()

}
