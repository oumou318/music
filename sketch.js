function setup() {
  createCanvas(600,600);
}

function draw() {
  background(0,255,0);
  fill('yellow'); // don't forget the quotation marks
  
  line(0,0,200,100); //x1, y1, x2, y2
  line(20,400,100,250)
  line(75,415,150,300)
  line(100,500,300,350);
  line(150,500,270,475);
  line(90,20,200,75)
  line(200,200,40,70);
  // 1st arc on the top left
  arc(0,0,200,200,0,HALF_PI); // what does the 0 before half pi do?? 
  arc(600,0,200,200,HALF_PI, PI); //arc on the top right
  fill('blue');
  arc(600,600,400,400,PI,PI+QUARTER_PI); // arc for bottom right Quarter pi is like a slice
  // arc bottom left
  arc(0,600,400,400,PI+QUARTER_PI,TWO_PI);
  fill('red');
  // arc in the middle tongue
  arc(300,300,80,80,0,PI+QUARTER_PI,OPEN);
  // middle left
  arc(100,300,80,80,0,PI+QUARTER_PI,CHORD);
  //middle right
  arc(500,300,80,80,0,PI+QUARTER_PI,PIE);
  
}