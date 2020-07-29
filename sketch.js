var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(700, 700);
	rectMode(CENTER);
	
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color("red")
	
	ground1Sprite=createSprite(550,height-80,20,100);
	ground1Sprite.shapeColor=color("red")

	ground2Sprite=createSprite(150,height-80,20,100);
	ground2Sprite.shapeColor=color("red")
	//ground1Sprite=createSprite(300,0,5,0);


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 3 , {restitution:1, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 //groundSprite.shapeColor=color("red")
	//create the vertical ground
	ground1 = Bodies.rectangle(width/2,50, width, 10 , {isStatic:true} );
	World.add(world, ground1);
	Engine.run(engine);

	
	
}


function draw() {
Engine.update(engine);
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
 
  rect(ground.position.x,ground.position.y,400,20);

    ellipseMode(RADIUS);
  
	drawSprites();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	// Look at the hints in the document and understand how to make the package body fall only on
	Matter.Body.setStatic(packageBody, false);
    ellipse(packageBody.position.x, packageBody.position.y, 20, 20);
  }
}



