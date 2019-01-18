var x=0;
function setup() {
  // put setup code here
  createCanvas(640, 480);
 
}

function draw() {
  // put drawing code here
  fill(255,0,0);
  ellipseMode(CENTER);
  ellipse(width/2,height/2, x, 10);
  x++;
}