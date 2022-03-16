let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();

//timeline
//.to('.text', 5, { x:500})
//.to('.content-images', 2, { opacity: 0}, '-=2')

//timeline
//.fromTo('.content-images', { opacity: 0}, { opacity: 1, duration: 3})

timeline
.to('.bg3', 3, {y: -400})
.to('.bg2', 3, {y: -200}, "-=3")
.fromTo('.bg1', 3, {y: -10}, {y: 0, duration: 3}, "-=3")
.to('.content', 3, {top:'0%'}, '-=3')
.fromTo('.content-images', {opacity: 0}, {opacity: 1, duration: 3}, "-=2")

let scene = new ScrollMagic.Scene({
  triggerElement: "section",
  duration: "150%",
  triggerHook: 0,
})
.setTween(timeline)
.setPin('section')
.addTo(controller);
