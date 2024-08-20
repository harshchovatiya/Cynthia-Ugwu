// scroll smooth------------------------------------------------
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
// ----------------------------------------------------------


// first pagge animation ---------------------------------
function firstPageAnim() {
    var tl = gsap.timeline();
  
    tl.from("#nav", {
      x: 100,
      opacity: 0,
      duration: 1.5,
      ease: Expo.easeInOut,
    })
      .to(".anim", {
        x: 0,
        ease: Expo.easeInOut,
        duration: 2,
        delay: -1,
        stagger: 0.2,
      })
      .to(".anim1", {
        x: 0,
        ease: Expo.easeInOut,
        duration: 2,
        delay: -1,
        stagger: 0.1,
      })
      .from("#herofooter", {
        x: 100,
        opacity: 0,
        duration: 1.5,
        delay: -1,
        ease: Expo.easeInOut,
      });
    }
// --------------------------------------------------------------

firstPageAnim()

// mouse roundmate -------------------------------------------------
Shery.mouseFollower({
 
});


Shery.makeMagnet("#a" , {
  
});


document.querySelectorAll(".elem").forEach(function (elem) {
  var rotate = 0;
  var diffrot = 0;

  elem.addEventListener("mouseleave", function (dets) {
    gsap.to(elem.querySelector("img"), {
      opacity: 0,
      ease: Power3,
      duration: 0.5,
    });
  });

  elem.addEventListener("mousemove", function (dets) {
    var diff = dets.clientY - elem.getBoundingClientRect().top;
    diffrot = dets.clientX - rotate;
    rotate = dets.clientX;
    gsap.to(elem.querySelector("img"), {
      opacity: 1,
      ease: Power3,
      top: diff,
      left: dets.clientX,
      rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
    });
  });
});
