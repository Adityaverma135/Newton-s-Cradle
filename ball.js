class Ball{
    constructor(x,y){
        var options={
            frictionair:0.0,
            //isStatic:true,
            friction:0,
            restitution:1,
            slop:1,
            inertia:Infinity
        }
        this.body=Bodies.circle(x,y,40,options)
        this.radius=40
        World.add(world,this.body)
    }
    display(){
        fill("pink")
        ellipseMode(CENTER)
        ellipse(this.body.position.x,this.body.position.y,80,80)
    }
}