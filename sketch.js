const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var rope,fruit,ground;
var fruit_con;

var bg_img;
var food;
var rabbit;

var button;
var bunny;

function preload()
{
  bg_img = loadImage('background.png');
  food = loadImage('melon.png');
  rabbit = loadImage('Rabbit-01.png');
}

function setup() 
{
  createCanvas(500,700);
  frameRate(80);

  engine = Engine.create();
  world = engine.world;


  
  rope = new Rope(8,{x:220,y:30});
  ground = new Ground(200,690,600,20);
  bunny = createSprite(200,620,100,100);
  bunny.addImage(rabbit);
 

  fruit = Bodies.circle(300,300,20);


  fruit_con = new Link(rope,fruit);

  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
  
}

function draw() 
{
  background(51);
  image(bg_img,0,0,displayWidth+80,displayHeight);

 
  imageMode(CENTER);


  rope.show();

  Engine.update(engine);
  ground.show();
  drawSprites();
   
}


