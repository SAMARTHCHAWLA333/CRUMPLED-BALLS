class Dustbin {
    constructor(x,y,width,height){
        var options = {
          isStatic : true,
        }
        this.body2=Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body2);
        this.bodyX= Bodies.rectangle((x-(width/2)), (y-(height*2)), height, width/2 ,options);
	      World.add(world, this.bodyX);
	      this.bodyY = Bodies.rectangle((x+(width/2)), (y-(height*2)), height, width/2 ,options);
        World.add(world, this.bodyY);
        this.body2.width = width
        this.body2.height = height 
    }
    display(){
       fill("blue");
       rect(this.body2.position.x, this.body2.position.y,this.body2.width, this.body2.height)
       rect((this.body2.position.x-(this.body2.width/2)), (this.body2.position.y-(this.body2.height*(2*(this.body2.width/100)))), this.body2.height, this.body2.width/2)
       rect((this.body2.position.x+(this.body2.width/2)), (this.body2.position.y-(this.body2.height*(2*(this.body2.width/100)))), this.body2.height, this.body2.width/2)
   }
}
