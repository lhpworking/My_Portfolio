gsap.registerPlugin(ScrollTrigger);
// controller about myself
const projectContainer = document.querySelector(".main__project");
const myselfContainer = document.querySelector(".main__myself");
const myself = document.querySelectorAll(".main__myself h1");
const myselfBtn = document.querySelector(".main__myself button");
const mainImg = document.querySelector(".main__myself-img img");
const projectImg = document.querySelector(".main__project-img img");

/** animation: section myself */
gsap.fromTo(
  myself,
  { x: -400, y: 0, duration: 4, opacity: 0, ease: Bounce },
  { x: 0, y: 0, duration: 4, opacity: 1, ease: Expo.easeInOut }
);
gsap.fromTo(
  myselfBtn,
  { x: 0, y: 200, duration: 4, opacity: 0, ease: Bounce },
  { x: 0, y: 0, duration: 4, opacity: 1, ease: Expo.easeInOut }
);
gsap.fromTo(
  mainImg,
  { x: 0, y: -400, duration: 4, opacity: 0, ease: Bounce },
  { x: 0, y: 0, duration: 4, opacity: 1, ease: Expo.easeInOut }
);

// overlay
TweenMax.to(".overlay", 4, {
  top: "-100%",
  ease: Expo.easeInOut,
});

// TweenMax.to(".overlay img",1, {
//   repeat: 3,
//   rotate: "360deg",
//   ease: Expo.easeInOut,
// });

//menu-ham
const menuHam = document.querySelector(".header__menu-ham");
const menuBlock = document.querySelector(".header__menu-block");
let menuHamOpen = false;
menuHam.addEventListener("click", () => {
  if (!menuHamOpen) {
    menuHam.classList.add("active");
    menuBlock.classList.add("active");
    menuHamOpen = true;
  } else {
    menuHam.classList.remove("active");
    menuBlock.classList.remove("active");
    menuHamOpen = false;
  }
});
