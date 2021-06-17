class Snow{
   constructor(x,y,r)
   { this.body=Bodies.circle(x,y,r,{
        friction: 1.0,
        density: 1.0
    });
    
    this.r=r;
    this.image=loadImage("snow4.webp");
    World.add(world,this.body)
    }

    display()
    {
    image(this.image,this.body.position.x,this.body.position.y,this.r,this.r)
    }
}