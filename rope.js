class Rope{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stifness:0.04,
            lenght:800
        }
        this.pointB=pointB
        this.rope=Constraint.create(options)
        World.add(world,this.rope)
    }
    display(){
        var posA=this.rope.bodyA.position
        var pos=this.pointB
        strokeWeight(4)
        stroke("white")
        line(posA.x,posA.y,pos.x,pos.y)
    }
}