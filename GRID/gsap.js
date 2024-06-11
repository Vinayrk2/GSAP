gsap.from(".box",{
    opacity:0.3,
    scale:0.1,
    ease:"start",
    rotation:45,
    yoyo:true,
    repeat:5,
    stagger:{
        amount:0.8,
        grid:"auto",
        from:[0.5,0.1]
        
    }
})


// gsap.from(".box",{
//     opacity:0.3,
//     scale:0.1,
//     ease:"power2.out",
//     rotation:45,
//     yoyo:true,
//     repeat:5,
//     stagger:(index,target,list)=>{
//         console.log(index)
//         return 0.1*index;
//     }
// })



// gsap.to(".box", {
//     duration: 1,
//     scale: 0.1,
//     opacity:0,
//     y: 40,
//     ease: "power2.inOut",
//     repeat:5,
//     yoyo:true,
//     stagger: {
//       grid: "auto",
//       from: "center",
//       amount: 1.5   

//     }
//   });