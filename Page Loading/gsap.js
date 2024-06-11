gsap.from("#header",{
    y:-100,
    duration:2
})

const canvas = document.querySelector("#canvas");
const context = canvas.getContext("2d");
let settings = {
    x:0,
    y:0
};

function updateCanvas(){
    context.clearRect(0,0,canvas.width,innerHeight);
    context.fillRect(settings.x,settings.y,100,100)
}

updateCanvas();

gsap.from("#first",{ duration:2,x:-200, backgroundColor:"rgb(90, 92, 86)"});
gsap.from("#second",{ duration:2,y:-200});
gsap.from("#third",{ duration:2,y:100});
gsap.from("#forth",{ duration:2,x:200});
gsap.to("#fifth",{ duration:2,rotation:-270, scale:0.5, delay:1});
gsap.to("#sixth",{ duration:2,rotation:270,repeat:5,yoyo:true,ease:"elastic",force3D:true});
gsap.to("#seven",{ duration:1,scale:0.9,yoyo:true,repeat:5,ease:"bounce.in"});
gsap.to(settings,{x:100,y:50,onUpdate:updateCanvas,duration:4,delay:0.2})

const greet = ()=>{
    alert("Animation completed")
}