const Constraint = Matter.Constraint;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	roof=new Roof(350,200,400,20)

	ball=new Ball(200,480)
	ball2=new Ball(272,480)
	ball3=new Ball(351,480)
	ball4=new Ball(410,480)

	ball5=new Ball(500,480)
	rope=new Rope(ball.body,{x:200,y:200})
	rope2=new Rope(ball2.body,{x:270,y:200})
	rope3=new Rope(ball3.body,{x:350,y:200})
	rope4=new Rope(ball4.body,{x:430,y:200})
	rope5=new Rope(ball5.body,{x:510,y:200})

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(0);

  roof.display();
  
  ball.display();
  ball2.display()
  ball3.display()
  ball4.display()
  ball5.display()
  rope5.display()

  rope3.display()
  rope.display()
  rope2.display()
  rope4.display()

  drawSprites();
 
}
function mouseDragged(){
	Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}
function keyPressed(){
	if (keyCode===32){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:15,y:-95})
	}
}


