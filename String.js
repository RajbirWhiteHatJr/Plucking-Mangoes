
class String{
    constructor(BodyA, point2){
        var options = {
            bodyA: BodyA,
            pointB: point2,
            stiffness: 0.04,
            length: 1
        }
        this.const = Constraint.create(options);
        World.add(world, this.const);
    }

     fly(){

        this.const.bodyA = null;
     }

    display(){
         if(this.const.bodyA){
            stroke("white")
            var pointA = this.const.bodyA.position;
            var pointB = this.const.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);   
         }
    }
    
}