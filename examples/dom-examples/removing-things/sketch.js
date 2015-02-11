var w = window.innerWidth;
var h = window.innerHeight;
var creatElement;


function setup() {
	var myCanvas = createCanvas(w, h);
	var text = createDiv("This is an HTML string! I will disappear if your mouseX goes to the right side!");
	text.position(0, 0);
	text.style("font-family:monospace; background-color:#FF0000; color:#FFFFFF; font-size:18pt; padding:10px;");
}

function draw() {
	background(200);
	fill(100);
	rectMode(CENTER);
	ellipse(mouseX, mouseY, 10, 10);
	if (mouseX>w/2) {
		removeElements();
	}
}