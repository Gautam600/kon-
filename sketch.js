const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var seond,minut,hou;
function setup() {
  createCanvas(800,400);
  //engine = Engine.create();
//	world = engine.world;
angleMode(DEGREES);
}

function draw(){
seond=second();
 minut=minute();
 hou=hour();
 translate(400,200);
 
  background(255,225,205); 
  push();
  seond = map(seond,0,60,0,360);
rotate(seond);
stroke(255,0,0);
strokeWeight(7);
line(0,0,100,0);
pop();

push();
minut =map(minut,0,60,0,360);
rotate(minut);
stroke(0,0,255);
strokeWeight(9);
line(0,0,75,0);
pop();

push();
hou=map(hou,0,60,0,360)
rotate(hou);
stroke(0,255,0);
strokeWeight(11);
line(0,0,50,0);
push(); 
  drawSprites();
}