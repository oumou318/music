var col = [20, 25, 50, 100, 200];


function setup() {
  createCanvas(600,600);
}

function draw() {
  frameRate(5);
  background(0);
  stroke(255);
  fill(random(col),random(col),random(col)); //random colors from array
  rect(col[4],col[4], random(col), random(col)); //random l and w using array and static x and y based on array[4]
  
  console.log(col[0]) //logs index of array[0]
}