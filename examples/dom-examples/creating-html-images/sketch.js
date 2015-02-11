var w = window.innerWidth;
var h = window.innerHeight;


function setup() {
	var myCanvas = createCanvas(w, h);
	var img = createImg("http://jackbdu.github.io/img/snake.png");
	img.position(0, 0);
}

function draw() {
	background(200);
}