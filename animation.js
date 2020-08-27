class Animation{
  constructor(frames_){
    this.frames = [];
    this.cycle = 0;
    let counter;
    for(counter = 0; counter < frames_.length; counter++){
      this.frames.push(new Array());
      this.frames[counter].push(frames_[counter][0]);
      this.frames[counter].push(loadImage(frames_[counter][1]));
    }
  }
  display(x_, y_){
    imageMode(CENTER);
    image(this.frames[this.cycle][1], x_, y_);
    if (this.cycle < this.frames.length - 1 && frameCount%this.frames[this.cycle][0] == 0) this.cycle++;
    else if(frameCount%this.frames[this.cycle][0] == 0) this.cycle = 0;
  }
}
