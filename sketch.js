
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var stone;
var BoyImage,MangoImage,TreeImage,StoneImage;
var mango1,mango2,mango3,mango4,mango5;
var sling;


function preload(){
  BoyImage = loadImage("sprites/boy.png");
  TreeImage = loadImage("sprites/tree.png");
}
function setup() {
	createCanvas(900, 700);


	engine = Engine.create();
	world = engine.world;
   mango1 = new Mango(400,140);
   mango2 = new Mango(300,120);
   mango3 = new Mango(350,80);
   mango4 = new Mango(280,60);
   mango5 = new Mango(230,100);
   stone = new Stone(130,500);
   sling = new String(stone.body,{x:130,y:500});
  //Create the Bodies Here.
 
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  image(BoyImage,100,450,200,200);
  image(TreeImage,340,60,500,550);
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  stone.display();
  sling.display();
  detectcollision(stone,mango1);
  detectcollision(stone,mango2);
  detectcollision(stone,mango3);
  detectcollision(stone,mango4);
  detectcollision(stone,mango5);
  drawSprites();
}



function mouseDragged(){

Matter.Body.setPosition(stone.body,{x:mouseX , y:mouseY})

}




function mouseReleased(){

sling.fly()

}


function detectcollision(mango,stone){

  mangoBodyPosition = mango.body.position
  stoneBodyPosition = stone.body.position

  var distance  = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
  if(distance<=mango.r+stone.r){

    Matter.Body.setStatic(mango.body,false)
  }
}


function keyPressed(){

  if(keyCode===32){

   Matter.body.setPosition(stone.body,{x:130 , y:500})
  launcherObject.attach(stone.body)


  }
}