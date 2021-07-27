import React, {useEffect} from 'react';
import {
    TitleContainer,
    Title,
    NumberTitle,
    Line
} from './style'
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const PageTitle = ({number, text, lineWidth}) => {


    const {ref, inView} = useInView();
    const titleAnimation = useAnimation();

    useEffect(() => {

        if(inView) {
            titleAnimation.start({
                opacity: 1,
                transition: {
                    type: 'spring', delay: 0.5, duration: 2, bounce: 0.3, when: 'beforeChildren'
                }
            })

        } else {
            titleAnimation.start({
                opacity: 0
            })
        }

    }, [inView, titleAnimation])

    return (
        <TitleContainer ref={ref} animate={titleAnimation}>

            <Title
                initial={{}}
                animate={{}}
            ><NumberTitle>{number}</NumberTitle>{text}</Title>

            <Line lineWidth={lineWidth} />
            
        </TitleContainer>
    );
};

export default PageTitle;