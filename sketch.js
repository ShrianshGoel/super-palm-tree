var cat ,c,c2,c3
var mouse,m1,m2,m3


var backgroun

function preload() {
    //load the images here
    c1 = loadAnimation("images/cat1.png")
    c2=loadAnimation("images/cat2.png","images/cat3.png")
c3=loadAnimation("images/cat4.png")

m1=loadAnimation("images/mouse1.png")
m2=loadAnimation("images/mouse2.png","images/mouse3.png")
m3=loadAnimation("images/mouse4.png")

backgroun = loadImage("images/garden.png")

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

}

function draw() {
image(backgroun,500,400)
    background(255);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
