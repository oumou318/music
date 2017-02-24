//Organized a list of variables into an object.
//James is typer
//Oumou is driver

/* you can swap line 4-7 with line 11 - 16 and line 25 with 28
var x = 100;
var y = 100;
var w = 100;
var l = 100;
*/


var r = {
  x: 100,
  y: 100,
  w: 100,
  l: 100
}


function setup() {
  createCanvas(400,400);
}

function draw() {
  background(0);
  rect(r.x,r.y,r.w,r.l);
  
/*
  rect(x,y,w,l);
*/  

}

