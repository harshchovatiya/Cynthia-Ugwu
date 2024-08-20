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
    function mobilefirstPageAnim() {
        var tl = gsap.timeline();
      
        tl.from("#tab-nav", {
          x: 100,
          opacity: 0,
          duration: 1.5,
          ease: Expo.easeInOut,
        })
          .to(".tab-anim", {
            x: 0,
            ease: Expo.easeInOut,
            duration: 2,
            delay: -1,
            stagger: 0.2,
          })
          .to(".tab-anim1", {
            x: 0,
            ease: Expo.easeInOut,
            duration: 2,
            delay: -1,
            stagger: 0.1,
          })
          .from("#tab-herofooter", {
            x: 100,
            opacity: 0,
            duration: 1.5,
            delay: -1,
            ease: Expo.easeInOut,
          });
        }
    function tabfirstPageAnim() {
        var tl = gsap.timeline();
      
        tl.from("#mobile-nav", {
          x: 100,
          opacity: 0,
          duration: 1.5,
          ease: Expo.easeInOut,
        })
          .to(".mobile-anim", {
            x: 0,
            ease: Expo.easeInOut,
            duration: 2,
            delay: -1,
            stagger: 0.2,
          })
          .to(".mobile-anim1", {
            x: 0,
            ease: Expo.easeInOut,
            duration: 2,
            delay: -1,
            stagger: 0.1,
          })
          .from("#mobile-herofooter", {
            x: 100,
            opacity: 0,
            duration: 1.5,
            delay: -1,
            ease: Expo.easeInOut,
          });
        }
// --------------------------------------------------------------

firstPageAnim()
mobilefirstPageAnim()
tabfirstPageAnim()

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

document.querySelectorAll(".mobile-elem").forEach(function (elem) {
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
document.querySelectorAll(".tab-elem").forEach(function (elem) {
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
