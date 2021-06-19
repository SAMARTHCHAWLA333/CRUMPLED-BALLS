
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var paper;
var dustbin;
var engine;
var world;

function setup() {
	 var canvas = createCanvas(800, 700);
     rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(200,450,70);
	dustbin = new Dustbin(1200,650,50,50);
	ground = new Ground(width/2,670,width,20);

	{
		isStatic: true;
	}
    World.add(world,ground);
	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  paper.display();
  dustbin.display();

  drawSprites();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
	  Matter.body1.applyForce(paperObject.body,paperObject.body.position,{
		  x:85,y:-85
		})
	}
  }
