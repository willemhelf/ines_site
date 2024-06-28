// drawing tool 

let drawCircle;

function setup() {
    createCanvas(windowWidth, windowHeight);
    button = createButton("clear");
    button.mouseClicked(clearOut)
 }

function draw() {
  if(mouseIsPressed) {
    ellipse(mouseX, mouseY, 9, 9)
    fill(0)
  }
}
 
function mouseIsPressed() {
  drawCircle = !drawCircle;
  console.log("click");
}

/// clear out drawing on button click

function clearOut(){
  clear()
}