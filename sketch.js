var currentPath = [], drawing = []
var point

function setup(){
  canvas = createCanvas(windowWidth,windowHeight);
  canvas.mousePressed(start)
  canvas.mouseReleased(end)
}


function draw(){
  background(180);

  if (mouseIsPressed) {
    point = {x:mouseX, y:mouseY}
    currentPath.push(point)
  }
  textSize(22)
  fill("black")
  text("Paint here with your mouse", windowWidth/2-100,30)
  strokeWeight(5)
  stroke("blue");
  noFill()

  for (var i=0; i < drawing.length; i= i+1) {
    var path = drawing[i]
    beginShape();
    for (var j=0; j<path.length;j=j+1) {
      vertex(path[j].x,path[j].y)
    }
    endShape();
  }
}

function start () {
  currentPath = []
  drawing.push(currentPath)
}

function end () {

}