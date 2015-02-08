var w = window.innerWidth;
var h = window.innerHeight;

function setup() {
	createCanvas(w, h);
}

function draw() {
	smooth();
	noStroke();
	if (mouseIsPressed) {
		if (frameCount % 10 == 0) {
			fill(50 + frameCount * 3 % 255, 100, random(150, 255));
			push();
			translate(mouseX, mouseY);
			rotate(radians(frameCount * 1 % 360));
			rect(0, 0, 100, 10);
			pop();
		}
	}
}

/*changes
 + moved smooth() and noStroke() down to draw()
 + added touch events
 + changed push/popMatrix to push/pop
 + quasi-responsive canvas
*/