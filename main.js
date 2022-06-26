let f = (x)=>{return 3*x-1}
let g = (x)=>{return 2*x-2}
function animate(){
    canvas.height = innerHeight
    canvas.width = innerWidth
    let centerX = innerWidth/2;
    let centerY = innerHeight/2;
    var i = Math.floor(1.1*innerWidth/innerHeight)
    var unit = scales[2*i];
    var grd = new Gradiations(unit,2,12);
    grd.draw(ctx,innerWidth/2,innerHeight/2);
    ctx.fill()
    var fonction = new Fonction(f,-2,2);
    var gs = new Fonction(g,-2,2);
    fonction.draw(ctx,unit,centerX,centerY);
    gs.draw(ctx,unit,centerX,centerY);
    var pts = fonction.getIntersection(g);
    pts.draw(centerX,centerY,unit);
    requestAnimationFrame(animate);
}
animate()