// File: 050418

let change = 0
let dir = 1

function setup() {
	createCanvas(400, 400);
	ellipseMode(CENTER)
}

function draw() {
	background(0)

	stroke('tomato')
	noFill()

	change += dir
	ellipse(width/2, height/2, change, 40)

	if (change > 40 || change < 0) {
		dir *= -1


	}
}
