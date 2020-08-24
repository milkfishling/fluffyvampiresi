const WIDTH = 700, HEIGHT = 600;

class Ball{
  constructor(x_, y_, s_, speed_, name_, colour_){
    this.x = x_;
    this.y = y_;
    this.s = s_;
    this.speed = speed_;
    this.name = name_;
    this.colour = colour_;
  }
  display(){
    fill(this.colour);
    ellipse(this.x, this.y, this.s, this.s);
  }
  movement(){
    let tx = random(-this.speed, this.speed);
    while(this.x + tx >= WIDTH || this.x + tx <= 0)
      tx = random(-this.speed, this.speed);
    this.x += tx;
    let ty = random(-this.speed, this.speed);
    while(this.y + ty >= HEIGHT || this.y + ty <= 0)
      ty = random(-this.speed, this.speed);
    this.y += ty;
  }
}

var ballfamily = [];
var names = ["bob", "lily", "phill", "robert", "catherine", "migo", "roko", "jabu", "ana", "fred", "dan", "hichi", "som"];

var qtt = 50;

function setup(){
  createCanvas(WIDTH, HEIGHT);
  background(0);
  noStroke();
  fill(200, 182, 106);
  let counter;
  for(counter = 0; counter < qtt; counter++){
    let colour = color(random(255), random(255), random(255));
    ballfamily.push(new Ball(350, 300, random(15, 30), random(2, 9), names[int(random(names.length ))], colour));
  }
}

function mousePressed(){
  for(counter = 0; counter < qtt; counter++){
    let colour = color(random(255), random(255), random(255));
    ballfamily[counter] = new Ball(mouseX, mouseY, random(15, 30), random(2, 9), names[int(random(names.length))], colour);
  }
}

function draw(){
  background(0);
  for(counter = 0; counter < qtt; counter++){
    ballfamily[counter].display();
    ballfamily[counter].movement();
    if(pow(mouseX - ballfamily[counter].x, 2) + pow(mouseY - ballfamily[counter].y, 2) <= pow(ballfamily[counter].s, 2))
      console.log(ballfamily[counter].name);
  }
}
