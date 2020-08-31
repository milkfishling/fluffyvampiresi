
function setup(){
  frameRate(30);
  createCanvas(500, 500);
}
function draw(){
  background(0);
  fred.isClicked();
  bob.isClicked();
  bob.display();
  fred.display();
}

class Button{
  constructor(x_, y_, wid_, len_){
    this.x = x_;
    this.y = y_;
    this.wid = wid_;
    this.len = len_;
    this.pressed = false;
    this.colour = [200, 50, 50];
  }
  isClicked(){
    if ((mouseIsPressed) &&
        (mouseX >= this.x && mouseX <= this.x + this.wid) &&
        (mouseY >= this.y && mouseY <= this.y + this.len)){
      this.colour[0] = 50;
      this.colour[1] = 200;
    }
    else {
      this.colour[0] = 200;
      this.colour[1] = 50;
    }
  }
  display(){
    fill(this.colour[0], this.colour[1], this.colour[2]);
    rect(this.x, this.y, this.wid, this.len);
  }
}

bob = new Button(10, 15, 100, 200);
fred = new Button(250, 250, 100, 100);
console.log('BOB: ' + bob.wid + '\n FRED: ' + fred.wid);
