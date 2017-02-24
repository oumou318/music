//Oumou is the Driver
//James is the Typer



function setup() {
  createCanvas(1000,1000);
}

function draw() {
  background(0);
  for(x = 0; x<=width; x+=200) {                      // loop will end at the width
    for (var y = 0; y<=height; y+=100) {              // loop will end at the height of the canvas
    fill(random(255), random(255),random(255));
    frameRate(10);         // how fast it will change
    rect(x,y,50,50);
    }
  }
  
}
