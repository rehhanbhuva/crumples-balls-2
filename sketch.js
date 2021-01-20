
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper;
var ground;
var dustbin1,dustbin2,dustbin3;
var image1;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);
	



	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	 paper=new Paper(100,100,20);
	 ground=new Ground(600,height,1200,20)
	 dustbin1=new Dustbinclass(1000,290,20,200)
	 dustbin3=new Dustbinclass(1150,290,20,200)
	 image1=loadImage("sprites/dustbingreen.png");
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(345);
  paper.display();
  ground.display();
  dustbin3.display();
  dustbin1.display();
  
  image(image1, 1000,290,100,100);

  if(keyDown(UP_ARROW)){
	  Matter.Body.applyForce(paper.body,paper.body.position,{x:8,y:-8})
  }
  
  drawSprites();
 
}



