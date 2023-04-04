// module aliases
const Engine = Matter.Engine,
  //Render = Matter.Render,
  Runner = Matter.Runner,
  Bodies = Matter.Bodies,
  Composite = Matter.Composite;

let boundary;
let boundaryArray = [];
let circleArray = [];
let world;
let engine;

function setup() {
  createCanvas(600, 600);
  frameRate(30);

  engine = Engine.create();
  world = engine.world;
  Matter.Runner.run(engine);

  boundaryArray.push(
    new Boundary(width / 2 - 100, 150, 350, 20, 0.4),
    new Boundary(width / 2 + 100, 350, 350, 20, -0.4),
    new Boundary(width / 2 - 100, 500, 250, 20, 0.6)
  );

  //setup end
}

// function mouseDragged() {
//   circleArray.push(new Circle(mouseX, mouseY, random(5, 10)));
// }

function draw() {
  background(0);

   circleArray.push(new Circle(200, 25, random(5, 10)));
  for (let i = 0; i < circleArray.length; i++) {
    circleArray[i].draw();
    if (circleArray[i].isOffScreen()) {
      circleArray[i].removeFromWorld();
      circleArray.splice(i, 1);
      i--;
    }
  }
  for (let i = 0; i < boundaryArray.length; i++) {
    boundaryArray[i].draw();
  }
  //console.log(circleArray.length, world.bodies.length);
}

function windowResized() {
  resizeCanvas(600, 600);
  draw();
  //draw end
}
