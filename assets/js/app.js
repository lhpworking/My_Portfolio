
const intro = document.querySelector(".intro");
const video = intro.querySelector("video");
const text = intro.querySelector(".intro-text");

// init controller
const introController = new ScrollMagic.Controller();
// create a scene
//scene video
var sceneVideo = new ScrollMagic.Scene({
    duration: 7300, // the scene should last for a scroll distance of 100px
    triggerElement: intro,
    triggerHook: 0,
})
    .setPin(intro) // pins the element for the the scene's duration
    .addTo(introController); // assign the scene to the controller

 //scene text intro 
let textAnimated = new TweenMax.fromTo(text, 6, { opacity: 0 }, { opacity: 1 });
var sceneText = new ScrollMagic.Scene({
    duration: 6000, // the scene should last for a scroll distance of
    triggerElement: intro,
    triggerHook: 0,
})
    .setTween(textAnimated)
    .addTo(introController);

 // animate the scene
let accelAmount = 0.1;
let scrollPosition = 0;
let delay = 0;

sceneVideo.on("update", e => {
    scrollPosition = e.scrollPos / 1000;
});

setInterval(() => {
    delay += (scrollPosition - delay) * accelAmount;
    video.currentTime = scrollPosition;
}, 33.3)

// controller about myself
const container = document.querySelector(".main-container");
const myself = document.querySelectorAll(".main-myself h1");
const mainImg = document.querySelector(".main-img img");


var timeLine = new TimelineMax();
    timeLine.fromTo(myself, 1,{x:-500,y:0,opacity:0}, {x:0,duration:5,opacity:1,type:"soft",ease: "power1.out"})
    timeLine.fromTo(mainImg, 1,{x:0,y:-450,opacity:0.8 }, {x:0,y:0,duration:5,type:"soft",opacity:1,ease:"back.out(1.5))"});

const myselfController = new ScrollMagic.Controller();
var sceneMyself = new ScrollMagic.Scene({
    duration: 5000, // the scene should last for a scroll distance of
    triggerElement: container,
    triggerHook: 0,
})
    .setPin(container)
    .setTween(timeLine)
    .addTo(myselfController);

//menu-ham
const menuHam = document.querySelector(".header-menu-ham");
let menuHamOpen = false;
menuHam.addEventListener('click', () => {
    if (!menuHamOpen) {
        menuHam.classList.add('active');
        menuHamOpen = true;
    } else {
        menuHam.classList.remove('active');
        menuHamOpen = false;
    }
})