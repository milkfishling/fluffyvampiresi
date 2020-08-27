class Entity{
  constructor(x_, y_, rotation_, size_, animations_, initialState_){
    this.position = createVector(x_, y_);
    this.size = size_;
    this.rotation = rotation_;
    this.state = initialState_;
    this.animationCycles = [];
    let counter;
    for(counter = 0; counter < animations_.length; counter++)
      this.animationCycles.push(new Animation(animations_[counter]));
  }
  movement(changeVector_, changeRotation_){
    this.position.add(changeVector_);
    this.rotation = changeRotation_;
  }
  display(){
    push();
    translate(this.position.x, this.position.y);
    rotate(this.rotation);
    this.animationCycles[this.state].display(0, 0);
    pop();
  }
}
