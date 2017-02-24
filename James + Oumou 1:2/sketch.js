//James is the Driver 
//Oumou is the typer

var r = {         // variable with an object
  x:0,            
  y:300,
  w:100,
  h:50,
  s: 5           // speed 
}


function setup() {
  createCanvas(600,600);
}

function draw() {
  background(0);
  fill(255);
  rect(r.x,r.y,r.w,r.h);
  
  if(r.x> width) {    // width can also be 600
    r.s *= -1
    
    }
    
    if(r.x < -110) {
      r.s *= -1;
      
    }
           //1 * -1 = -1 so it reverses
  


  r.x = r.x + r.s;
}