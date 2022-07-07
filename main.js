var j = -8 ;
let h = (x)=>{return 1-2*x}
let f = (x)=>{return j*x+h(j)}
function animate(){
    canvas.height = innerHeight
    canvas.width = innerWidth
    let centerX = innerWidth/2;
    let centerY = innerHeight/2;
    var i = Math.floor(1.1*innerWidth/innerHeight)
    var unit = scales[2*i]
    var grd = new Gradiations(unit,2,8.2);
    grd.draw(ctx,innerWidth/2,innerHeight/2);
    ctx.fill();
    var pA = new Point(2,1);
    var pB = new Point(-2,1);
    var pC = new Point(0,-2);
    pA.draw(centerX,centerY,unit);
    pB.draw(centerX,centerY,unit);
    pC.draw(centerX,centerY,unit);

    var fonction = new Fonction(f,-3,3);
    fonction.draw(ctx,unit,centerX,centerY);
    if (f(-2)>1){h = (x)=>{return 1+2*x}}
    if (f(0)>-2){h = ()=>{return -2}}
    if (f(2)>1){h = (x)=>{return 1-2*x}}
    f = (x)=>{return j*x+h(j)}
    if (j>10){j=-10}
    // var gs = new Fonction(g,-16,4);
    // fonction.draw(ctx,unit,centerX,centerY);
    // gs.draw(ctx,unit,centerX,centerY);
    // var pts = gs.getIntersection(f);
    // pts.draw(centerX,centerY,unit);

    
    j += 0.05;

    requestAnimationFrame(animate);
}
animate()