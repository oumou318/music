//Oumou is the Driver
//James is the Typer



function setup() {
  createCanvas(900,1000);
}

function draw() {
  background(0);
  for(x = 0; x<=width; x+=200) { //loop that ends at x's width
    for (var y = 0; y<=height; y+=100) { //loop that ends at y's height
    fill(random(255), random(255),random(255)); //random colors
    frameRate(10); //slowed frame rate to make it look better
    rect(x,y,50,50); //rectangle that gets looped
    }
  }
  
}