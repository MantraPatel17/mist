
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bob1, bob2, bob3, bob4, bob5;
var chain;
var roof;

function setup() {
	createCanvas(1000, 600);

	engine = Engine.create();
	world = engine.world;

	Engine.run(engine);

	bob1 = new Bob(200,200,80,80);

	roof = new Roof(500,200,600,20)
	//chain = new Chain()
}


function draw() {
  rectMode(CENTER);

  background(0);
  
  bob1.display();

}