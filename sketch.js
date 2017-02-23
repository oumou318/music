

// var can = 600;
// var vas = 600; can create canvas have variables. i tried it didnt work



function setup() {
  createCanvas(600,600);
  background('green');   // omg r u ready??? phenomenal so since background is only created once
}

function draw() {
  // background('green'); // What happens when bakground is moved to setup????? here background is created over and over
  noStroke();   // to make it like a painting
  fill(0, 255, 0, 100); // add some transparency
  ellipse(mouseX, mouseY, 100, 40); 
  stroke(7);
  rect(200, 300, 100,40);
  
}

function mousePressed() {
  background('green');
}
// mousePressed is an event patiently waiting