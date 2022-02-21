
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

	//Crie os Corpos Aqui.
     var plane_options = {
		 isStatic:true
	 }
     plane = Bodies.rectangle(600,580,1200,2,plane_options)
	 World.add(world,plane)
    var block1_options = {
	restitution:3,
	friction:0.2,
	frictionAir:0
}
	 block1 = Bodies.circle(220,10,20,block1_options)
	 World.add(world,block1)

	 Engine.run(engine);
	 var block2_options = {
		restitution:0.1,
		friction:0,
		frictionAir:0.00000000000001
	} 
	 block2 = Bodies.circle(100,10,20,block2_options)
	 World.add(world,block2)
	 
	 var block3_options = {
		 restitution:3,
		 friction:0.02,
		 frictionAir: 0.1
	 }
	 block3 = Bodies.circle(300,10,20,block3_options)
	 World.add(world,block3)
	 fill("green")
	}


function draw() {
  rectMode(CENTER);
  background(0);
  rect(plane.position.x,plane.position.y,1200);
  ellipse(block1.position.x,block1.position.y,30)
  drawSprites();
  ellipse(block2.position.x,block2.position.y,40)
  rect(block3.position.x,block3.position.y,100,50)
 
}



