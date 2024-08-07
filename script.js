var cursor = document.querySelector(".cursor");
var main = document.querySelector(".main");

main.addEventListener("mousemove",function(dets){
    gsap.to(".cursor",{
        x:dets.x,
        y:dets.y,
        duration:1,
       
      
    })
})

gsap.to(".cursor", {
    rotation: 1330,
    ease: "none",
    scrollTrigger: {
        trigger: ".main",
        start: "top top",
        end: "bottom bottom",
        scrub: 1
    }
});