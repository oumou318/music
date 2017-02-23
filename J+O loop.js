//Oumou is the Driver
//James is the Typer



function setup() {
  createCanvas(1000,1000);
}

function draw() {
  background(0);
  for(x = 0; x<=width; x+=200) {
    for (var y = 0; y<=height; y+=100) {
    fill(random(255), random(255),random(255));
    frameRate(10);
    rect(x,y,50,50);
    }
  }
  
}