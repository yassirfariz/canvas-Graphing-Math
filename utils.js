class Vector{
    constructor(x,y,pointA,pointB){
        this.x = x;
        this.y = y;
        this.pointA = pointA;
        this.pointB = pointB;
        this.centerX = innerWidth/2;
        this.centerY = innerHeight/2;
    }
    getCord(){
        if (this.pointA === null && this.pointB === null){
            return this.x,this.y;
        }else return {x:this.pointB.x-this.pointA.x,y:this.pointB.y-this.pointA.y};
    }
    getPointB(pointA){
        this.pointA = pointA;
        this.pointB.x += this.pointA.x+this.x;
        this.pointB.y += this.pointA.y+this.y;
        return this.pointB;
    }
    getNorm(x,y){
        return Math.sqrt(x*x+y*y);
    }
    getDirection(x,y){
        return y/x;
    }
    getinvertedVector(mode){
        let cord = this.getCord();
        cord.x = -cord.x;
        cord.y = -cord.y;
        return new Vector(cord.x,cord.y,null,null);
    }
    add(vector){
        let cord = vector.getCord()
        let Icord = this.getCord()
        let x = Icord.x+cord.x;
        let y = Icord.y+cord.y;
        return new Vector(x,y,null,null);

    }
    scale(scale){
        let cord = this.getCord();
        cord.x = cord.x*scale;
        cord.y = cord.y*scale;
        this.x = cord.x;
        this.y = cord.y;
        this.pointB.x = this.x;
        this.pointB.y = this.y;
        return this;
    }
    draw(ctx,u){
        let yinvert = -1
        ctx.beginPath();  
          // start drawing
        if (this.pointA == null && this.pointB == null){
            ctx.moveTo(this.centerX,this.centerY);
            ctx.lineTo(this.centerX+this.x*u,this.centerY+this.y*u*yinvert);
        }else{
            ctx.moveTo(this.centerX+this.pointA.x*u,this.centerY+this.pointA.y*u*yinvert);
            ctx.lineTo(this.centerX+this.pointB.x*u,this.centerY+this.pointB.y*u*yinvert);
        }
        ctx.stroke()
}
}
class Point{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
    draw(centerX,centerY,u){
        ctx.beginPath();
        ctx.arc(centerX+this.x*u,centerY+this.y*-u,5,0,2*Math.PI)
        ctx.fill();
    }
}
class Gradiations{
    constructor(unit,width,height){
        this.unit = unit;
        this.width = width;
        this.height = height;
    }
    draw(ctx,centerX,centerY){
        ctx.beginPath();
        for (let i=centerX;i<=innerWidth;i+=this.unit){
            ctx.lineWidth = this.width;
            var Xaxis = new Path2D();
            Xaxis.moveTo(0,centerY);
            Xaxis.lineTo(innerWidth,centerY);
            Xaxis.moveTo(i,centerY+this.height/2);
            Xaxis.lineTo(i,centerY-this.height/2);
            Xaxis.moveTo(innerWidth-i,centerY+this.height/2);
            Xaxis.lineTo(innerWidth-i,centerY-this.height/2);
            ctx.stroke(Xaxis);
        }
        for (let i=centerY;i<=innerHeight;i+=this.unit){
            ctx.lineWidth = this.width;
            var Yaxis = new Path2D();
            Yaxis.moveTo(centerX,0);
            Yaxis.lineTo(centerX,innerHeight);
            Yaxis.moveTo(centerX-this.height/2,i);
            Yaxis.lineTo(centerX+this.height/2,i);
            Yaxis.moveTo(centerX-this.height/2,innerHeight-i);
            Yaxis.lineTo(centerX+this.height/2,innerHeight-i);
            ctx.stroke(Yaxis);
        }
    }
}
class Fonction{
    constructor(f,xmin,xmax){
        this.f = f;
        this.xmin = xmin;
        this.xmax = xmax;
    }
    draw(ctx,u,centerX,centerY){
        ctx.beginPath();
        for (let i=this.xmin;i<=this.xmax;i+=0.05/u){
            ctx.lineWidth = 2;
            ctx.moveTo(i*u+centerX,centerY+this.f(-(i-0.05/u))*u);
            ctx.lineTo(i*u+centerX,centerY+this.f(-i)*u);
        }
        ctx.stroke();
    }
    dx(f){
      let a = f(2)-f(1)/(2-1)
      return a
    }
    c(f){
        let c = f(0);
        return c;
    }
    getIntersection(f){
        let x = this.c(f)+this.c(this.f)/this.dx(this.f)+this.dx(f)
        let y = f(x);
        return new Point(-x,-y);
    }
}
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const scales = [25,30,50,65,70,85,100,125];
