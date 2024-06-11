gsap.from(".trees",
    {
        opacity:0.3,
        duration:3,
        delay:0.4,
        stagger:0.5,
        y:200,
        onComplete: ()=>afterTreeGrow()
    }
)

gsap.from("h2",{
    scale:0.2,
    duration:2,
    delay:4,
    y:-100,
    opacity:0
})

function afterTreeGrow(){
    gsap.to(document.querySelectorAll(".trees")[2],{
        scale:2,
        duration:5,
        y:-140
    });
}