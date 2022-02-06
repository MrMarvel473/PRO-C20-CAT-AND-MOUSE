var bg,tom1,tom2,tom3,jerry1,jerry2,jerry3;
var tom,jerry;
function preload() {
    //load the images here
    bg=loadImage("images/garden.png");
    tom1=loadAnimation("images/cat1.png");
    tom2=loadAnimation("images/cat2.png","images/cat3.png");
    tom3=loadAnimation("images/cat4.png");
    jerry1=loadAnimation("images/mouse1.png");
    jerry2=loadAnimation("images/mouse2.png","images/mouse3.png");
    jerry3=loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
tom=createSprite(850,600);
tom.addAnimation("tomSleeping",tom1);
tom.scale=0.2;
jerry=createSprite(200,600);
jerry.addAnimation("jerryEating",jerry1);
jerry.scale=0.15;
}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
if(tom.x-jerry.x<jerry.width/2-tom.width/2){
    tom.x=300;
    tom.velocityX=0;
    tom.addAnimation("tomSitting",tom3);
    tom.changeAnimation("tomSitting");
    jerry.addAnimation("jerryWatching",jerry3);
    jerry.changeAnimation("jerryWatching");
    tom.debug=true;
    jerry.debug=true;
   // tom.setCollider("rectangle",0,0,100,50);
    //jerry.setCollider("rectangle",0,0,100,50);
}
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode===LEFT_ARROW){
tom.velocityX=-5;
tom.addAnimation("tomWalking",tom2);
tom.changeAnimation("tomWalking");
jerry.addAnimation("jerryTease",jerry2);
jerry.changeAnimation("jerryTease");

}

}
