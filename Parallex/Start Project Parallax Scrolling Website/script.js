let text = document.querySelector(".title");
let leaf = document.getElementById('leaf');
let hill1 = document.getElementById('hill1');
let hill4 = document.getElementById('hill4');
let hill5 = document.getElementById('hill5');

gsap.from(".images",{scale:2,duration:6,stagger:0.5,opacity:0});
gsap.from(".navbar",{y:-200,delay:6})

window.addEventListener("scroll",(e)=>{
    let value = window.scrollY;
    // console.log(value)
    text.style.marginTop = value * 1.5 + "px";
    leaf.style.top = value * (-1) + "px";
    hill4.style.left = value * (-1.3) + "px";
    hill5.style.left = value * (1.3) + "px";
})