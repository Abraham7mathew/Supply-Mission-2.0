var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,s1,s2,s3
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
	createCanvas(800, 700);
	rectMode(CENTER);
	
	groundSprite=createSprite(width/2, height-35, width,20);
	groundSprite.shapeColor=color(255)

	s1Sprite=createSprite(150, height-35, 200,20);
	s1Sprite.shapeColor='red'
	
	s2Sprite = createSprite(50, height-75, 20,100);
	s2Sprite.shapeColor = 'red'

	s3Sprite = createSprite(250, height-75, 20,100);
	s3Sprite.shapeColor = 'red'

	packageSprite=createSprite(175, 200, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(175, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6


	engine = Engine.create();
	world = engine.world;

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 20 , {isStatic:true} );
 	World.add(world, ground);

	packageBody = Bodies.circle(175 , 200 , 10,{restitution:1,isStatic:true});
	World.add(world, packageBody);

	s2 = Bodies.rectangle(50,650,20,100,{isStatic:true});
	World.add(world, s2);
	
	s3 = Bodies.rectangle(250,650,20,100,{isStatic:true});
    World.add(world, s3);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false)
  }
}



