var w = window.innerWidth;
var h = window.innerHeight;

var keyDown = false;
var x,y,R;
var r,g,b;
var a;
var left = 0, redLeft = 0, greenLeft = 0, blueLeft = 0, aLeft = 10; 
var right = w, redRight = 255, greenRight = 255, blueRight = 255, aRight = 35;
var Rmin = 20, Rmax = 500;
var oldKey = 0;

function setup() {
	createCanvas(w, h);
	background(255);
	smooth();
}

function draw() {
	// only when keyDown = true will it start to draw
	if (keyDown) {
		stroke(r,g,b,a);
		fill(r,g,b,a);
		strokeWeight(0); 
		ellipse(x,y,R,R);
	}
  
	// press 's' to save image in the default folder
	if (key == 's' || key == 'S') {
		if (oldKey == 0) {
			saveFrame();
			oldKey = 1;
		} 
	} else {
		var oldKey = 0;
	}
}

function keyPressed() {
  
  // the up key stands for more transparent
  // the down key stands for less transparent
  if (keyCode === UP_ARROW) {
    aLeft = 6;
    aRight = 10;
  } else if (keyCode === DOWN_ARROW) {
    aLeft = 20;
    aRight = 40;
  }
    
  // assign these random values to set these features of the circle
  a = int(random(aLeft,aRight));
}

function keyTyped() {
  // only by pressing "space" will keyDown = true, which means it starts to draw
  if (key === ' ') {
    keyDown = true;
  }

  // each number represents the relative horizontal position of the circles drew after pressing it
  // but it is not a absolute position, the position is still random within a range
  var step = w/20;
  if (key === '1') {
    left = 0;
    right = w - step*9;
  } else if (key === '2') {
    left = step;
    right = w - step*8;
  } else if (key === '3') {
    left = step*2;
    right = w - step*7;
  } else if (key === '4') {
    left = step*3;
    right = w - step*6;
  } else if (key === '5') {
    left = step*4;
    right = w - step*5;
  } else if (key === '6') {
    left = step*5;
    right = w - step*4;
  } else if (key === '7') {
    left = step*6;
    right = w - step*3;
  } else if (key === '8') {
    left = step*7;
    right = w - step*2;
  } else if (key === '9') {
    left = step*8;
    right = w - step*1;
  } else if (key === '0') {
    left = step*9;
    right = w;
  } 

  // press upper-case letter make the color it stands for added to the color of the circle
  // lower-case reduce the color
  if (key === 'R') {
    redLeft = 126;
    redRight = 255;
  } else if (key === 'r') {
    redLeft = 0;
    redRight = 125;
  } else if (key === 'G') {
    greenLeft = 126;
    greenRight = 255;
  } else if (key === 'g') {
    greenLeft = 0;
    greenRight = 125;
  } else if (key === 'B') {
    blueLeft = 126;
    blueRight = 255;
  } else if (key === 'b') {
    blueLeft = 0;
    blueRight = 125;
  }

  // + stands for bigger size and - stands for smaller size
  if (key === '=' || key === '+') {
    Rmin = 200;
    Rmax = 500;
  } else if (key === '-' || key === '_') {
    Rmin = 20;
    Rmax = 100;
  }

  // assign these random values to set these features of the circle
  x = int(random(left, right));
  R = int(random(Rmin,Rmax));
  y = int(random(0, h));
  r = int(random(redLeft,redRight));
  g = int(random(greenLeft,greenRight));
  b = int(random(blueLeft,blueRight));

}
    
  // do not draw when "space" is not pressed
function keyReleased() {
  keyDown = false;
}
