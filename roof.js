class Roof{
    constructor(x,y,width,height){
        var options={
            isStatic:true
        }
        this.roof=Bodies.rectangle(x,y,width,height,options)
        this.width=width
        this.height=height
        World.add(world,this.roof)
    }
    display(){
        rectMode(CENTER)
        strokeWeight(4)
        stroke("red")
        fill("white")
        rect(this.roof.position.x,this.roof.position.y,this.width,this.height)
    }
}