class Paper {
    constructor(x,y,radius){
        var options = {
          isStatic : false,
          restitution : 0.3,
          friction : 0.5,
          density : 1.2
        }
        this.radius = radius;
        this.body1 = Bodies.circle(x,y,radius,options);
        World.add(world, this.body1);
    }
    display(){
      fill("orange");
      ellipseMode(RADIUS);
      ellipse(this.body1.position.x, this.body1.position.y, this.radius, this.radius)
    }
}