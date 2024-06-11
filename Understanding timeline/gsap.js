let timeline = gsap.timeline();

let a1 = gsap.to("#box1",{backgroundColor:"white",duration:3,repeat:-1})

timeline.to(".container",{backgroundColor:"white",duration:1},2)
.to("#box2",{backgroundColor:"blue",duration:1})
.to("#box3",{backgroundColor:"orange",duration:1})

gsap.to("#box2",{
    scrollTrigger:"#box2",
    x:400
})

document.querySelector("#box1").addEventListener("click",(e)=>{
    timeline.yoyo()? timeline.yoyo(false): timeline.yoyo(true)
})

// function intro() {
// 	var tl = gsap.timeline();
// 	//...add animations here...
// 	return tl;
// }

// function middle() {
// 	var tl = gsap.timeline();
// 	//...add animations here...
// 	return tl;
// }

// function conclusion() {
// 	var tl = gsap.timeline();
// 	//...add animations here...
// 	return tl;
// }

// // stitch them together in a master timeline...
// var master = gsap.timeline();
// master.add(intro())
//       .add(middle(), "+=2")     //with a gap of 2 seconds
//       .add(conclusion(), "-=1") //overlap by 1 second