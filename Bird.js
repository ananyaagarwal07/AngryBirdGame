class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    Matter.Body.setMass(this.body,this.body.mass*7);
    this.image = loadImage("sprites/bird.png");
    this.trajectory = [];
    this.smoke = loadImage("sprites/smoke.png");
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    super.display();
    if(this.body.velocity.x>3 && this.body.position.x>210){
      var pos = [this.body.position.x, this.body.position.y];
      this.trajectory.push(pos);
    }
    for(var i=0;i<this.trajectory.length;i++){
        image(this.smoke,this.trajectory[i][0],this.trajectory[i][1]);
    }
  }
}
