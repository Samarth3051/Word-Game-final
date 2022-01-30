var background1, background2,back;
var canvas;
var form;
var database;
var game;
var answer;
var allplayers;
var player, playerCount;
var sound;
var sound2;
var sound3;
var score=0;


function preload(){
  background1= loadImage("Background image2.png");
  background2= loadImage("quiz.png");
  sound = loadSound("Sound.mp3");
  sound2= loadSound("sound2.wav");
  sound3= loadSound("sound3.wav")
  
}
function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database= firebase.database();

  game= new Game();

 
  


}

function draw() {
  background(background2); 
 

  
    game.start();
  
  
 
  
  drawSprites();
}