// File: 32318
let change = 0
let direction = 1
let angle = 0

function setup() {
  createCanvas(400, 400)
  background(0)
  pixelDensity(displayDensity())

  angleMode(DEGREES)
  rectMode(CENTER)
  textAlign(CENTER)
}

function draw() {
  background(0, 10)
  // background(0,50)

  // Connections
  push()
  // stroke(255, 165, 0)
  // background(0,30)
  stroke(255)
  line(1, 1, change / 2, change / 2) /*Top Left*/
  line(width, 0, width - change / 2, change / 2) /*Top Right*/
  line(width, height, width - change / 2, height - change / 2) /*Bottom Right*/
  line(0, height, change / 2, height - change / 2) /*Bottom Left*/
  pop()

  push()
  fill(255, 165, 0)
  // background(0,30)

    // text("Framecount: "+frameCount, width/2, height/6)
    translate(width/2, height/2)
    rotate(random()*angle)
    translate(-width/2, -height/2)


  // stroke(255,0,0)
  stroke(30, 144, 255)
  line(width/2, height/2, change / 2, change / 2) /*Top Left*/
  // stroke(255)
  line(width/2, height/2, width - change / 2, change / 2) /*Top Right*/
  line(width/2, height/2, width - change / 2, height - change / 2) /*Bottom Right*/
  line(width/2, height/2, change / 2, height - change / 2) /*Bottom Left*/
  pop()

  // Red Rectangle
  push()
  stroke(255, 0, 0)
  strokeWeight(3)
  noFill()
  rect(width / 2, height / 2, width - 1, height - 1)
  pop()

  // White Rectangle

  push()
  stroke(255)
  noFill()
  rect(width / 2, height / 2, width - change, height - change)
  pop()
  change += (direction)
  // change += (direction * random(-1,1))

  if (change > width || change < 0 || change > height) {
    direction *= -1
  }

  angle ++

}
