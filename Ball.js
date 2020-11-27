class Ball{

    constructor(x,y,r){
       
      
        var option={
            restitution :0.6,
            friction :0.5,
            density:1
            
        }
        
        this.r=r;
       
          this.image=loadImage("paper.png")  
    this.body= Bodies.circle(x,y,r,option);
    World.add(world,this.body);
    
    
    }
    
    
    
    
    
    
    display(){
    
        var pos= this.body.position;
        
        imageMode (CENTER)
        
        image(this.image,pos.x,pos.y,this.r,this.r);
    
    }
        
    }