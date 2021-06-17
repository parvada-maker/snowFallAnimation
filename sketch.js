const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;


var engine,world




var bgImg;
var ground, snowbit;
var snow=[];
function preload()
{ bgImg=loadImage("snow2.jpg");




}
function setup() {
  createCanvas(800,400);
  
  engine = Engine.create();
    world = engine.world;
    createSprite(400, 200, 50, 50);
    ground=Bodies.rectangle(400,390,1600,10,{isStatic:true});
    World.add(world,ground)
    for (i=0;i<10;i++)
    {
    snow.push(snowbit= new Snow(random(1,800),random(1,400),random(10,50)))
   World.add(world,snowbit)
}

}

function draw() {
  background(bgImg);
  Engine.update(engine);
  push();
  rectMode(CENTER);
   rect(ground.position.x,ground.position.y,800,10)
   pop();
    for(i=0;i<10;i++){

   
    if (snow[i].body.position.y >=330)
    {
      Matter.Body.setPosition(snow[i].body,{x:random(1,800),y:random(1,400)})
    }
    
    snow[i].display();
  
    console.log(snow[i])
       }
  drawSprites();
}
