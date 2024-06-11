let timeline = gsap.timeline();

gsap.registerPlugin(ScrollTrigger);

// gsap.to(".box",{
//     x:200,
//     duration:4,
//     scrollTrigger:".box"
// })

gsap.to(".box",{
    x:200,
    duration:2,
    scrollTrigger:{
        toggleActions:"restart none none none"
    }})