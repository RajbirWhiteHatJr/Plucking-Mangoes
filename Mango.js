class Mango{

    constructor(x,y){

    var options={

        isStatic:true,
        restitution:0,
        friction:1,

       }
       this.image = loadImage("sprites/mango.png");
       this.body = Matter.Bodies.circle(x, y, 70,options);
       this.x = x
       this.y = y
       this.radius = 70;
       World.add(world, this.body);
      

    }

    display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,this.x,this.y,this.radius,this.radius);
        pop();
     
    }





}