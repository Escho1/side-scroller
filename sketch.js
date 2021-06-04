var man;
let img, img2;
let enemies = [];

function setup() {
  createCanvas(400, 400);
  fill(0, 0);
  img = loadImage("Man.png");
  img2 = loadImage("Baddie.png");
  
  man = new Person(img);
  
   for (let i = 0; i < 10; i++) {
    enemies[i] = new Enemy(img2, random(10));
   }
}

var x;
x = -100;

function keyPressed(){
    if (key==' ') {
    let force = createVector(0, -16);
    man.applyForce(force);
  }
}

function draw() {
  if (man.pos.x < 1000) {
    game();
  } else {
    gameOver();
  }
}

function gameOver() {
  background (255, 255, 0);
  textSize(200);
  text ("You survived!", 100, 200);
}
function game() {
  background(220);

  //point of view around "man"
  translate(-man.pos.x + 50, 0);
  
  let gravity = createVector(0,1);
  man.applyForce(gravity);



  man.update();
  man.display();
  man.edges()
  
  for (let i = 0; i < 10; i++) {
    enemies[i].update();
    enemies[i].display()
    enemies[i].edges();
    man.hits(enemies[i])
  }
}