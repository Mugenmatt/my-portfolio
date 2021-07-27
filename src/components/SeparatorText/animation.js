export const separatorVariants = {
    start: {width: 0},
    end: {width: '10vw', transition: {duration: 0.6}}
}

export const pathVariants = {
    start: {opacity: 0, pathLength: 0},
    end: {opacity: 1, pathLength: 1, fill: ['rgba(0, 0, 0, 0)', 'rgba(255, 255 ,255)'], transition: {duration: 5, ease:'easeInOut'}}
}