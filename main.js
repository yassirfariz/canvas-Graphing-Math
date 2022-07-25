var t=-Math.PI;
var m = parseFloat(document.cookie.split('=')[1]) || 1.6;
var state = true;
var f = (x) => {return Math.cos(x-Math.PI/4)+Math.sin(x-Math.PI/4)};
window.addEventListener('keypress',(e)=>{
    if(e.key == ">"){
        m+=0.5;
    }
    if(e.key == "<"){
        m-=0.5;
    }
    if (e.key == " "){
        state = !state;
    }
})
document.cookie="m="+m;
function animate(){
    canvas.height = innerHeight
    canvas.width = innerWidth
    let centerX = innerWidth/2;
    let centerY = innerHeight/2;
    var i = Math.floor(m*innerWidth/innerHeight)
    var unit = scales[2*i]
    var grd = new Gradiations(unit,1.2,8);
    grd.draw(ctx,innerWidth/2,innerHeight/2);
    var fon = new Fonction(f,-3*Math.PI,3*Math.PI);
    fon.graphQ(ctx,unit,centerX,centerY);
    if(state){
        t+=0.01;
    }
    requestAnimationFrame(animate);
}

animate()