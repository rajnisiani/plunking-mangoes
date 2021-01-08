
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	boy = loadImage("images/boy.png")
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	ground = new Ground(600,height,1200,20);
	tree =  new Tree(800,680,10,10);
	stone = new Stone(100,600,10)
	mango1 = new Mango(800,100,10);
	mango2 = new Mango(600,200,10);
	mango3 = new Mango(600,100,10);
	mango4 = new Mango(600,100,10);
	mango5 = new Mango(700,200,10);
	sling = new Slingshot(stone.body, {x: 100,y:500})
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display()
  tree.display()
  stone.display()
  image(boy,100,450,200,300)
  drawSprites();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
 
}

function mouseDragged(){
    //if (gameState!=="launched"){
        Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
    //}
}


function mouseReleased(){
    sling.fly();
    gameState = "launched";
}


function detectcollision(Lstone,Lmango){
	mangoBodypositon=mango1.Body.postion
	stoneBodypostion=stone.Body.positon

	var distance=dist(stoneBodypositon.x,stoneBodypositon.y,mangoBodypostion.x,mangoBodypostion.y)
	if(distance<=mango1.r+stone.r){
		Matter.body.setStatic(mango1.body,false)
	}

}
