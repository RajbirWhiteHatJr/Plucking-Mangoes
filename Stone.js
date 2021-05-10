class Stone{

    constructor(x,y){

    var options={

        isStatic:false,
        restitution:0,
        friction:1,
        density:1.2,

       }
       this.image = loadImage("sprites/stone.png");
       this.body = Matter.Bodies.circle(x, y, 30,options);
       this.radius = 30;
       World.add(world, this.body);
    }

    display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.radius,this.radius);
        pop();
     
    }





}

