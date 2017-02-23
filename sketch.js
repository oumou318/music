//James is typing
//Oumou is Driving
//we ended up putting a lot more effort and it became a person in a hat.


function setup() {
  createCanvas(600,800);
}

function draw() {
  background("green");
  hat(300,400);
  hat(150,150);
  hat(0,0);
  hat(400,400);
}

function hat(x,y) {
  noStroke()
  fill("black");
  rect(x+5,y+60,50,50);
  fill("yellow");
  ellipse(x+30,y+40,40,40);
  fill("purple");
  rect(x+10,y,40,40);
  rect(x,y+20,60,20);

}