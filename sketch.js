
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup()
{
	createCanvas(1000, 500);


	engine = Engine.create();
	world = engine.world;


	roof = new Roof(460,100,330,30);

	ball1 = new Ball(350,300,50,50);
  ball2=new Ball(400,300,50,50)
ball3=new Ball(450,300,50,50)
ball4=new Ball(500,300,50,50)
ball5=new Ball(550,300,50,50)
  rope2 = new Rope(ball2.body,{x : 400, y : 100})
  rope3 = new Rope(ball3.body,{x : 450, y : 100})
  rope4 = new Rope(ball4.body,{x : 500, y : 100})
  rope5 = new Rope(ball5.body,{x : 550, y : 100})
	rope1 = new Rope(ball1.body,{x : 350, y : 100})


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("skyblue");
  
  roof.display();
  drawSprites();



  
  rope1.display();	
  rope2.display();	
  rope3.display();	
  rope4.display();	
  rope5.display();	
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  fill("red");
  textSize(30)
 // text("x : "+mouseX+" y : "+mouseY,mouseX,mouseY)
 
}



function keyPressed()
{ if(keyCode===LEFT_ARROW){ Matter.Body.applyForce(ball1.body,ball1.body.position,{x:160,y:-160}); } }
