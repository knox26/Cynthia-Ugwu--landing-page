const scroll = new LocomotiveScroll({
  el: document.querySelector(`.main`),
  smooth: true,
  lerp: 0.1,
});

function page1anime() {
  var t1 = gsap.timeline();
  t1.from("nav", {
    y: "-10",
    opacity: 0,
    ease: Expo.easeInOut,
  }).to("#boundingele", {
    y: "0",
    ease: Expo.easeInOut,
    duration: 2,
    stagger: 0.4,
    delay: -0.7,
  });
}

page1anime();

const mouse = () => {
  window.addEventListener("mousemove", function (dets) {
    gsap.to(".mousefollower", {
      x: dets.clientX,
      y: dets.clientY,
    });
  });
};
mouse();

document.querySelectorAll(".ele").forEach(function (ele) {
  var rotate = 0;
  var diffrot = 0;
  ele.addEventListener("mouseenter", function (dets) {
    gsap.to(ele.querySelector("img"), {
      opacity: 1,
      scale: 0.7,
      ease: Power3,
    });
    ele.addEventListener("mousemove", function (dets) {
      gsap.to(ele.querySelector("img"), {
        x: dets.clientX - 70,
        y: dets.clientY - 300,
        rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
        duration: 0.5,
      });
    });
    ele.addEventListener("mouseleave", function () {
      gsap.to(ele.querySelector("img"), {
        opacity: 0,
        scale: 0,
        ease: Power3,
        duration: 0.5,
      });
    });
  });
});
