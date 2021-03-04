const options = {
    y: 50,
    opacity: 0,
    duration: 5,
    borderRadius:'50%',
    backgroundColor: '#25ffaa'
}

const order = gsap.timeline()


order.from('.picture', options)
order.to('.circle', {morphSVG: ".star", duration: 3})