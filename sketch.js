var cat ,c,c2,c3
var mouse,m1,m2,m3


var backgroun,b1

function preload() {
    //load the images here
    c1 = loadAnimation("https://shrianshgoel.github.io/super-palm-tree/images/cat1.png")
    c2=loadAnimation("https://shrianshgoel.github.io/super-palm-tree/images/cat2.png","images/cat3.png")
c3=loadAnimation("https://shrianshgoel.github.io/super-palm-tree/images/cat4.png")

m1=loadAnimation("https://shrianshgoel.github.io/super-palm-tree/images/mouse1.png")
m2=loadAnimation("https://shrianshgoel.github.io/super-palm-tree/images/mouse2.png","images/mouse3.png")
m3=loadAnimation("https://shrianshgoel.github.io/super-palm-tree/images/mouse4.png")

backgroun = loadImage("https://shrianshgoel.github.io/super-palm-tree/images/garden.png")

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    b1=createSprite(500,400);
    b1.addImage(backgroun);
    b1.scale = 2


    cat=createSprite(850,620)
    cat.addAnimation("c1",c1)
    cat.addAnimation("c2",c2)
    cat.addAnimation("c3",c3)
    cat.scale=0.14

    mouse=createSprite(150,620)
    mouse.addAnimation("m1",m1)
    mouse.addAnimation("m2",m2)
    mouse.addAnimation("m3",m3)
    mouse.scale=0.14
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide


keyPressed()
mouse.debug = true
cat.debug = true

if(mouse.IsTouching==="cat"){
    mouse.changeAnimation("m3",m3)
    cat.changeAnimation("c3",c3)
    
}
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

   if(cat.IsTouching!="mouse") {
   if (keyIsDown(LEFT_ARROW)){
    cat.x=cat.x-5
    cat.changeAnimation("c2",c2)
    mouse.changeAnimation("m2",m2)
}
if(keyWentUp(LEFT_ARROW)){
    cat.changeAnimation("c1",c1)
    mouse.changeAnimation("m1",m1)
}
}}
