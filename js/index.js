
let navToggled = false;
gsap.registerPlugin(ScrollTrigger);

const menuTimeline = gsap.timeline({ duration: 0, paused: true })
const preloadTimeline = gsap.timeline({ delay: .5, duration: 0 })


menuTimeline.from('.menu', {
    opacity: 0,
    duration: .2
}).from('.menu-links li', {
    y: -20,
    opacity: 0,
    duration: .3,
    stagger: .05
})

async function toggleNav() {
    navToggled = !navToggled
    if (!navToggled) {
        await menuTimeline.reverse()
        document.querySelector('.menu').style.display = 'none'
        document.querySelector('.navbar').style.position = 'relative'
    } else {
        menuTimeline.play()
        document.querySelector('.menu').style.display = 'block'
        document.querySelector('.navbar').style.position = 'fixed'
        document.querySelector('.navbar').style.zIndex = '20'
    }

}

var Cont = { val: 0 },
  NewVal = 100;

preloadTimeline.to(Cont, {
    duration: 10,
    val: NewVal,
    roundProps: "val",
    onUpdate: function () {
      document.getElementById("number").innerHTML = Cont.val;
    }
  }).to('.loading-bar', {
    width: '100%',
    duration: 10,
  },0).from('.loading-number',{
    right: '80%',
    duration: 10,
  },0).to('.preloader',{
    y: '-100vh'
  }).to('.preloader2',{
    y: '-100vh'
  },10.1).to('.preloader3',{
    y: '-100vh'
  },10.2).from('html',{
    overflowY: 'hidden'
  }).from('.hero-content p, .hero-content img', {
        duration: 1, 
        y: 80,
        opacity: 0,
        ease: 'power.out',
        stagger: .1,
       rotate: -3
    }, 10.4)
    
    gsap.from('.section-1 p, .section-1 span, .section-1 img, .section-1 div, .section-1 button ',{
        duration: 1, 
        y: 80,
        opacity: 0,
        ease: 'power.out',
        stagger: .1,
       rotate: -3,
       scrollTrigger:{
        trigger : '.section-1 .container',
        start:'top+=10 bottom-=50',
        
       }
    })

    gsap.from('.section-2 p, .section-2 span, .section-2 img, .section-2 div, .section-2 button ',{
        duration: 1, 
        y: 80,
        opacity: 0,
        ease: 'power.out',
        stagger: .1,
       rotate: -3,
       scrollTrigger:{
        trigger : '.section-2 .container',
        start:'top+=10 bottom-=50',
        
       }
    })

    gsap.from('.section-3 p, .section-3 span, .section-3 img, .section-3 div, .section-3 button ',{
        duration: 1, 
        y: 80,
        opacity: 0,
        ease: 'power.out',
        stagger: .1,
       rotate: -3,
       scrollTrigger:{
        trigger : '.section-3 .container',
        start:'top+=10 bottom-=50',
        
       }
    })

    gsap.from('.section-4 p, .section-4 span, .section-4 img, .section-4 div, .section-4 button ',{
        duration: 1, 
        y: 80,
        opacity: 0,
        ease: 'power.out',
        stagger: .1,
       rotate: -3,
       scrollTrigger:{
        trigger : '.section-4 .container',
        start:'top+=10 bottom-=50',
        
       }
    })

