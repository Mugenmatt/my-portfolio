export const hiVariants = {
    start: {opacity: 0, transform: 'translateY(-50px)'},
    end: {opacity: 1, transform: 'translateY(0px)', transition: {delay:1.5, duration: 1}}
}
export const nameVariants = {
    start: {opacity: 0, transform: 'translateY(-50px)'},
    end: {opacity: 1, transform: 'translateY(0px)', transition: {delay:2, duration: 1}}
}
export const jobVariants = {
    start: {opacity: 0, transform: 'translateY(-50px)'},
    end: {opacity: 1, transform: 'translateY(0px)', transition: {delay:2.5, duration: 1}}
}

export const faceBoxVariants = {
    start: {clipPath: 'polygon(0 0, 2% 0, 2% 2%, 0% 2%)'},
    end: {clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', transition: {delay:1.5, duration: 1}}
}