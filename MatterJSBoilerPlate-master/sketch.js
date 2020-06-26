var ball, bin,ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	
//Create a Ground
	ground = Bodies.rectangle(width/2, 650, 800, 10 , {isStatic:true} );
	//ground.fill("brown");
	World.add(world, ground);
	 
	 dustbin = Bodies.rectangle(560, 660, 60, 40 , {isStatic:true} );
	// dustbin.fill("yellow");
 	World.add(world, ground);


 	 paper = new Ball();

	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  if(keyDown("downArrow")){
	Matter.Body.applyForce();
  }
  
  drawSprites();
 
}



