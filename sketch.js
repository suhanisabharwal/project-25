
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paperObject;
var part1;
var part2;
var part3;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	boxleftSprite=createSprite(450, 610, 20,100);
	 boxleftSprite.shapeColor=color(255,0,0);
	  boxBase=createSprite(550, 650, 200,20);
	   boxBase.shapeColor=color(255,0,0);
		boxrightSprite=createSprite(650 , 610, 20,100); 
		boxrightSprite.shapeColor=color(255,0,0);
	part1 = createSprite(500, 610, 20, 100);
	part1.shapeColor = "red"; 
	part2 = createSprite(550, 610, 20, 100);
	part2.shapeColor = "red"; 
	part3 = createSprite(600, 610, 20, 100);
	part3.shapeColor = "red"; 
	paperObject = new paper(200, 450, 40);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paperObject.display();
  drawSprites();
 
}
function keyPressed() { 
	if (keyCode === UP_ARROW)
	 { Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:55,y:-55});
	 } }




