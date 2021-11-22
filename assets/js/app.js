gsap.registerPlugin(ScrollTrigger);
// controller about myself
const projectContainer = document.querySelector(".main__project");
const myselfContainer = document.querySelector(".main__myself");
const myself = document.querySelectorAll(".main__myself h1");
const myselfBtn = document.querySelector(".main__myself button");
const mainImg = document.querySelector(".main__myself-img img");
const projectImg = document.querySelector(".main__project-img img");
const socialItem = document.querySelectorAll(".social__block-item");
/** animation: section myself */
gsap.fromTo(
  myself,
  { x: -400, y: 0, duration: 4, opacity: 0, ease: "bounce" },
  { x: 0, y: 0, duration: 4, opacity: 1, ease: "power1" }
);
gsap.fromTo(
  myselfBtn,
  { x: 0, y: 200, duration: 4, opacity: 0, ease: "bounce" },
  { x: 0, y: 0, duration: 4, opacity: 1, ease: "bounce" }
);
gsap.fromTo(
  mainImg,
  { x: 0, y: -400, duration: 4, opacity: 0, ease: "bounce" },
  { x: 0, y: 0, duration: 4, opacity: 1, ease: "bounce" }
);

gsap.fromTo(
  socialItem,
  { x: 200, y: 0, duration: 4, opacity: 0, ease: "bounce" },
  { x: 0, y: 0, duration: 4, opacity: 1, ease: "bounce" }
);

// overlay
TweenMax.to("body", 3, {
  overflow: "hidden",
  onComplete() {
    gsap.to(this.targets(), {
      overflow: "visible",
    });
  },
});
TweenMax.to(".overlay", 4, {
  top: "-100%",
  display: "none",
  ease: Expo.easeInOut,
});
//menu-ham
const menuInfo = document.querySelector("#menu-info");
const menuBlock = document.querySelector(".header__menu-block");

menuInfo.addEventListener("click", () => {
  menuBlock.classList.toggle("active");
  document.querySelector("body").style.overflow = "hidden";
});
// menu-close
const menuClose = document.querySelector("#menu-close");
menuClose.addEventListener("click", () => {
  menuBlock.classList.remove("active");
  document.querySelector("body").style.overflow = "visible";
});
