var player;
var PI = 3.14;
function setup(){
  frameRate(30);
  gameScreen = createCanvas(600, 600);
  player = new Entity(width/2, height/2, 0, 60,
    [
      [[2, 'assets/ship.png'], [2, 'assets/tank_huge.png']],
      [[5, 'assets/explosionSmoke1.png'], [5, 'assets/explosionSmoke2.png'],
       [5, 'assets/explosionSmoke3.png'], [5, 'assets/explosionSmoke4.png'],
       [5, 'assets/explosionSmoke5.png']]
    ], 0);
}

function mousePressed(){
  if(player.state == 0) player.state = 1;
  else player.state = 0;
}

function draw(){
  background(80);
  player.display();
  player.movement(0, (PI/2) + atan2(mouseY - player.position.y,mouseX - player.position.x));
}
