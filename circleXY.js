var circleX = 500;  // it changes the starting point as far as x coordinate of the canvas of the ball moving
var circleY = 400; 

// create more variables
var r = 0;
var b = 0;
var g = 255;
// so now I can use these variables as far as color like background and fill


function setup() {
  createCanvas(600,480);
  // The difference between when background is in setup and when it is in draw
 
  
}

function draw() {
  // background
  background(g,b,r); // changing 250,0,250 the order here of r,b,g matters 
  //ellipse
  noStroke();
  fill(0,0,255); // COLOR of the ball is blue
  ellipse(circleX, circleY, 70, 55); // 200 is the height, 70 is the width of the ball, 55 is the height of the ball)
  fill(0,255,0);
  ellipse(circleX, circleY, 70, 55);
  
  circleX = circleX - 1; 
  // the speed increasing at a rate of 1 of the ball moving so - it goes from right to left + it goes
  circleY = circleY + 1;
  // if (x > width)
    speed = -5
}