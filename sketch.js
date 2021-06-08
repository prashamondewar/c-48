const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box,stopper, player,goal

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(600,height,1200,20)

 var box = createSprite(100, 200, 30, 30);
 var stopper = createSprite(400, 200, 50, 50);
 stopper.velocityX = 0;
 stopper.velocityY = 20;
 var player = createSprite(90, 200, 50, 50)
 player.x = mouseX;
 player.Y = mouseY;
 var stopper = createSprite(600, 200, 10, 100)
}

function draw(){
    background(0);
    createEdgeSprite();
    if (player.isTouching(box)) {
        box.velocityX = 40
        box.velocityY = 25
    }
    if (box.isTouching(stopper)) {
        box.velocityX = 0
        box.velocityY = 0
        Text("lost", 200, 200)
        player.x = 1000
        player.y = 1000
    }
    if (player.isTouching(stopper)) {
        box.velocityX = 0
        box.velocityY = 0
        Text("lost", 200, 200)
        player.x = 1000
        player.y = 1000
    }
    if (box.isTouching(goal)) {
        box.velocityX = 0
        box.velocityY = 0
        Text("congratulations", 200, 200)
        player.x = 1000
        player.y = 1000
    }

    player.bounceOff(edges);
    stopper.bounceOff(edges);
    box.bounceOff(edges);
    Engine.update(engine);
    drawSprites();
}