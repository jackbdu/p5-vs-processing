var w = window.innerWidth;
var h = window.innerHeight;
var x, y, i;


function setup() {
	createCanvas(w, h);
}

function draw() {
	smooth();
	noStroke();
	for (i = 0; i < 65; i = i + 8) {
		for (x = 0; x < width; x += 70) {
			for (y = 0; y < height; y += 70) {
				fill(random(255), x / 2, y / 2, random(255));
				ellipse(x, y, i, i);
			}
		}
	}
}

/*
code almost unchanged
*/