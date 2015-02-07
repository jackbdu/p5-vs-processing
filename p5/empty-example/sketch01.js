var keyDown = false;
var x,y,R;
var r,g,b;
var a;
var left = 0, redLeft = 0, greenLeft = 0, blueLeft = 0, aLeft = 10; 
var right = 800, redRight = 255, greenRight = 255, blueRight = 255, aRight = 35;
var Rmin = 20, Rmax = 500;
var oldKey = 0;

function setup() {
	createCanvas(800,600);
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
  
  // only by pressing "space" will keyDown = true, which means it starts to draw
  if (key == ' ') {
    keyDown = true;
  }
  
  // each number represents the relative horizontal position of the circles drew after pressing it
  // but it is not a absolute position, the position is still random within a range
  if (key == '1') {
    left = 0;
    right = 305;
  } else if (key == '2') {
    left = 55;
    right = 360;
  } else if (key == '3') {
    left = 110;
    right = 415;
  } else if (key == '4') {
    left = 165;
    right = 470;
  } else if (key == '5') {
    left = 220;
    right = 525;
  } else if (key == '6') {
    left = 275;
    right = 580;
  } else if (key == '7') {
    left = 330;
    right = 635;
  } else if (key == '8') {
    left = 385;
    right = 690;
  } else if (key == '9') {
    left = 440;
    right = 745;
  } else if (key == '0') {
    left = 495;
    right = 800;
  } 
  
  // press upper-case letter make the color it stands for added to the color of the circle
  // lower-case reduce the color
  if (key == 'R') {
    redLeft = 126;
    redRight = 255;
  } else if (key == 'r') {
    redLeft = 0;
    redRight = 125;
  } else if (key == 'G') {
    greenLeft = 126;
    greenRight = 255;
  } else if (key == 'g') {
    greenLeft = 0;
    greenRight = 125;
  } else if (key == 'B') {
    blueLeft = 126;
    blueRight = 255;
  } else if (key == 'b') {
    blueLeft = 0;
    blueRight = 125;
  }
  
  // the up key stands for more transparent
  // the down key stands for less transparent
  if (key == 'up') {
    aLeft = 6;
    aRight = 10;
  } else if (key == 'DOWN') {
    aLeft = 20;
    aRight = 40;
  }
  
  // + stands for bigger size and - stands for smaller size
  if (key == '=' || key == '+') {
    Rmin = 200;
    Rmax = 500;
  } else if (key == '-' || key == '_') {
    Rmin = 20;
    Rmax = 100;
  }
    
  // assign these random values to set these features of the circle
  x = int(random(left,right));
  R = int(random(Rmin,Rmax));
  y = int(random(0,600));
  a = int(random(aLeft,aRight));
  r = int(random(redLeft,redRight));
  g = int(random(greenLeft,greenRight));
  b = int(random(blueLeft,blueRight));
}
    
  // do not draw when "space" is not pressed
function keyReleased() {
  keyDown = false;
}
