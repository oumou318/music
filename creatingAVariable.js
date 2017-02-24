 var ground  // declare a variable
 ground = 250; // assign the variable a value
 var back =  250; // doing both together
 
 
  var circleX = 600;                            //Step 1: Declare a variable by typing var
  var circleY = 480;                           // Step 2: Initialize by giving it a value inside of setup or draw
  var circleW = 55;                           // Step 3: var and use the variable
  var circleH = 55;                                            // equal sign means assignment like i assign this variable this value
 
function setup() {
  createCanvas(600, 480);                       // can you create variables for create canvas???
}
 
function draw() {
  // background
  background(250, 0, 250);           // things change when I comment  
  // ellipse
  noStroke();
  fill(0, 0, 255);
  ellipse(circleX, circleY, circleW, circleH);
   
  circleX = circleX -1; // Initialize * THIS IS HOW IT MOVES
  circleY = circleY - 1; //YOU CAN MAKE IT +,OR - TO CHANGE THE direction 
  circleW = circleW +1; // OHHHHHHH SNNNNNNAPPPP!!!!!!
  circleH = circleH + 1; // THAT'S MAD NICE!!!!!
}

function mousePressed() {               // it's not working idk why :(
   background(random(back), 0, ground);
}


// circleX=0 circleY=0 Diagnol line from top left to bottom right '+' Going down
// circleX=600 circleY=480  with a '-' sign 
