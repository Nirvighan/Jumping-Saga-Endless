//import { text } from "body-parser";

//import { text } from "body-parser";


//create both the variables
var score = 0;
var temp = 0;

function setup() 
{

  //craete the canvas
  createCanvas(1000,600);
  
  //create all the walls , add color and velocity to them
  wall1 = createSprite(350,550,600,400);
  wall1.shapeColor = "yellow";
  wall1.velocityX = -15;
  
  
  wall2 = createSprite(1050,520,600,400);
  wall2.shapeColor = "yellow";
  wall2.velocityX = -15;

  wall3 = createSprite(1850,540,650,400);
  wall3.velocityX = -15;
  wall3.shapeColor = "yellow";

  wall4 = createSprite(2550,510,650,400);
  wall4.shapeColor = "yellow";
  wall4.velocityX = -15;

  wall5 = createSprite(3350,530,650,400);
  wall5.shapeColor = "yellow";
  wall5.velocityX = -15;

  wall6 = createSprite(4050,560,600,400);
  wall6.shapeColor = "yellow";
  wall6.velocityX = -15;


  //create the player , add color and velocity to it
  player = createSprite(50,200,30,30);
  player.shapeColor = "white";
  player.velocityY = 15;
}

function draw() 
{

  //clear the background
  background(0);


  //show the scores
  textSize(30);
  textFont("Georgia");
  fill("white");
  text("SCORE " + score , 50,50);
  
  //make the walls look like infinite and make the player fall if the wall ends also make the player get down when to walls are attached
  if(wall1.x < -180)
  {
     wall1.x = 4350;
     player.velocityY = 10;

  }

  if(wall2.x < -180)
  {
     wall2.x = 4550;
     player.velocityY = 10;

  }

  if(wall3.x < -180)
  {
     wall3.x = 4850;
     player.velocityY = 10;

  }

  if(wall4.x < -180)
  {
     wall4.x = 5150;
     player.velocityY = 10;

  }

  if(wall5.x < -180)
  {
     wall5.x = 5350;
     player.velocityY = 10;

  }

  if(wall6.x < -180)
  {
     wall6.x = 5550;
     player.velocityY = 10;

  }



  //make the player attach with the wall
  player.collide(wall1);
  player.collide(wall2);
  player.collide(wall3);
  player.collide(wall4);
  player.collide(wall5);
  player.collide(wall6);


  //create the edge sprites
  createEdgeSprites();


  //make the player jump
  if(keyDown(32))
  {
   player.velocityY = -9;
   
   

  }

  if(player.y<150)
  {
    player.velocityY = 11;

    score = score + 1;
    

  }

  
  //make the game over
  if(player.y > 600)
  {
    temp = 1;

  }

  if(temp === 1)
  {
   wall1.velocityX = 0;
   wall2.velocityX = 0;
   wall3.velocityX = 0;
   wall4.velocityX = 0;
   wall5.velocityX = 0;
   wall6.velocityX = 0;

   text("GAME OVER" , 75,100);

  }


  //make the game adaptive
  if(score === 15)
  {
    wall1.velocityX = -18;
    wall2.velocityX = -18;
    wall3.velocityX = -18;
    wall4.velocityX = -18;
    wall5.velocityX = -18;
    wall6.velocityX = -18;

  }

  if(score === 30)
  {
    wall1.velocityX = -21;
    wall2.velocityX = -21;
    wall3.velocityX = -21;
    wall4.velocityX = -21;
    wall5.velocityX = -21;
    wall6.velocityX = -21;

  }

  if(score === 60)
  {
    wall1.velocityX = -24;
    wall2.velocityX = -24;
    wall3.velocityX = -24;
    wall4.velocityX = -24;
    wall5.velocityX = -24;
    wall6.velocityX = -24;

  }

  if(score === 120)
  {
    wall1.velocityX = -27;
    wall2.velocityX = -27;
    wall3.velocityX = -27;
    wall4.velocityX = -27;
    wall5.velocityX = -27;
    wall6.velocityX = -27;

  }

  if(score === 240)
  {
    wall1.velocityX = -30;
    wall2.velocityX = -30;
    wall3.velocityX = -30;
    wall4.velocityX = -30;
    wall5.velocityX = -30;
    wall6.velocityX = 3-0;

  }

  if(score === 480)
  {
    wall1.velocityX = -33;
    wall2.velocityX = -33;
    wall3.velocityX = -33;
    wall4.velocityX = -33;
    wall5.velocityX = -33;
    wall6.velocityX = -33;

  }
  drawSprites();
}