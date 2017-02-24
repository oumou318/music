function setup() {
  createCanvas(600,600);
}

function draw() {
// stroke (51) is that default, cause it's black
  stroke(255,204,0); // yellow this will make both arc yellow unless...
  arc(300,300,80,80,0, PI+QUARTER_PI, OPEN);
  stroke('red');
  arc(50,55,50,50,0, HALF_PI);
  
}