class Paper {
    constructor(){
        var options = {
            
            restitution : 0,
            friction:0,
            density:1.2,
        }
        this.width = 33
        this.body = Bodies.circle(250,540,30,options);
        this.image = loadImage("Images/paper.png")
        World.add(world , this.body);
    }
    display(){
        var pos = this.body.position
        var angle = this.body.angle
        fill ("white")
        rotate (angle)
        imageMode(RADIUS)
        image(this.image,pos.x , pos.y , 30,30);
        
    }
}