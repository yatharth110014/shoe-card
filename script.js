const container = document.querySelector('.container');
const card = document.querySelector('.card');
const shoe = document.querySelector('.shoe img');
const info = document.querySelector('.info');

container.addEventListener("mousemove", (e)=>{
let XAxis = (window.innerWidth/2 - e.pageX)/10;
let YAxis = (window.innerHeight/2 - e.pageY)/10;
card.style.transform = `rotateY(${YAxis}deg)  rotateX(${XAxis}deg)`;
})

container.addEventListener("mouseleave", (e)=>{
card.style.transform = `translateZ(0px)`;
card.style.transition = "all 0.5s ease";
})

container.addEventListener("mouseenter", (e)=>{
shoe.style.transform = `translateZ(200px) rotateZ(20deg)`;
card.style.transition = "all 0.5s ease";
})



container.addEventListener("mouseleave", (e)=>{
shoe.style.transform = `translateZ(0px)`;
card.style.transition = "all 0.5s ease";
})

container.addEventListener("mouseenter", (e)=>{
info.style.transform = `translateZ(200px)`;
card.style.trasition = `none`;
})

container.addEventListener("mouseleave", (e)=>{
info.style.transform = `translateZ(0px)`;
card.style.transition = "all 0.5s ease";
})
