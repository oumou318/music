var x = [100, 200, 300, 400];





function setup() {
  createCanvas(600,600);  
  
}

function draw() {
  background('grey');
  frameRate(1)                         // slows it down 
  fill(random(100, 255),random(255),0);
  rect(random(x), x[1], 50, 100);
  rect(200, 100, x[1], x[2]);
  ellipse(x[1], random (x), 100,300);  // so cool try random
}