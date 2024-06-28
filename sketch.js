// drawing tool 

let drawCircle;

function setup() {
    createCanvas(windowWidth, windowHeight);
    button = createButton("clear");
    button.mouseClicked(clearOut)
    button.size(100, 40)
    button.style("font-family", "Times New Roman");
    button.style("font-size", "26px");
    button.style("margin", "15px")
    button.style("background-color", "white")
    button.style("position", "absolute")
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