var wall1 , wall2 , wall3;
var engine , world ;
var ground , crumpledPaper,paperImg;
var binImg , bin;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
	binImg = loadImage("Images/dustbingreen.png")
	paperImg = loadImage("Images/paper.png")
}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;
    Engine.run(engine);
	//Create the Bodies Here.

	ground = new Ground();
	crumpledPaper = new Paper();

	bin = createSprite(964,520,20,20)
	bin.addImage(binImg)
	bin.scale=0.45;

	
	
	wall1Body = Bodies.rectangle(902,505,10,120,{isStatic : true})
	World.add(world,wall1Body)
	wall2Body = Bodies.rectangle(962,565,130,10,{isStatic : true})
	World.add(world,wall2Body)
	wall3Body = Bodies.rectangle(1024,505,10,120,{isStatic : true})
	World.add(world,wall3Body)
	
	
}


function draw() {
  Engine.update(engine)
  background("pink");
  
  drawSprites();

  crumpledPaper.display();
 
  ground.display();

  
 
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(crumpledPaper.body , crumpledPaper.body.position,{x:147,y:-180});
		
		
	}
	
}



