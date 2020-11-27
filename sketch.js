var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var dropzone
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground
var ball

var bottom,left,right;



function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);
	
    //dropzone=createSprite(200,200,200,200)
	

	
	engine = Engine.create();
	world = engine.world;

	


	
	 
	 bottom = new Box(1100,650,200,20);
	 left = new Box (1200,600,20,80);
	 right= new Box(1000,600,20,80)
	 ground=new Ground (800,665,1600,10)
	 ball=new Ball(100,400,40)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
 
  bottom.display();
  left.display();
  right.display();
  ground.display();
  ball.display();
  
 
}

function keyPressed() {
 if (keyCode === UP_ARROW) {
	// Look at the hints in the document and understand how to make the package body fall only on
     Matter.Body.applyForce(ball.body,ball.body.position,{x :60 ,y : -100})
    
  }
}



