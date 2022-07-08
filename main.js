const f = (x) => {return 2*x+2}
function animate(){
    canvas.height = innerHeight
    canvas.width = innerWidth
    let centerX = innerWidth/2;
    let centerY = innerHeight/2;
    var i = Math.floor(1.6*innerWidth/innerHeight)
    var unit = scales[2*i]
    var grd = new Gradiations(unit,1.2,8);
    grd.draw(ctx,innerWidth/2,innerHeight/2);
    ctx.fill();
    var fon = new Fonction(f,unit,-4,4);
    fon.draw(ctx,centerX,centerY);
    var pB = new Point(0,0);
    pB.draw(centerX,centerY,unit);
    var pA = new Point(-2,1);
    pA.draw(centerX,centerY,unit);
    console.log(pB)
    var v1 = new Vector(null,null,pA,pB);
    v1.draw(ctx,unit);
    let x = v1.getNorm(v1.getCord().x,v1.getCord().y);
    ctx.font = "36px Calibri";
    ctx.fillText(x,centerX+v1.getCenterPoint().x+10,centerY+v1.getCenterPoint().y*unit+10);
    v1.getCenterPoint().draw(centerX,centerY,unit);
    requestAnimationFrame(animate);
}
animate()