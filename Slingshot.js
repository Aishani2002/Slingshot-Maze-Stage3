class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB;
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    display(){
       
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
           push();
           if(pointA.x<220){
            strokeWeight(8);
            stroke("#301608");
            line(pointA.x-20, pointA.y, pointB.x-10, pointB.y);
            line(pointA.x-20,pointA.y,pointB.x+30,pointB.y-3);
              
           }
            else{
                strokeWeight(3);
                stroke("#301608");
                line(pointA.x+25, pointA.y, pointB.x-10, pointB.y);
                line(pointA.x+25,pointA.y,pointB.x+30,pointB.y-3);
                
            }
           pop(); 
        }
        
    }

    
    fly (){
     this.sling.bodyA=null;
        }

    attach(body){
            this.sling.bodyA = body;
                }
}



