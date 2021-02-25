const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


function setup(){
    canvas = createCanvas(windowWidth/2, windowHeight/1.5)
    engine = Engine.create()
    world = engine.world

    bob1 = new bob(240,500,40)
	bob2 = new bob(320,500,40)
	bob3 = new bob(400,500,40)
	bob4 = new bob(480,500,40)
	bob5 = new bob(560,500,40)

	Roof = new roof(400,200,400,30)
                    
    let canvasmouse = Mouse.create(canvas.elt)
    canvasmouse.pixelRation = pixelDensity()
    let options = {
        mouse: canvasmouse
    }
    mConstraint = MouseConstraint.create(engine,options)
    World.add(world,mConstraint)

}

function display(){
    background(255)
  rectMode(CENTER);
  bob1.display()
  bob2.display()
  bob3.display()
  bob4.display()
  bob5.display()
  Roof.display()

  mouseDragged()
  drawSprites()
}

function mouseDragged(){
    Matter.Body.setPosition(bob1.body,{x:mouseX, y:mouseY})
}