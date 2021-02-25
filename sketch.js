var fairy,fairyAnimation
var bg,bgImage
var star,starImg
var music





function preload()
{
   //preload the images here
      
   fairyAnimation=loadAnimation("images/fairy1.png","images/fairy2.png")
    bgImage=loadImage("images/starnight.png")
    starImg=loadImage("images/star.png")
    music=loadSound("sound/joyMusic.mp3")


}

function setup() {
  createCanvas(800, 800);
  bg=createSprite(800,750)
  bg.addImage(bgImage)


  fairy=createSprite(75,480)
  fairy.addAnimation("moving",fairyAnimation)
  fairy.scale=0.2

  star=createSprite(621,60)
  star.addImage(starImg)
  star.scale=0.3
  
  
    
}


function draw() {
  background("black");
  

if(keyDown("right_arrow")){
  fairy.x=fairy.x+10
  music.play();
}

if(keyDown("left_arrow")){
  fairy.x=fairy.x+-10
}

if(keyDown("down_arrow")){
  star.velocityY=5
  
}

if(star.y>470){
  music.stop();
  star.velocityY=0
  
}
                           







drawSprites();


fill("white")
text(mouseX + ',' + mouseY,10,45);
}
