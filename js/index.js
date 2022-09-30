let navToggled = false;

const menuTimeline = gsap.timeline({ duration: 0, paused: true })

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
    } else {
        menuTimeline.play()
        document.querySelector('.menu').style.display = 'block'
    }

}

