var Dusaed
function setup() {
  createCanvas(1600,1600);
  Dusaed = createSprite(200,200,10,10)
}

function draw() 
{
  background(30);
  drawSprites()

  if (keyDown("right")) {
    background("green")
    Dusaed.x += 5
  }
  else if (keyDown("left")) {
    background("red")
    Dusaed.x -= 5
  }
  else if (keyDown("up")) {
    Dusaed.y-= 5
    background("lightblue")
  }
  else  {
    background("gold")
    Dusaed.y += 5
  }
}




