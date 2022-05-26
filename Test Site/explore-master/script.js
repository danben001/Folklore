// Interactive Digital Media
// Daniel Benhamou – 3011151 – danielb009@hotmail.com
// Parallax script referenced from Dev Ed, published on on Apr 16, 2021 https://github.com/developedbyed/explore

//ScrollMagic is a library which allows for scripts to be triggered when scrolling.
let controller = new ScrollMagic.Controller();
//Timeline allows multiple animations to be chained together
let timeline = new TimelineMax();


//Adjust the Y position of each image layer at different speeds based on a duraton of 3 seconds
timeline
  .to('.bg3', 3, {
    y: -400
  })
  .to('.bg2', 3, {
    y: -200
  }, "-=3")
  .fromTo('.bg1', 2, {
    y: -40
  }, {
    y: 0,
    duration: 3
  }, "-=3")
  .to('.content', 3, {
    top: '0%'
  }, '-=3')
  .fromTo('.content-images', {
    opacity: 0
  }, {
    opacity: 1,
    duration: 3
  }, "-=2")

//Set up a ScrollMagic scene to trigger the animation. Trigger this on the section element.
//Duration adjusts the speed in which all animations last. increasing the duration makes animations longer
//Trigger hook at 0 means it will trigger at the begiining of the page (1 being the bottom)
let scene = new ScrollMagic.Scene({
    triggerElement: "section",
    duration: "150%",
    triggerHook: 0,
  })
  //Connect the animation to the scene
  .setTween(timeline)
  //Pinning the parallax section to the rest of the page
  .setPin('section')
  //Add ScrollMagic scene to the controller
  .addTo(controller);
