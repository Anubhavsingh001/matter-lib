
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ground

function setup()
{
  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;
  var ball_option={
  restitution:.5

  }

  ball=Bodies.circle(200,100,30,ball_option);
  World.add(world, ball);
  console.log(ball.position.x)
  
  var ground_option={
    isStatic:true
  }
   ground=Bodies.rectangle(200,380,400,20,ground_option);
   World.add(world, ground);
   

}

function draw() 
{
  background(51);
  Engine.update(engine)
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,30)

  
  rectMode(CENTER)
   rect(ground.position.x,ground.position.y,400,20)





}

