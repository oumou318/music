//James is typing
//Oumou is Driving
//we ended up putting a lot more effort and it became a person wearing a hat.
var hats = [];

function setup() {
  createCanvas(600,800);
}

function mousePressed() {  //this creates the hat function on mouse click
  hats.push(new hat(mouseX,mouseY));
}

function draw() {
  background("green");
  for (var i = 0; i < hats.length; i++) {
      hats[i].j();
  }



}

function hat(x,y) {
  this.x = x;
  this.y = y;
  
  this.j = function() {
    noStroke()
    fill("black"); //body
    rect(x+5,y+60,50,50);
    fill("yellow"); //head
    ellipse(x+30,y+40,40,40);
    fill("purple"); //hat
    rect(x+10,y,40,40);
    rect(x,y+20,60,20);
  }

}
